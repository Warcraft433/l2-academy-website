import { useEffect, useRef } from 'react'

export default function ParticleWaveCanvas({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animId = null
    let time = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(rect.width * dpr))
      canvas.height = Math.max(1, Math.floor(rect.height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const drawFrame = (t) => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      if (!width || !height) return

      ctx.clearRect(0, 0, width, height)

      const isMobile = width < 768
      const rings = isMobile ? 6 : 9
      const dotsPerRing = isMobile ? 48 : 76
      const centerX = isMobile ? width * 0.52 : width * 0.54
      const centerY = isMobile ? height * 0.44 : height * 0.48
      const baseRadius = Math.min(width, height) * (isMobile ? 0.38 : 0.42)

      for (let r = 0; r < rings; r++) {
        const ringRatio = r / (rings - 1)
        const radiusX = baseRadius * (0.72 + ringRatio * 0.68)
        const radiusY = baseRadius * (0.46 + ringRatio * 0.48)
        const tilt = -0.35 + ringRatio * 0.14

        for (let i = 0; i < dotsPerRing; i++) {
          const angle = (i / dotsPerRing) * Math.PI * 2 + t * (0.18 - ringRatio * 0.04) + r * 0.22
          const waveOffset = Math.sin(angle * 3 + t * 0.9 + r) * (isMobile ? 6 : 10)

          const localX = Math.cos(angle) * (radiusX + waveOffset)
          const localY = Math.sin(angle) * (radiusY + waveOffset * 0.6)

          const x = centerX + localX * Math.cos(tilt) - localY * Math.sin(tilt)
          const y = centerY + localX * Math.sin(tilt) + localY * Math.cos(tilt)

          // Fade particles near the horizontal center so hero typography stays ultra-crisp
          const dx = (x - width * 0.5) / (width * 0.42)
          const dy = (y - height * 0.46) / (height * 0.36)
          const centerDist = Math.sqrt(dx * dx + dy * dy)
          const centerFade = Math.min(1, Math.max(0.14, (centerDist - 0.35) * 1.15))

          const alpha = (0.14 + (1 - ringRatio) * 0.22) * centerFade
          const dotSize = (isMobile ? 1.15 : 1.35) + (1 - ringRatio) * 0.65

          ctx.fillStyle = r % 2 === 0
            ? `rgba(15, 98, 165, ${alpha.toFixed(3)})`
            : `rgba(59, 142, 201, ${alpha.toFixed(3)})`

          ctx.beginPath()
          ctx.arc(x, y, dotSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    resize()
    drawFrame(0)

    const onResize = () => {
      resize()
      if (mediaQuery.matches) drawFrame(0)
    }
    window.addEventListener('resize', onResize, { passive: true })

    const renderLoop = () => {
      if (document.visibilityState === 'visible' && !mediaQuery.matches) {
        time += 0.008
        drawFrame(time)
      }
      animId = window.requestAnimationFrame(renderLoop)
    }

    if (!mediaQuery.matches) {
      animId = window.requestAnimationFrame(renderLoop)
    }

    return () => {
      window.removeEventListener('resize', onResize)
      if (animId !== null) window.cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`particle-wave-canvas ${className}`} aria-hidden="true" />
}
