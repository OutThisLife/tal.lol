import * as d3 from 'd3'
import { useCallback, useEffect, useRef, useState } from 'react'

let tm: d3.Timer

export default () => {
  const $canvas = useRef<HTMLCanvasElement>(null)

  const [dimensions, setDims] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0
  })

  const handleResize = useCallback(
    ({ cv, ctx }) => {
      ctx.clearRect(0, 0, cv.width, cv.height)
      cv.width = window.innerWidth
      cv.height = window.innerHeight

      setDims(() => ({
        width: cv.width,
        height: cv.height
      }))
    },
    [$canvas]
  )

  const draw = useCallback(
    ({ cv, ctx, mouse }) => {
      if (!cv.width) {
        return
      }

      ctx.clearRect(0, 0, cv.width, cv.height)

      const size = cv.width / 25

      const jumps = () => {
        ctx.beginPath()
        ctx.strokeStyle = '#00f'

        const r = size
        const a = r / (Math.PI / 4)

        for (let x = 0; x <= cv.width; x += size) {
          for (let y = 0; y <= cv.height; y += size) {
            ctx.moveTo(x, y)
            ctx.bezierCurveTo(x, y, x + a, y - r, x + r, y - r)

            ctx.moveTo(x, y)
            ctx.bezierCurveTo(x, y, x - a, y - r, x - r, y - r)
          }
        }

        ctx.stroke()
      }

      const grid = () => {
        ctx.beginPath()
        ctx.strokeStyle = '#eee'

        for (let x = 0; x <= cv.width; x += size) {
          ctx.moveTo(x, 0)
          ctx.lineTo(x, cv.height)
        }

        for (let y = 0; y <= cv.height; y += size) {
          ctx.moveTo(0, y)
          ctx.lineTo(cv.width, y)
        }

        ctx.stroke()
      }

      const spotlight = () => {
        const r = Math.max(cv.width, cv.height) / 4
        const x = mouse.x - r / 2
        const y = mouse.y - r / 2

        ctx.globalCompositeOperation = 'xor'
        ctx.filter = `blur(${size / 2}px)`

        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, cv.width, cv.height)

        ctx.fillStyle = 'rgba(0,0,255,.1)'
        ctx.fillRect(x, y, r, r)

        ctx.filter = 'none'
        ctx.fillStyle = 'transparent'
        ctx.globalCompositeOperation = 'source-over'
      }

      jumps()
      spotlight()
      grid()
    },
    [$canvas]
  )

  useEffect(
    () => {
      if (
        !('browser' in process || $canvas.current instanceof HTMLCanvasElement)
      ) {
        return
      }

      const cv = $canvas.current
      const ctx = cv.getContext('2d')

      if (
        navigator.maxTouchPoints ||
        window.innerWidth <= 1024 ||
        !/((?=.*Safari)(?=.*Chrome))|(?=.*Mozilla).*/i.test(navigator.userAgent)
      ) {
        $canvas.current.remove()
        return
      }

      if (typeof tm === 'object' && 'stop' in tm) {
        tm.stop()
      }

      const mouse = { x: 0, y: 0 }
      const args = { cv, ctx, mouse }

      try {
        d3.select(document.body).on('mousemove', () => {
          const m = d3.event

          d3.select($canvas.current)
            .transition()
            .duration(75)
            .ease(d3.easeCircle)
            .tween('data', () => {
              const x = d3.interpolateNumber(mouse.x, m.clientX)
              const y = d3.interpolateNumber(mouse.y, m.clientY)

              return i => {
                mouse.x = x(i)
                mouse.y = y(i)
              }
            })
        })

        window.requestAnimationFrame(() => {
          handleResize(args)
          tm = d3.timer(draw.bind(null, args))
        })

        window.addEventListener('resize', handleResize.bind(null, args))
      } catch (err) {
        console.trace(err)
      }

      return () => {
        window.removeEventListener('resize', handleResize.bind(null, args))
      }
    },
    [$canvas]
  )

  return (
    <canvas
      ref={$canvas}
      id="bg-grid"
      style={{
        zIndex: -1,
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        ...dimensions
      }}
      {...dimensions}
    />
  )
}
