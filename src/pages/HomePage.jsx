import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Experience from '../components/Experience/Experience'
import Stack from '../components/Stack/Stack'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import useScrollAnimations from '../hooks/useScrollAnimations'
import {
  aboutMeta,
  aboutParagraphs,
  allProjects,
  experienceTimeline,
  heroRoles,
  heroStats,
  navigationLinks,
  socialLinks,
  techCategories
} from '../data/portfolioData'

export default function HomePage() {
  useScrollAnimations()

  return (
    <>
      <Navbar links={navigationLinks} />
      <Hero roles={heroRoles} stats={heroStats} />
      <Projects projects={allProjects} />
      <Experience timeline={experienceTimeline} />
      <Stack categories={techCategories} />
      <About paragraphs={aboutParagraphs} meta={aboutMeta} />
      <Contact items={socialLinks} />
      <Footer />
    </>
  )
}