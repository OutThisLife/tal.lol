import ical from 'ical-generator'
import moment from 'moment'
import { NextApiRequest, NextApiResponse } from 'next'
import xray from 'x-ray'

export default (_: NextApiRequest, res: NextApiResponse) => {
  let lastV

  const x = xray({
    filters: {
      default: (v, dv) => (typeof v === 'string' ? v || dv : v),

      last: v => {
        if (typeof v !== 'string') {
          return v
        }

        if (v.length) {
          lastV = `${v}, ${new Date().getFullYear()}`
        }

        return lastV
      },

      slice: (v, n) => (typeof v === 'string' ? v.slice(parseInt(n, 10)) : v),

      clean: v => {
        if (typeof v !== 'string') {
          return v
        }

        return v
          .trim()
          .replace(/\n/gi, '')
          .replace(/\r/gi, '')
          .replace(/\t/gi, '')
      },

      upper: v => (typeof v === 'string' ? v.toUpperCase() : v)
    }
  })

  x(
    'https://www.forexfactory.com/calendar.php',
    '.calendar__table',
    x('tr', [
      {
        currency: '.currency | clean | upper',
        date: '.date | clean | slice:3 | last',
        impact: '.calendar__impact-icon > span@class | upper',
        time: '.time | clean',
        title: '.calendar__event-title | clean'
      }
    ])
  )
    .then(render(res))
    .catch(err => res.status(500).end(err))
}

const render = (res: NextApiResponse) => (data: Item[] = []) => {
  res.writeHead(200, {
    'Content-Type': 'text/calendar; charset=utf-8',
    'Content-Disposition': 'attachment; filename="calendar.ics"'
  })

  res.end(
    ical({
      domain: 'talasan.dev',
      name: 'FX Calendar',
      prodId: { company: 'talasan', product: 'fx-cal' },
      events: data
        .filter(d => d.title && /high|medium/i.test(d.impact))
        .map(({ currency, date, impact, time, title }) => {
          try {
            const summary = `${currency} - ${impact} - ${title}`

            const start =
              time && !/all/i.test(time)
                ? moment(`${date} ${time.replace(/(pm|am)/i, ' $1')}`)
                : moment(date)

            const end = moment(start).add(15, 'minutes')

            return {
              description: summary,
              end,
              organizar: 'FX',
              start,
              summary
            }
          } catch (e) {
            return null
          }
        })
        .filter(v => v)
    }).toString()
  )
}

interface Item {
  date: string
  time: string
  title: string
  currency?: string
  impact?: string
}
