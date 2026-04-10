import { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Stack from '../components/Stack/Stack'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import {
  aboutMeta,
  aboutParagraphs,
  featuredProjects,
  heroRoles,
  heroStats,
  navigationLinks,
  secondaryProjects,
  socialLinks,
  techCategories
} from '../data/portfolioData'

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add('isVisible')
            }, index * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar links={navigationLinks} />
      <Hero roles={heroRoles} stats={heroStats} />
      <Projects featuredProjects={featuredProjects} secondaryProjects={secondaryProjects} />
      <Stack categories={techCategories} />
      <About paragraphs={aboutParagraphs} meta={aboutMeta} />
      <Contact items={socialLinks} />
      <Footer />
    </>
  )
}