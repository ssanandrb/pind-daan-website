'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Star, Clock, Users } from 'lucide-react'

const RitualPackages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const packages = [
    {
      name: "Basic Pind Daan",
      sanskrit: "मूल पिंड दान",
      price: "₹5,000",
      duration: "2-3 hours",
      features: [
        "Traditional Pind Daan ceremony",
        "Experienced priest",
        "All necessary materials",
        "Basic prasad and offerings",
        "Certificate of completion"
      ],
      popular: false,
      color: "from-saffron-100 to-gold-100"
    },
    {
      name: "Complete Ancestral Ritual",
      sanskrit: "पूर्ण पितृ कर्म",
      price: "₹12,000",
      duration: "4-5 hours",
      features: [
        "Complete Pind Daan ceremony",
        "Senior experienced priest",
        "All traditional materials",
        "Elaborate prasad and offerings",
        "Ganga water purification",
        "Special mantras and prayers",
        "Certificate and photos",
        "Follow-up consultation"
      ],
      popular: true,
      color: "from-gold-200 to-saffron-300"
    },
    {
      name: "Premium Spiritual Package",
      sanskrit: "उत्तम आध्यात्मिक पैकेज",
      price: "₹25,000",
      duration: "6-8 hours",
      features: [
        "Complete ancestral ceremony",
        "Most senior priest",
        "Premium materials and offerings",
        "Extended mantras and prayers",
        "Ganga water purification",
        "Special prasad preparation",
        "Professional photography",
        "Video documentation",
        "Detailed consultation",
        "Follow-up services"
      ],
      popular: false,
      color: "from-saffron-100 to-gold-100"
    }
  ]

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-ivory-50 to-saffron-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-spiritual-dark mb-6">
            <span className="block sanskrit-text text-5xl md:text-6xl mb-4">रिचुअल पैकेज</span>
            <span className="block">Ritual Packages</span>
          </h2>
          <p className="text-xl text-spiritual-dark/80 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully designed packages that cater to different needs and requirements. 
            Each package includes authentic Vedic rituals performed by experienced priests.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`relative bg-gradient-to-br ${pkg.color} rounded-2xl p-8 shadow-lg card-hover ${
                pkg.popular ? 'ring-4 ring-spiritual-primary' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-spiritual-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-spiritual-dark mb-2">
                  {pkg.name}
                </h3>
                <p className="text-lg text-spiritual-primary sanskrit-text mb-4">
                  {pkg.sanskrit}
                </p>
                <div className="text-4xl font-bold text-spiritual-dark mb-2">
                  {pkg.price}
                </div>
                <div className="flex items-center justify-center space-x-2 text-spiritual-dark/70">
                  <Clock className="w-4 h-4" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-spiritual-primary mt-0.5 flex-shrink-0" />
                    <span className="text-spiritual-dark/80 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-spiritual-primary hover:bg-spiritual-dark text-white'
                    : 'bg-white/80 hover:bg-white text-spiritual-dark'
                }`}
              >
                Choose This Package
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-spiritual-dark mb-6 text-center">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-saffron-100 to-gold-100">
              <Users className="w-8 h-8 text-spiritual-primary mx-auto mb-2" />
              <h4 className="font-semibold text-spiritual-dark mb-2">Group Ceremonies</h4>
              <p className="text-sm text-spiritual-dark/70">
                Special rates for multiple families
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-saffron-100 to-gold-100">
              <Clock className="w-8 h-8 text-spiritual-primary mx-auto mb-2" />
              <h4 className="font-semibold text-spiritual-dark mb-2">Urgent Bookings</h4>
              <p className="text-sm text-spiritual-dark/70">
                Same-day ceremonies available
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-saffron-100 to-gold-100">
              <Star className="w-8 h-8 text-spiritual-primary mx-auto mb-2" />
              <h4 className="font-semibold text-spiritual-dark mb-2">VIP Services</h4>
              <p className="text-sm text-spiritual-dark/70">
                Premium experience with senior priests
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-saffron-100 to-gold-100">
              <Check className="w-8 h-8 text-spiritual-primary mx-auto mb-2" />
              <h4 className="font-semibold text-spiritual-dark mb-2">Custom Packages</h4>
              <p className="text-sm text-spiritual-dark/70">
                Tailored to your specific needs
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sanskrit Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-saffron-200 to-gold-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-spiritual-dark sanskrit-text mb-4">
              "यज्ञो वै श्रेष्ठतमं कर्म"
            </p>
            <p className="text-lg text-spiritual-dark/80">
              "Yajna vai shreshthatamam karma" - Ritual is the highest form of action
            </p>
            <p className="text-sm text-spiritual-dark/60 mt-2">
              - Bhagavad Gita
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RitualPackages 