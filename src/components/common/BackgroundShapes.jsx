// src/components/common/BackgroundShapes.jsx
import { useEffect, useRef } from 'react'

function BackgroundShapes({ className }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resize()

    let width = canvas.width
    let height = canvas.height

    const SHAPE_COUNT = 900
    const shapes = []

    const mouse = { x: 0, y: 0, vx: 0, vy: 0 }
    let lastMX = 0
    let lastMY = 0

    const randomType = () => {
      const types = ['circle', 'square', 'triangle', 'cross']
      return types[Math.floor(Math.random() * types.length)]
    }

    // 🌊 입자들의 기본 위치(고정된 물 층)
    const createShape = () => {
      return {
        baseX: Math.random() * width,
        baseY: height * (0.65 + Math.random() * 0.25), // 화면 아래쪽 띠 구간 유지
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        size: 1 + Math.random() * 2,
        type: randomType(),
        alpha: 0.45 + Math.random() * 0.35,
      }
    }

    for (let i = 0; i < SHAPE_COUNT; i++) {
      const s = createShape()
      s.x = s.baseX
      s.y = s.baseY
      shapes.push(s)
    }

    const handleResize = () => {
      resize()
      width = canvas.width
      height = canvas.height

      shapes.forEach((s) => {
        s.baseX = Math.random() * width
        s.baseY = height * (0.65 + Math.random() * 0.25)
        s.x = s.baseX
        s.y = s.baseY
      })
    }

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top

      mouse.vx = mx - lastMX
      mouse.vy = my - lastMY
      mouse.x = mx
      mouse.y = my

      lastMX = mx
      lastMY = my
    }

    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('resize', handleResize)

    const drawShape = (s) => {
      ctx.save()
      ctx.globalAlpha = s.alpha
      ctx.fillStyle = '#ffffff'
      ctx.strokeStyle = '#ffffff'
      ctx.translate(s.x, s.y)

      switch (s.type) {
        case 'circle':
          ctx.beginPath()
          ctx.arc(0, 0, s.size, 0, Math.PI * 2)
          ctx.fill()
          break
        case 'square':
          ctx.fillRect(-s.size, -s.size, s.size * 2, s.size * 2)
          break
        case 'triangle':
          ctx.beginPath()
          ctx.moveTo(0, -s.size)
          ctx.lineTo(s.size, s.size)
          ctx.lineTo(-s.size, s.size)
          ctx.closePath()
          ctx.fill()
          break
        case 'cross':
          ctx.beginPath()
          ctx.moveTo(-s.size, 0)
          ctx.lineTo(s.size, 0)
          ctx.moveTo(0, -s.size)
          ctx.lineTo(0, s.size)
          ctx.stroke()
          break
      }

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      shapes.forEach((s) => {
        // 🌊 1. 마우스 휘젓기 힘
        const dx = s.x - mouse.x
        const dy = s.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy) + 1
        const influence = Math.max(0, 1 - dist / 180)

        s.vx += mouse.vx * influence * 0.55
        s.vy += mouse.vy * influence * 0.55

        // 🌊 2. base 위치로 돌아가려는 스프링 힘 (중력 대신)
        const springX = (s.baseX - s.x) * 0.06
        const springY = (s.baseY - s.y) * 0.06
        s.vx += springX
        s.vy += springY

        // 🌊 3. 마찰
        s.vx *= 0.90
        s.vy *= 0.90

        s.x += s.vx
        s.y += s.vy

        drawShape(s)
      })

      // 마우스 속도도 서서히 감쇠
      mouse.vx *= 0.9
      mouse.vy *= 0.9

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} />
}

export default BackgroundShapes

