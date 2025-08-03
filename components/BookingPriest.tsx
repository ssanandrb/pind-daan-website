'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Calendar, Phone, Award } from 'lucide-react'

const BookingPriest = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const priests = [
    {
      name: "Pandit Ram Sharan Sharma",
      experience: "25+ years",
      specialization: "Vedic Rituals",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Expert in all types of Pind Daan ceremonies with deep knowledge of Vedic scriptures."
    },
    {
      name: "Pandit Krishna Kumar",
      experience: "20+ years",
      specialization: "Ancestral Ceremonies",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Specializes in traditional ancestral rituals and has performed 1000+ ceremonies."
    },
    {
      name: "Pandit Devendra Singh",
      experience: "30+ years",
      specialization: "Sacred Rituals",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Most experienced priest with expertise in complex Vedic ceremonies and mantras."
    }
  ]

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-saffron-100 to-gold-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-spiritual-dark mb-6">
            <span className="block sanskrit-text text-5xl md:text-6xl mb-4">पुरोहित बुकिंग</span>
            <span className="block">Book Your Priest</span>
          </h2>
          <p className="text-xl text-spiritual-dark/80 max-w-3xl mx-auto leading-relaxed">
            Choose from our experienced Vedic priests who have dedicated their lives to performing 
            authentic spiritual ceremonies at the sacred Vishnupad Temple.
          </p>
        </motion.div>

        {/* Priest Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {priests.map((priest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg card-hover"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-spiritual-primary">
                  <img 
                    src={priest.image} 
                    alt={priest.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-spiritual-dark mb-2">
                  {priest.name}
                </h3>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(priest.rating) ? 'text-gold-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-spiritual-dark/70">
                    {priest.rating}
                  </span>
                </div>
                <p className="text-spiritual-primary font-semibold">
                  {priest.specialization}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-sm text-spiritual-dark/70">
                  <Award className="w-4 h-4" />
                  <span>{priest.experience} Experience</span>
                </div>
                <p className="text-spiritual-dark/80 text-sm leading-relaxed">
                  {priest.description}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-spiritual-primary hover:bg-spiritual-dark text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Book This Priest
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Booking Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-spiritual-dark mb-6 text-center">
            Simple Booking Process
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-spiritual-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-spiritual-dark mb-2">Choose Your Priest</h4>
              <p className="text-spiritual-dark/70 text-sm">
                Select from our experienced Vedic priests based on your requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-spiritual-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-spiritual-dark mb-2">Select Date & Time</h4>
              <p className="text-spiritual-dark/70 text-sm">
                Choose an auspicious date and time for your ceremony
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-spiritual-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-spiritual-dark mb-2">Confirm Booking</h4>
              <p className="text-spiritual-dark/70 text-sm">
                Complete your booking and receive confirmation details
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-saffron-200 to-gold-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-spiritual-dark mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-spiritual-dark/80 mb-6">
              Call us directly for urgent bookings or special requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-spiritual-primary hover:bg-spiritual-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +91 98765 43210</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 hover:bg-white/30 text-spiritual-dark px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Check Availability</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BookingPriest 