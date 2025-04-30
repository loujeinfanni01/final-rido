import React from 'react';
import ProjectCard from '../ProjectCard';

const PortfolioGrid = ({ projects }) => {
  // Default projects if none provided
  const defaultProjects = projects || [
    {
      id: 1,
      title: 'Interior design studio',
      category: 'BRANDING',
      date: 'MAY 24 2023',
      imageUrl: '/images/branding-cards.jpg',
      link: '/project/interior-design'
    },
    {
      id: 2,
      title: 'Home Security Camera',
      category: 'DESIGN',
      date: 'MAY 24 2023',
      imageUrl: '/images/security-cameras.jpg',
      link: '/project/security-camera'
    },
    {
      id: 3,
      title: 'Product Packaging',
      category: 'BRANDING',
      date: 'MAY 24 2023',
      imageUrl: '/images/product-packaging.jpg',
      link: '/project/product-packaging'
    },
    {
      id: 4,
      title: 'Nature Photography',
      category: 'PHOTOGRAPHY',
      date: 'MAY 24 2023',
      imageUrl: '/images/nature-photography.jpg',
      link: '/project/nature-photography'
    }
  ];

  return (
    <div className="w-full">
      {/* Grid layout for desktop */}
      <div className="hidden md:grid grid-cols-2 gap-8">
        {defaultProjects.map((project, index) => (
          <div key={project.id} className={index % 2 === 0 ? 'mt-16' : ''}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      
      {/* Column layout for mobile */}
      <div className="md:hidden space-y-8">
        {defaultProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
