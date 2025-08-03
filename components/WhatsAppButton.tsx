'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919876543210'
    const message = 'Hello! I would like to know more about Pind Daan services.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 floating-button"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </motion.div>
  )
}

export default WhatsAppButton 