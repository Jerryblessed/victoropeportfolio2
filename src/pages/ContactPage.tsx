import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Instagram, Twitter, Youtube } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Interested in commissioning work, collaborating, or just want to say hello? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/3 mb-12 lg:mb-0"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Mail size={18} className="text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-neutral-500 mb-1">Email</h3>
                    <p className="text-lg">victorope2018@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Phone size={18} className="text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-neutral-500 mb-1">Phone</h3>
                    <p className="text-lg">+234 8055038440</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <MapPin size={18} className="text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-neutral-500 mb-1">Studio</h3>
                    <p className="text-lg">Aldenco Estate</p>
                    <p className="text-lg">Galadimawa, Abuja NG 900107</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors duration-200"
                  >
                    <Instagram size={18} className="text-neutral-700" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors duration-200"
                  >
                    <Twitter size={18} className="text-neutral-700" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors duration-200"
                  >
                    <Youtube size={18} className="text-neutral-700" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-2/3 lg:pl-16"
            >
              <div className="bg-neutral-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;