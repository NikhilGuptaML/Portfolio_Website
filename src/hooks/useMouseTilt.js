import { useCallback, useRef } from 'react'

export default function useMouseTilt({ maxTilt = 8, scale = 1.02, speed = 400 } = {}) {
  const ref = useRef(null)
  const animationRef = useRef(null)
  const currentTransform = useRef({ rotateX: 0, rotateY: 0, scale: 1 })

  const handleMouseMove = useCallback(
    (event) => {
      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const mouseX = event.clientX - centerX
      const mouseY = event.clientY - centerY

      const rotateY = (mouseX / (rect.width / 2)) * maxTilt
      const rotateX = -(mouseY / (rect.height / 2)) * maxTilt

      currentTransform.current = { rotateX, rotateY, scale }

      element.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
    },
    [maxTilt, scale, speed]
  )

  const handleMouseLeave = useCallback(() => {
    const element = ref.current
    if (!element) return

    currentTransform.current = { rotateX: 0, rotateY: 0, scale: 1 }
    element.style.transition = 'transform 600ms cubic-bezier(0.03, 0.98, 0.52, 0.99)'
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }, [])

  const tiltProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  }

  return tiltProps
}
