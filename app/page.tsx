'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutPindDaan from '@/components/AboutPindDaan'
import BookingPriest from '@/components/BookingPriest'
import RitualPackages from '@/components/RitualPackages'
import PhotoGallery from '@/components/PhotoGallery'
import Testimonials from '@/components/Testimonials'
import OnlineBooking from '@/components/OnlineBooking'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // GSAP animations can be added here
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('animate-fade-in')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-saffron-50 to-ivory-100">
      <Header />
      <Hero />
      <AboutPindDaan />
      <BookingPriest />
      <RitualPackages />
      <PhotoGallery />
      <Testimonials />
      <OnlineBooking />
      <Footer />
      <WhatsAppButton />
    </main>
  )
} 