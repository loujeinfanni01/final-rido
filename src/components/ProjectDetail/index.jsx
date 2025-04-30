import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../Header';
import ScrollIndicator from '../ScrollIndicator';

const ProjectDetail = ({ projects = [] }) => {
  const { id } = useParams();
  
  // Find the project that matches the ID in the URL
  // In a real app, you might fetch this data from an API based on the ID
  const project = projects.find(p => p.link === `/project/${id}`) || {
    id: 1,
    title: 'Project Not Found',
    category: 'ERROR',
    date: '',
    imageUrl: 'https://via.placeholder.com/1200x800?text=Project+Not+Found',
    description: 'The requested project could not be found.',
    details: []
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-white text-black relative font-sans">
      <Header />

      {/* Breadcrumbs - Simple version */}
      <div className="pt-24 px-8 text-xs uppercase tracking-widest text-gray-500">
        <Link to="/" className="hover:text-black">Homepage</Link> / <span className="text-black">{project.title}</span>
      </div>

      {/* Project Header */}
      <section className="px-8 py-16">
        <p className="text-sm uppercase tracking-widest text-yellow-600 mb-2">{project.category} <span className="text-gray-400 ml-2">{project.date}</span></p>
        <h1 className="text-4xl md:text-6xl font-medium mb-8">{project.title}</h1>
        <p className="text-lg text-gray-700 max-w-3xl">{project.description}</p>
      </section>

      {/* Main Project Image */}
      <section className="px-8 mb-16">
        <img src={project.imageUrl} alt={`${project.title} main image`} className="w-full h-auto object-cover" />
      </section>

      {/* Project Details/Info Section */}
      {project.details && project.details.length > 0 && (
        <section className="px-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.details.map((detail, index) => (
            <div key={index}>
              <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">{detail.label}</h4>
              <p className="text-lg font-medium">{detail.value}</p>
            </div>
          ))}
        </section>
      )}

      {/* Next/Previous Project Navigation */}
      <section className="px-8 py-16 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors duration-300">
            ← Back to all projects
          </Link>
        </div>
      </section>

      <ScrollIndicator />

      {/* Footer - Placeholder */}
      <footer className="p-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} A. Portfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default ProjectDetail;
