'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Camera, MapPin, Heart } from 'lucide-react'

const PhotoGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Vishnupad Temple",
      description: "Sacred temple where Lord Vishnu's footprints are enshrined"
    },
    {
      src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Ganga River Ceremony",
      description: "Traditional rituals performed on the banks of sacred Ganga"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Vedic Priest",
      description: "Experienced Brahmin priest performing sacred ceremonies"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Pind Daan Ritual",
      description: "Traditional ancestral ceremony in progress"
    },
    {
      src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Sacred Offerings",
      description: "Traditional prasad and offerings for the ceremony"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Temple Architecture",
      description: "Ancient temple architecture and spiritual atmosphere"
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-saffron-50 to-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-spiritual-dark mb-6">
            <span className="block sanskrit-text text-5xl md:text-6xl mb-4">फोटो गैलरी</span>
            <span className="block">Photo Gallery</span>
          </h2>
          <p className="text-xl text-spiritual-dark/80 max-w-3xl mx-auto leading-relaxed">
            Experience the spiritual atmosphere and sacred ceremonies through our photo gallery. 
            Each image captures the essence of traditional Vedic rituals and the divine energy of Gaya.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg card-hover"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-white/90">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Camera className="w-8 h-8 text-spiritual-primary" />
              <h3 className="text-2xl font-bold text-spiritual-dark">Professional Photography</h3>
            </div>
            <p className="text-spiritual-dark/80 leading-relaxed mb-6">
              We provide professional photography services to capture your sacred moments. 
              High-quality images and videos are included in our premium packages.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-spiritual-primary rounded-full"></div>
                <span className="text-spiritual-dark/80">HD quality photos and videos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-spiritual-primary rounded-full"></div>
                <span className="text-spiritual-dark/80">Digital and printed copies</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-spiritual-primary rounded-full"></div>
                <span className="text-spiritual-dark/80">Quick delivery within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="w-8 h-8 text-spiritual-primary" />
              <h3 className="text-2xl font-bold text-spiritual-dark">Sacred Locations</h3>
            </div>
            <p className="text-spiritual-dark/80 leading-relaxed mb-6">
              Our ceremonies are performed at the most sacred locations in Gaya, 
              including the famous Vishnupad Temple and the banks of the holy Ganga River.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-spiritual-primary rounded-full"></div>
                <span className="text-spiritual-dark/80">Vishnupad Temple - Main ceremony</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-spiritual-primary rounded-full"></div>
                <span className="text-spiritual-dark/80">Ganga River - Water purification</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-spiritual-primary rounded-full"></div>
                <span className="text-spiritual-dark/80">Sacred ghats - Traditional rituals</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-saffron-200 to-gold-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-spiritual-primary" />
              <h3 className="text-2xl font-bold text-spiritual-dark">
                Capture Your Sacred Moments
              </h3>
            </div>
            <p className="text-spiritual-dark/80 mb-6">
              Book your ceremony today and create lasting memories of your spiritual journey
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-spiritual-primary hover:bg-spiritual-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Book Your Ceremony
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PhotoGallery 