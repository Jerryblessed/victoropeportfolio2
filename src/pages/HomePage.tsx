import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturedWorks from '../components/FeaturedWorks';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen relative flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Creating art that speaks in seconds
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed">
              Artist, content creator, and fashion designer exploring the boundaries of creative expression.
            </p>
            <Link 
              to="/work" 
              className="inline-flex items-center bg-white text-neutral-900 px-6 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors duration-300"
            >
              Explore My Work <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-12 md:mb-0"
            >
              <div className="relative">
                <img 
                  src="https://github.com/Jerryblessed/victoropeportfolio2/blob/main/images/victor_ope.png?raw=true" 
                  alt="Victor Ope" 
                  className="rounded-lg w-full h-auto shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-neutral-900 rounded-full hidden md:block" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 md:pl-16"
            >
              <h2 className="text-3xl font-bold mb-6">Hello, I'm Victor</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                My work explores the intersection of traditional art, digital media, and fashion. 
                I believe in creating pieces that not only captivate the eye but also tell compelling stories.
              </p>
              <Link 
                to="/about" 
                className="text-neutral-900 font-medium inline-flex items-center hover:underline"
              >
                Learn more about me <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <FeaturedWorks />

      {/* Call to Action */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in working together?</h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
              Whether you're looking for a custom art piece, fashion design, or creative collaboration, 
              I'd love to hear about your project.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-neutral-900 px-8 py-3 rounded-full font-medium hover:bg-neutral-100 transition-colors duration-300"
            >
              Get in Touch <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
