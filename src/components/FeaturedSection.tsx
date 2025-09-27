import React from 'react';

interface FeaturedSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ title, children, className = "" }) => {
  return (
    <section className={`bg-gradient-to-br from-chipori-darkRed to-chipori-red py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-ramen-bold text-chipori-white uppercase tracking-wider">
            {title}
          </h2>
          <div className="w-24 h-1 bg-chipori-gold mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
