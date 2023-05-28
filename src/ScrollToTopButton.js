import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setShowButton(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`scroll-to-top ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <FiArrowUp size={24} color="#fff" />
    </div>
  );
};

export default ScrollToTopButton;
