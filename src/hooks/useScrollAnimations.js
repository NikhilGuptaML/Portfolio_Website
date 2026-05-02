import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useScrollAnimations() {
  useEffect(() => {
    // Don't run animations on mobile or reduced-motion
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.innerWidth < 900
    ) {
      // Immediately make everything visible on mobile/reduced-motion
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('isVisible')
      })
      return
    }

    const context = gsap.context(() => {
      // Reveal animations for all .reveal elements
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach((element, index) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 40
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true
            }
          }
        )
      })

      // Parallax on video backgrounds
      const videoBgs = document.querySelectorAll('[data-parallax-video]')
      videoBgs.forEach((video) => {
        gsap.to(video, {
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: video.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        })
      })

      // Stagger animation for tech items
      const techRows = document.querySelectorAll('[data-stagger-row]')
      techRows.forEach((row) => {
        const items = row.children
        gsap.fromTo(
          items,
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%',
              once: true
            }
          }
        )
      })

      // Section heading cinematic entrance
      const headings = document.querySelectorAll('[data-heading-animate]')
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              once: true
            }
          }
        )
      })
    })

    return () => context.revert()
  }, [])
}
