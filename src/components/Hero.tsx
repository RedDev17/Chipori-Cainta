import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-chipori-cream to-chipori-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-ramen-bold text-chipori-charcoal mb-6 animate-fade-in uppercase tracking-wider">
          Authentic Filipino Cuisine
          <span className="block text-chipori-red mt-4">Chipori Cainta</span>
        </h1>
        <p className="text-xl text-chipori-charcoal mb-8 max-w-2xl mx-auto animate-slide-up">
          Traditional Filipino dishes with modern presentation and authentic flavors.
        </p>
        <div className="flex justify-center">
          <a 
            href="#ramen"
            className="bg-chipori-red text-chipori-white px-8 py-3 rounded-full hover:bg-chipori-darkRed transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;