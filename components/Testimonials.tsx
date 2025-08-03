'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "The Pind Daan ceremony was performed with utmost devotion and authenticity. The priest was very knowledgeable and made us feel comfortable throughout the process. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Priya Sharma",
      location: "Delhi, NCR",
      rating: 5,
      text: "We were very satisfied with the services. The ceremony was conducted at the sacred Vishnupad Temple and everything was arranged perfectly. The priest explained each step of the ritual.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "Excellent service and very professional approach. The team took care of all arrangements including accommodation and transportation. The ceremony was performed with traditional methods.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sunita Devi",
      location: "Kolkata, West Bengal",
      rating: 5,
      text: "Very spiritual experience. The priest was very experienced and performed all rituals according to Vedic traditions. We felt the divine presence throughout the ceremony.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Vikram Singh",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "The entire process was very smooth and well-organized. From booking to completion, everything was handled professionally. The ceremony brought peace to our family.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Meera Iyer",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "Authentic Vedic rituals performed with devotion. The priest was very knowledgeable and explained the significance of each step. Highly satisfied with the services.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gold-50 to-saffron-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-spiritual-dark mb-6">
            <span className="block sanskrit-text text-5xl md:text-6xl mb-4">ग्राहक प्रतिक्रिया</span>
            <span className="block">Customer Testimonials</span>
          </h2>
          <p className="text-xl text-spiritual-dark/80 max-w-3xl mx-auto leading-relaxed">
            Read what our satisfied customers have to say about their spiritual experience 
            with our Pind Daan services at the sacred Vishnupad Temple.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                ))}
              </div>
              
              <div className="mb-4">
                <Quote className="w-8 h-8 text-spiritual-primary/30 mb-2" />
                <p className="text-spiritual-dark/80 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-spiritual-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-spiritual-dark/70">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-spiritual-primary mb-2">500+</div>
            <p className="text-spiritual-dark/80">Families Served</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-spiritual-primary mb-2">4.9</div>
            <p className="text-spiritual-dark/80">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-spiritual-primary mb-2">100%</div>
            <p className="text-spiritual-dark/80">Authentic Rituals</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-spiritual-primary mb-2">25+</div>
            <p className="text-spiritual-dark/80">Years Experience</p>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-saffron-200 to-gold-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-spiritual-dark mb-4">
              Why Families Trust Us
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-spiritual-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <h4 className="font-semibold text-spiritual-dark mb-2">Authentic Rituals</h4>
                <p className="text-sm text-spiritual-dark/70">
                  All ceremonies performed according to Vedic scriptures
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-spiritual-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <h4 className="font-semibold text-spiritual-dark mb-2">Experienced Priests</h4>
                <p className="text-sm text-spiritual-dark/70">
                  Qualified Brahmin priests with decades of experience
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-spiritual-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <h4 className="font-semibold text-spiritual-dark mb-2">Sacred Location</h4>
                <p className="text-sm text-spiritual-dark/70">
                  Ceremonies at the holy Vishnupad Temple in Gaya
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 