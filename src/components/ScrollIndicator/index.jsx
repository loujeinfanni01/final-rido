import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed right-4 bottom-8 flex flex-col items-center space-y-4 z-10">
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-300"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </button>
      )}
      <div 
        className="transform rotate-90 origin-center text-xs tracking-widest uppercase text-gray-400 whitespace-nowrap"
        style={{ writingMode: 'vertical-rl' }}
      >
        Back to top
      </div>
    </div>
  );
};

export default ScrollIndicator;

