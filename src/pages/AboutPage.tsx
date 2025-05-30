import React from 'react';
import { motion } from 'framer-motion';
import { Brush, Camera, Scissors } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              My journey, philosophy, and the creative forces that drive my work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-12 md:mb-0"
            >
              <img 
                src="https://github.com/Jerryblessed/victoropeportfolio2/blob/main/images/victor_ope.png?raw=true"
                alt="Victor Ope in studio" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 md:pl-16"
            >
              <h2 className="text-3xl font-bold mb-6">The Story Behind the Art</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Born in Abuja, Nigeria, my artistic journey began at an early age when I discovered my passion 
                for visual storytelling. After studying Fine Arts at the University of Arts, I ventured into 
                the world of fashion design and digital content creation.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                My work is heavily influenced by my African heritage, contemporary culture, and the interplay 
                between tradition and modernity. I believe in creating art that not only aesthetically pleases 
                but also provokes thought and emotion.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                When I'm not in my studio creating, you can find me exploring new cities, 
                photographing interesting architecture, or collaborating with fellow artists on 
                experimental projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">My Creative Disciplines</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              I work across multiple mediums to bring my creative vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <Brush size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Fine Art</h3>
              <p className="text-neutral-600 text-center">
                Creating contemporary paintings and mixed media pieces that explore themes of identity, 
                culture, and human experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <Camera size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Content Creation</h3>
              <p className="text-neutral-600 text-center">
                Producing visual stories through photography, videography, and digital art
                that captivate and inspire audiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <Scissors size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Fashion Design</h3>
              <p className="text-neutral-600 text-center">
                Creating wearable art through innovative fashion pieces that blend traditional 
                techniques with contemporary aesthetics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-2xl md:text-3xl italic font-light mb-8 leading-relaxed">
              "Art is not about making something perfect; it's about making something meaningful. 
              I create to connect, to express, and to transform."
            </p>
            <p className="text-lg font-medium">— Victor Ope</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
