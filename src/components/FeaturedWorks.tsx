import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedWorks: React.FC = () => {
  const works = [
    {
      id: 1,
      title: "Mr. Alexandre Lacazette",
      category: "Fine Art",
      image: "https://github.com/Jerryblessed/victoropeportfolio2/blob/main/images/lacazette.png?raw=true",
      year: 2023
    },
    {
      id: 2,
      title: "Urban Expressions Collection",
      category: "Fashion Design",
      image: "https://github.com/Jerryblessed/victorope-s-archieve/blob/main/Confident%20Elegance%20in%20Navy%20Blue.png?raw=true",
      year: 2024
    },
    {
      id: 3,
      title: "Digital Dreams Series",
      category: "Digital Art",
      image: "https://github.com/Jerryblessed/victoropeportfolio2/blob/main/images/digitalart.png?raw=true",
      year: 2023
    }
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Works</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A selection of my most notable projects across different creative disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-1">{work.title}</h3>
              <div className="flex justify-between items-center">
                <p className="text-neutral-600">{work.category}</p>
                <p className="text-neutral-500 text-sm">{work.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/work" 
            className="inline-flex items-center text-neutral-900 font-medium hover:underline"
          >
            View all works <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
