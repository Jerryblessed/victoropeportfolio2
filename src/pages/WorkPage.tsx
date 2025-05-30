import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WorkGrid from '../components/WorkGrid';

const WorkPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'art', name: 'Fine Art' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'content', name: 'Content' }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Work</h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              A collection of my creative projects spanning fine art, content creation, and fashion design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center space-x-2 md:space-x-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors duration-200 ${
                  filter === category.id
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Work Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <WorkGrid filter={filter} />
        </div>
      </section>
    </div>
  );
};

export default WorkPage;