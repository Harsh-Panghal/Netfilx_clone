import React, { useEffect, useState } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <img 
        className="nav-logo" 
        src="/images/netflix-logo.png" 
        alt="Logo" 
      />
      <img 
        className="nav-avatar" 
        src="/images/netflix-avatar.png" 
        alt="Avatar" 
      />
    </nav>
  );
};

export default Navigation;