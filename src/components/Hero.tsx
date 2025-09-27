import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-chipori-cream to-chipori-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* ChiporiCainta Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-lg overflow-hidden flex items-center justify-center border-4 border-chipori-headerRed">
            <img 
              src="/ChiporiCainta.jpg" 
              alt="Chipori Cainta Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="text-chipori-headerRed text-4xl font-bold hidden">🍳</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-ramen-bold text-chipori-charcoal mb-6 animate-fade-in uppercase tracking-wider">
          Authentic Filipino Cuisine
          <span className="block text-chipori-red mt-4">Chipori Cainta</span>
        </h1>
        <p className="text-xl text-chipori-charcoal mb-8 max-w-2xl mx-auto animate-slide-up">
          Traditional Filipino dishes with modern presentation and authentic flavors.
        </p>
      </div>
    </section>
  );
};

export default Hero;