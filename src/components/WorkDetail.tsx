import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Work {
  id: number;
  title: string;
  category: string;
  type: string;
  image: string;
  year: number;
  description: string;
}

interface WorkDetailProps {
  work: Work;
  onClose: () => void;
}

const WorkDetail: React.FC<WorkDetailProps> = ({ work, onClose }) => {
  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25 }}
          className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-96 bg-neutral-100">
            <img 
              src={work.image} 
              alt={work.title} 
              className="w-full h-full object-cover"
            />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-900 hover:bg-white transition-colors duration-200"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-8 overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold">{work.title}</h2>
                <p className="text-neutral-600">{work.category}, {work.year}</p>
              </div>
            </div>
            
            <p className="text-neutral-700 leading-relaxed mb-6">
              {work.description}
            </p>
            
            {/* This would typically include more details about the project */}
            <div className="border-t border-neutral-200 pt-6 mt-6">
              <h3 className="text-lg font-medium mb-4">Project Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-neutral-500">Type</p>
                  <p className="font-medium">{work.category}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Year</p>
                  <p className="font-medium">{work.year}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Medium</p>
                  <p className="font-medium">Mixed Media</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Client</p>
                  <p className="font-medium">Personal Project</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkDetail;