import React from 'react';

const ServicesGeometricPreview = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Geometric grid background */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 z-0">
        {/* Top left cell */}
        <div className="relative border border-white/5 flex items-center justify-center">
          <div className="w-full h-full border border-white/5 rounded-full"></div>
        </div>
        
        {/* Top right cell */}
        <div className="relative border border-white/5 flex items-center justify-center">
          <div className="w-full h-full border border-white/5 rounded-full"></div>
        </div>
        
        {/* Bottom left cell */}
        <div className="relative border border-white/5 flex items-center justify-center">
          <div className="w-full h-full border border-white/5 rounded-full"></div>
        </div>
        
        {/* Bottom right cell */}
        <div className="relative border border-white/5 flex items-center justify-center">
          <div className="w-full h-full border border-white/5 rounded-full"></div>
        </div>
      </div>
      
      {/* Vertical "SERVICES" text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-xs tracking-widest uppercase text-white/50 font-medium">
        SERVICES
      </div>
      
      {/* Services content */}
      <div className="grid grid-cols-2 grid-rows-2 h-full relative z-10">
        {/* Service 1 */}
        <div className="p-12 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Branding and Identity Design</h3>
          <p className="text-white/70 mb-6">Our creative agency is a team of professionals focused on helping your brand grow.</p>
          <ul className="mb-8 space-y-2">
            <li className="text-xs tracking-wider font-semibold">UX AUDITS</li>
            <li className="text-xs tracking-wider font-semibold">DESIGN THINKING</li>
            <li className="text-xs tracking-wider font-semibold">METHODOLOGIES</li>
            <li className="text-xs tracking-wider font-semibold">WIREFRAMING</li>
          </ul>
          <button className="flex items-center text-xs tracking-wider font-semibold group">
            READ MORE
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
        
        {/* Service 2 */}
        <div className="p-12 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Website Design and Development</h3>
          <p className="text-white/70 mb-6">Our creative agency is a team of professionals focused on helping your brand grow.</p>
          <ul className="mb-8 space-y-2">
            <li className="text-xs tracking-wider font-semibold">UX AUDITS</li>
            <li className="text-xs tracking-wider font-semibold">DESIGN THINKING</li>
            <li className="text-xs tracking-wider font-semibold">METHODOLOGIES</li>
            <li className="text-xs tracking-wider font-semibold">WIREFRAMING</li>
          </ul>
          <button className="flex items-center text-xs tracking-wider font-semibold group">
            READ MORE
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
        
        {/* Back to top button */}
        <div className="absolute bottom-8 right-8 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServicesGeometricPreview;