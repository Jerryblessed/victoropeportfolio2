import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WorkDetail from './WorkDetail';

interface Work {
  id: number;
  title: string;
  category: string;
  type: string;
  image: string;
  year: number;
  description: string;
}

interface WorkGridProps {
  filter: string;
}

const WorkGrid: React.FC<WorkGridProps> = ({ filter }) => {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  
  const works: Work[] = [
    {
      id: 1,
      title: "Renaissance Reimagined",
      category: "Fine Art",
      type: "art",
      image: "https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      year: 2023,
      description: "A series of paintings exploring contemporary interpretations of Renaissance art techniques and themes."
    },
    {
      id: 2,
      title: "Urban Expressions Collection",
      category: "Fashion Design",
      type: "fashion",
      image: "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      year: 2024,
      description: "A ready-to-wear collection inspired by urban architecture and street art, featuring bold silhouettes and graphic prints."
    },
    {
      id: 3,
      title: "Digital Dreams Series",
      category: "Digital Art",
      type: "art",
      image: "https://github.com/Jerryblessed/victoropeportfolio2/blob/main/images/digitalart.png?raw=true",
      year: 2023,
      description: "A collection of digital illustrations exploring the intersection of reality and imagination in the digital age."
    },
    {
      id: 4,
      title: "Cultural Heritage Project",
      category: "Mixed Media",
      type: "art",
      image: "https://github.com/Jerryblessed/victorope-s-archieve/blob/main/Confident%20in%20Royal%20Blue%20Agbada.png?raw=true",
      year: 2022,
      description: "A mixed media installation celebrating cultural heritage and traditional craftsmanship in a contemporary context."
    },
    {
      id: 5,
      title: "Sustainable Fashion Line",
      category: "Fashion Design",
      type: "fashion",
      image: "https://github.com/Jerryblessed/victoropeportfolio2/blob/main/images/lacazette.jpg?raw=true",
      year: 2023,
      description: "An eco-conscious clothing line made from sustainable materials and ethical production methods."
    },
    {
      id: 6,
      title: "Abstract Emotions",
      category: "Painting",
      type: "art",
      image: "https://images.pexels.com/photos/4969893/pexels-photo-4969893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      year: 2021,
      description: "A series of abstract paintings exploring the visual representation of human emotions and psychological states."
    },
    {
      id: 7,
      title: "Visual Storytelling Series",
      category: "Content Creation",
      type: "content",
      image: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      year: 2022,
      description: "A multimedia content series exploring narratives of personal transformation and growth."
    },
    {
      id: 8,
      title: "Experimental Fashion Project",
      category: "Fashion Design",
      type: "fashion",
      image: "https://github.com/Jerryblessed/victorope-s-archieve/blob/main/Confident%20Elegance%20in%20Navy%20Blue.png?raw=true",
      year: 2024,
      description: "An avant-garde fashion project pushing the boundaries of wearable art and traditional garment construction."
    },
    {
      id: 9,
      title: "City Lights Photography",
      category: "Photography",
      type: "content",
      image: "https://images.pexels.com/photos/2096700/pexels-photo-2096700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      year: 2021,
      description: "A photography series capturing urban landscapes and city life through creative use of light and shadow."
    }
  ];

  const filteredWorks = filter === 'all' ? works : works.filter(work => work.type === filter);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorks.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => setSelectedWork(work)}
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 bg-white/90 text-neutral-900 rounded-full text-sm font-medium">
                  View Project
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">{work.title}</h3>
            <div className="flex justify-between items-center">
              <p className="text-neutral-600">{work.category}</p>
              <p className="text-neutral-500 text-sm">{work.year}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredWorks.length === 0 && (
        <div className="text-center py-16">
          <p className="text-neutral-500 text-lg">No works found in this category.</p>
        </div>
      )}

      {selectedWork && (
        <WorkDetail work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </div>
  );
};

export default WorkGrid;
