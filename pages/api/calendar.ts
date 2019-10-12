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

      slice: (v, n: number) => (typeof v === 'string' ? v.slice(n) : v),

      clean: v => {
        if (typeof v !== 'string') {
          return v
        }

        return v
          .trim()
          .replace(/\n/gi, '')
          .replace(/\r/gi, '')
          .replace(/\t/gi, '')
      }
    }
  })

  x(
    'https://www.forexfactory.com/calendar.php',
    '.calendar__table',
    x('tr', [
      {
        date: '.date | clean | slice:3 | last',
        time: '.time | clean',
        currency: '.currency | clean',
        impact: '.calendar__impact-icon > span@class',
        title: '.calendar__event-title'
      }
    ])
  )
    .then(render(res))
    .catch(err => {
      console.error(err)
      res.status(500)
      res.send(err)
    })
}

const render = (res: NextApiResponse) => (data: Item[] = []) =>
  res.send(
    ical({
      domain: 'talasan.dev',
      name: 'FX Calendar',
      prodId: { company: 'talasan', product: 'fx-cal' },
      events: data.map(d => ({
        start:
          d.time && !/all/i.test(d.time)
            ? moment(`${d.date} ${d.time.replace(/(pm|am)/i, ' $1')}`)
            : moment(d.date),
        summary: d.title
      }))
    }).toString()
  )

interface Item {
  date: string
  time: string
  title: string
}
