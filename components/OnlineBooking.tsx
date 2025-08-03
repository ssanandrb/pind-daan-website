'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, User, Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

const OnlineBooking = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    package: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    toast.success('Booking request submitted successfully! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      package: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-saffron-100 to-gold-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-spiritual-dark mb-6">
            <span className="block sanskrit-text text-5xl md:text-6xl mb-4">ऑनलाइन बुकिंग</span>
            <span className="block">Online Booking</span>
          </h2>
          <p className="text-xl text-spiritual-dark/80 max-w-3xl mx-auto leading-relaxed">
            Book your Pind Daan ceremony online with ease. Fill out the form below and we will 
            contact you to confirm your booking and discuss the details.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-spiritual-dark mb-6">
              Book Your Ceremony
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-spiritual-dark font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-spiritual-primary/30 rounded-lg focus:ring-2 focus:ring-spiritual-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-spiritual-dark font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-spiritual-primary/30 rounded-lg focus:ring-2 focus:ring-spiritual-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-spiritual-dark font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-spiritual-primary/30 rounded-lg focus:ring-2 focus:ring-spiritual-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-spiritual-dark font-medium mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-spiritual-primary/30 rounded-lg focus:ring-2 focus:ring-spiritual-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-spiritual-dark font-medium mb-2">
                    Preferred Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-spiritual-primary/30 rounded-lg focus:ring-2 focus:ring-spiritual-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (6 AM - 10 AM)</option>
                    <option value="afternoon">Afternoon (10 AM - 2 PM)</option>
                    <option value="evening">Evening (2 PM - 6 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-spiritual-dark font-medium mb-2">
                  Package Selection *
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-spiritual-primary/30 rounded-lg focus:ring-2 focus:ring-spiritual-primary focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a package</option>
                  <option value="basic">Basic Pind Daan (₹5,000)</option>
                  <option value="complete">Complete Ancestral Ritual (₹12,000)</option>
                  <option value="premium">Premium Spiritual Package (₹25,000)</option>
                </select>
              </div>

              <div>
                <label className="block text-spiritual-dark font-medium mb-2">
                  Additional Requirements
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-spiritual-primary/30 rounded-lg focus:ring-2 focus:ring-spiritual-primary focus:border-transparent transition-all duration-300"
                  placeholder="Any special requirements or questions..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-spiritual-primary hover:bg-spiritual-dark text-white py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Booking Request
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-spiritual-dark mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-spiritual-primary" />
                  <div>
                    <p className="font-semibold text-spiritual-dark">Phone</p>
                    <p className="text-spiritual-dark/80">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-spiritual-primary" />
                  <div>
                    <p className="font-semibold text-spiritual-dark">Email</p>
                    <p className="text-spiritual-dark/80">info@pinddaanservices.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-spiritual-primary" />
                  <div>
                    <p className="font-semibold text-spiritual-dark">Address</p>
                    <p className="text-spiritual-dark/80">Vishnupad Temple, Gaya, Bihar, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-spiritual-primary" />
                  <div>
                    <p className="font-semibold text-spiritual-dark">Timings</p>
                    <p className="text-spiritual-dark/80">6:00 AM - 8:00 PM (Daily)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-saffron-200 to-gold-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-spiritual-dark mb-4">
                Important Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-spiritual-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-spiritual-dark/80 text-sm">
                    Bookings should be made at least 3 days in advance
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-spiritual-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-spiritual-dark/80 text-sm">
                    We will contact you within 24 hours to confirm
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-spiritual-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-spiritual-dark/80 text-sm">
                    Payment can be made on the day of the ceremony
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-spiritual-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-spiritual-dark/80 text-sm">
                    All materials and arrangements are included
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OnlineBooking 