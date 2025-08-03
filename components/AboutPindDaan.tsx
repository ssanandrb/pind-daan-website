'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Heart, Users, Clock } from 'lucide-react'

const AboutPindDaan = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Vedic Traditions",
      description: "Authentic rituals following ancient Vedic scriptures and traditions"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Spiritual Connection",
      description: "Deep connection with ancestors through sacred ceremonies"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Priests",
      description: "Experienced Brahmin priests with decades of ritual expertise"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Sacred Timing",
      description: "Ceremonies performed during auspicious muhurtas"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-ivory-50 to-saffron-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-spiritual-dark mb-6">
            <span className="block sanskrit-text text-5xl md:text-6xl mb-4">पिंड दान</span>
            <span className="block">About Pind Daan</span>
          </h2>
          <p className="text-xl text-spiritual-dark/80 max-w-3xl mx-auto leading-relaxed">
            Pind Daan is a sacred Hindu ritual performed to honor and provide peace to departed souls. 
            This ancient ceremony connects the living with their ancestors through spiritual offerings.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-spiritual-dark mb-4">
                The Sacred Ritual
              </h3>
              <p className="text-spiritual-dark/80 leading-relaxed mb-6">
                Pind Daan is performed at the sacred Vishnupad Temple in Gaya, where Lord Vishnu's 
                footprints are enshrined. This holy site is considered one of the most powerful 
                places for ancestral rituals in Hindu tradition.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-spiritual-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-spiritual-dark/80">
                    <strong>Sacred Location:</strong> Vishnupad Temple, Gaya - One of the most revered 
                    places for ancestral ceremonies
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-spiritual-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-spiritual-dark/80">
                    <strong>Traditional Methods:</strong> Following ancient Vedic scriptures and 
                    authentic ritual procedures
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-spiritual-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-spiritual-dark/80">
                    <strong>Spiritual Benefits:</strong> Provides peace to departed souls and 
                    blessings for the living family
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-spiritual-dark mb-4">
                Why Choose Our Services?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="text-center p-4 rounded-lg bg-gradient-to-br from-saffron-100 to-gold-100"
                  >
                    <div className="text-spiritual-primary mb-2 flex justify-center">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-spiritual-dark mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-spiritual-dark/70">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sanskrit Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-saffron-200 to-gold-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-spiritual-dark sanskrit-text mb-4">
              "पितृ देवो भवः"
            </p>
            <p className="text-lg text-spiritual-dark/80">
              "Pitru Devo Bhava" - May the ancestors be like gods to us
            </p>
            <p className="text-sm text-spiritual-dark/60 mt-2">
              - Taittiriya Upanishad
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPindDaan 