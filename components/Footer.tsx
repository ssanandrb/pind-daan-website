'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-spiritual-dark to-spiritual-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-spiritual-primary font-bold text-lg">ॐ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold sanskrit-text">पिंड दान सेवा</h3>
                <p className="text-sm text-white/80">Pind Daan Services</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Providing authentic Vedic rituals and spiritual ceremonies at the sacred 
              Vishnupad Temple in Gaya, India.
            </p>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <Heart className="w-5 h-5" />
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300">
                  About Pind Daan
                </a>
              </li>
              <li>
                <a href="#booking" className="text-white/80 hover:text-white transition-colors duration-300">
                  Book Priest
                </a>
              </li>
              <li>
                <a href="#packages" className="text-white/80 hover:text-white transition-colors duration-300">
                  Ritual Packages
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-white transition-colors duration-300">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors duration-300">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-white/80">Basic Pind Daan</li>
              <li className="text-white/80">Complete Ancestral Ritual</li>
              <li className="text-white/80">Premium Spiritual Package</li>
              <li className="text-white/80">Group Ceremonies</li>
              <li className="text-white/80">VIP Services</li>
              <li className="text-white/80">Custom Packages</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-spiritual-secondary" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-spiritual-secondary" />
                <span className="text-white/80">info@pinddaanservices.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-spiritual-secondary" />
                <span className="text-white/80">Vishnupad Temple, Gaya, Bihar</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-spiritual-secondary" />
                <span className="text-white/80">6:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sanskrit Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 pt-8 border-t border-white/20"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold sanskrit-text mb-4">
              "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
            </p>
            <p className="text-lg text-white/90">
              "Sarve bhavantu sukhinah sarve santu niramayah" - May all be happy, may all be free from illness
            </p>
            <p className="text-sm text-white/60 mt-2">
              - Ancient Sanskrit Prayer
            </p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80">
              © 2024 Pind Daan Services. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 