import * as d3 from 'd3'
import {
  branch,
  compose,
  renderComponent,
  setDisplayName,
  withHandlers,
  withState
} from 'recompose'

interface TInner {
  onRef: (r: HTMLCanvasElement) => void
}

interface TState {
  width?: number
  height?: number
  setDims?: (
    s: () => {
      width: number
      height: number
    }
  ) => void
}

let tm: d3.Timer

export default compose<TInner & TState, {}>(
  setDisplayName('bg'),
  branch(() => !('browser' in process), renderComponent(() => null)),
  withState('dimensions', 'setDims', {
    width: 0,
    height: 0
  }),
  withHandlers<TState, TInner>(({ setDims }) => ({
    onRef: () => ref => {
      if (!ref) {
        return
      } else if (
        navigator.maxTouchPoints ||
        window.innerWidth <= 1024 ||
        !/((?=.*Safari)(?=.*Chrome))|(?=.*Mozilla).*/i.test(navigator.userAgent)
      ) {
        ref.remove()
      } else if (typeof tm === 'object' && 'stop' in tm) {
        tm.stop()
      }

      const cv = ref as HTMLCanvasElement
      const ctx = cv.getContext('2d')
      const mouse = { x: 0, y: 0 }

      const onResize = () => {
        if (!(cv instanceof HTMLCanvasElement)) {
          return
        }

        ctx.clearRect(0, 0, cv.width, cv.height)
        cv.width = window.innerWidth
        cv.height = window.innerHeight

        setDims(() => ({
          width: cv.width,
          height: cv.height
        }))
      }

      const draw = () => {
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
          const r = Math.max(cv.width, cv.height) / 2
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
      }

      d3.select(document.body).on('mousemove', () => {
        mouse.x = d3.event.clientX
        mouse.y = d3.event.clientY
      })

      window.requestAnimationFrame(onResize)
      window.addEventListener('resize', onResize)

      tm = d3.timer(draw)
    }
  }))
)(({ onRef, width, height }) => (
  <canvas
    ref={onRef}
    id="bg-grid"
    width={width}
    height={height}
    style={{
      zIndex: -1,
      pointerEvents: 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width,
      height
    }}
  />
))
