'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Play, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-500/20 via-gold-400/30 to-ivory-200/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            filter: 'brightness(0.7)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Sanskrit Mantra */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-2xl md:text-4xl font-bold text-white sanskrit-text text-shadow">
              ॐ नमः शिवाय
            </p>
            <p className="text-lg md:text-xl text-gold-200 mt-2">
              Om Namah Shivaya
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow leading-tight"
          >
            <span className="block">पिंड दान सेवा</span>
            <span className="block text-2xl md:text-4xl lg:text-5xl mt-4 text-gold-200">
              Pind Daan Services
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Experience authentic Hindu rituals at the sacred Vishnupad Temple in Gaya, India. 
            Connect with your ancestors through traditional Pind Daan ceremonies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-spiritual-primary hover:bg-spiritual-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Ritual
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30"
            >
              <Play className="inline-block w-5 h-5 mr-2" />
              Watch Ceremony
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 mt-16 text-white/80"
          >
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-gold-300" />
              <span>500+ Families Served</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-gold-300" />
              <span>Authentic Vedic Priests</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-gold-300" />
              <span>Sacred Ganga River</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 