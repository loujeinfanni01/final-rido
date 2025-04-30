import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const ProjectCard = ({ project }) => {
  // Placeholder image if none provided
  const imageUrl = project.imageUrl || 'https://via.placeholder.com/600x400?text=Project+Image';

  return (
    <div className="group relative overflow-hidden mb-8 break-inside-avoid">
      <Link to={project.link || '#'}> {/* Wrap image in Link */}
        <img 
          src={imageUrl} 
          alt={project.title} 
          className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        {/* Overlay appears on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 ease-in-out flex items-center justify-center">
          <div 
            className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-20 h-20 bg-black rounded-full flex items-center justify-center text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out scale-75 group-hover:scale-100 transform"
          >
            More
          </div>
        </div>
      </Link>
      {/* Text content below image */}
      <div className="mt-4">
        <p className="text-xs uppercase tracking-widest text-yellow-600 mb-1">{project.category} <span className="text-gray-400 ml-2">{project.date}</span></p>
        <h3 className="text-xl font-medium text-black">
          <Link to={project.link || '#'} className="hover:underline">{project.title}</Link> {/* Link title */}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;

