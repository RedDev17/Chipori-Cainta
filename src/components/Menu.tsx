import React from 'react';
import { MenuItem, CartItem } from '../types';
import { useCategories } from '../hooks/useCategories';
import MenuItemCard from './MenuItemCard';
import FeaturedSection from './FeaturedSection';
import FeaturedMenuItem from './FeaturedMenuItem';

// Preload images for better performance
const preloadImages = (items: MenuItem[]) => {
  items.forEach(item => {
    if (item.image) {
      const img = new Image();
      img.src = item.image;
    }
  });
};

interface MenuProps {
  menuItems: MenuItem[];
  filteredMenuItems: MenuItem[];
  addToCart: (item: MenuItem, quantity?: number, variation?: any, addOns?: any[]) => void;
  cartItems: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
}

const Menu: React.FC<MenuProps> = ({ menuItems, filteredMenuItems, addToCart, cartItems, updateQuantity }) => {
  const { categories } = useCategories();

  // Preload images when menu items change
  React.useEffect(() => {
    if (menuItems.length > 0) {
      preloadImages(menuItems);
    }
  }, [menuItems]);


  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 relative animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-red-800/5 rounded-3xl"></div>
          <div className="relative z-10 py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full mb-6 shadow-2xl">
              <span className="text-3xl">🍽️</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 uppercase tracking-wider drop-shadow-lg">
              Our Menu
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Discover our selection of authentic Filipino dishes, traditional recipes, and modern interpretations, 
              all prepared with fresh ingredients and time-honored techniques.
            </p>
          </div>
        </div>

      {/* Featured "Must Try" Section - Always show */}
      <FeaturedSection title="Must Try">
        {menuItems
          .filter(item => item.popular)
          .slice(0, 6)
          .map((item) => (
            <FeaturedMenuItem
              key={item.id}
              item={item}
              onAddToCart={addToCart}
            />
          ))}
      </FeaturedSection>


      {categories.map((category) => {
        const categoryItems = filteredMenuItems.filter(item => item.category === category.id);
        
        if (categoryItems.length === 0) return null;
        
        return (
          <section key={category.id} id={category.id} className="mb-20">
            {/* Category Header */}
            <div className="relative mb-12 animate-slide-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10 rounded-2xl"></div>
              <div className="relative z-10 flex items-center justify-center py-8 px-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wider drop-shadow-sm">
                      {category.name}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-800 mt-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryItems.map((item) => {
                // Find cart items that match this menu item (without variations/add-ons)
                const matchingCartItems = cartItems.filter(cartItem => 
                  cartItem.id.startsWith(`${item.id}-`) && 
                  !cartItem.selectedVariation && 
                  (!cartItem.selectedAddOns || cartItem.selectedAddOns.length === 0)
                );
                const totalQuantity = matchingCartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
                
                return (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onAddToCart={addToCart}
                    quantity={totalQuantity}
                    onUpdateQuantity={(_, quantity) => {
                      // Find the cart item with the base item ID and update it
                      const baseCartItem = cartItems.find(cartItem => 
                        cartItem.id.startsWith(`${item.id}-`) && 
                        !cartItem.selectedVariation && 
                        (!cartItem.selectedAddOns || cartItem.selectedAddOns.length === 0)
                      );
                      if (baseCartItem) {
                        updateQuantity(baseCartItem.id, quantity);
                      }
                    }}
                  />
                );
              })}
            </div>
          </section>
        );
      })}
      </div>
    </main>
  );
};

export default Menu;