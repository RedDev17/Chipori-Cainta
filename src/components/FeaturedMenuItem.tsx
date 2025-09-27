import React from 'react';
import { MenuItem } from '../types';

interface FeaturedMenuItemProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, quantity?: number) => void;
}

const FeaturedMenuItem: React.FC<FeaturedMenuItemProps> = ({ item, onAddToCart }) => {
  return (
    <div className="bg-chipori-white/10 backdrop-blur-sm rounded-2xl p-6 border border-chipori-white/20 hover:bg-chipori-white/20 transition-all duration-300 group">
      {/* Image */}
      <div className="relative mb-4">
        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-chipori-white shadow-lg">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-chipori-lightGray flex items-center justify-center">
              <span className="text-2xl">🍽️</span>
            </div>
          )}
        </div>
        
        {/* Price Badge - Circular like in reference */}
        <div className="absolute -top-3 -right-3 w-16 h-16 bg-chipori-red rounded-full flex items-center justify-center shadow-xl border-4 border-chipori-white">
          <span className="text-chipori-white font-ramen-bold text-lg">
            ₱{Math.round(item.effectivePrice || item.basePrice)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="text-2xl font-ramen-bold text-chipori-white mb-3 uppercase tracking-wider">
          {item.name}
        </h3>
        <p className="text-chipori-white/80 text-sm mb-4 leading-relaxed">
          {item.description}
        </p>
        
        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(item, 1)}
          className="w-full bg-chipori-white text-chipori-darkRed py-3 px-4 rounded-xl font-bold hover:bg-chipori-cream transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FeaturedMenuItem;
