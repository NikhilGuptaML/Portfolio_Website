import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return undefined
    }

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) {
      return undefined
    }

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let frameId = 0

    const updateMouse = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const setHoverState = (active) => {
      ring.classList.toggle(styles.active, active)
    }

    const handleOver = (event) => {
      if (event.target.closest('a, button, [data-cursor="hover"]')) {
        setHoverState(true)
      }
    }

    const handleOut = (event) => {
      if (event.target.closest('a, button, [data-cursor="hover"]')) {
        setHoverState(false)
      }
    }

    const animate = () => {
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`

      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`

      frameId = window.requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', updateMouse)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)
    frameId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(frameId)
      document.removeEventListener('mousemove', updateMouse)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  )
}