import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-sneakers.jpg';

const Hero = () => {
  const scrollToShop = () => {
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Step Into{' '}
            <span className="bg-gradient-to-r from-accent to-brand-red bg-clip-text text-transparent">
              Style
            </span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Shop the best sneakers, leather shoes & more.
          </p>
          
          <Button 
            size="lg"
            className="glow-on-hover bg-accent hover:bg-brand-red-dark text-white font-poppins font-semibold px-8 py-4 text-lg"
            onClick={scrollToShop}
          >
            Shop Now
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;