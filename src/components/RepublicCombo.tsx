import React from 'react';
import { MenuItem } from '../types';

interface RepublicComboProps {
  comboItems: MenuItem[];
  onAddToCart: (item: MenuItem, quantity?: number) => void;
}

const RepublicCombo: React.FC<RepublicComboProps> = ({ comboItems, onAddToCart }) => {
  return (
    <section className="bg-gradient-to-br from-chipori-darkRed to-chipori-red py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-ramen-bold text-chipori-white uppercase tracking-wider mb-4">
            Republic Combo
          </h2>
          <div className="w-32 h-2 bg-chipori-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comboItems.map((item) => (
            <div key={item.id} className="bg-chipori-white/10 backdrop-blur-sm rounded-2xl p-8 border border-chipori-white/20 hover:bg-chipori-white/20 transition-all duration-300 group">
              {/* Large Circular Price Badge */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-chipori-red rounded-full flex items-center justify-center shadow-2xl border-4 border-chipori-white">
                  <span className="text-chipori-white font-ramen-bold text-2xl">
                    ₱{Math.round(item.effectivePrice || item.basePrice)}
                  </span>
                </div>
              </div>
              
              {/* Combo Title */}
              <h3 className="text-3xl font-ramen-bold text-chipori-white mb-6 text-center uppercase tracking-wider">
                {item.name}
              </h3>
              
              {/* Combo Description */}
              <div className="text-chipori-white/90 text-center mb-8">
                <p className="text-lg leading-relaxed">{item.description}</p>
              </div>
              
              {/* Add to Cart Button */}
              <button
                onClick={() => onAddToCart(item, 1)}
                className="w-full bg-chipori-white text-chipori-darkRed py-4 px-6 rounded-xl font-ramen-bold text-lg hover:bg-chipori-cream transition-all duration-200 transform hover:scale-105 shadow-lg uppercase tracking-wide"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepublicCombo;
