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
    <main className="min-h-screen bg-white relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section - Chipori Style */}
        <div className="text-center mb-16 relative">
          <div className="bg-chipori-headerRed rounded-lg p-8 mb-8">
            <h2 className="text-4xl md:text-6xl font-chipori-bold text-white mb-4 uppercase tracking-wider">
              CHIPORI SA SARAP
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-4 rounded-full"></div>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed font-chipori-text">
          Discover our selection of authentic Filipino dishes, traditional recipes, and modern interpretations, 
          all prepared with fresh ingredients and time-honored techniques.
        </p>
          </div>
      </div>



      {categories.map((category) => {
        const categoryItems = filteredMenuItems.filter(item => item.category === category.id);
        
        if (categoryItems.length === 0) return null;
        
        return (
          <section key={category.id} id={category.id} className="mb-20">
            {/* Category Header - Chipori Style */}
            <div className="mb-12">
              <div className="bg-chipori-headerRed rounded-lg p-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl text-chipori-headerRed">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-chipori-bold text-white uppercase tracking-wider">
                      {category.name}
                    </h3>
                    <div className="w-16 h-1 bg-white mt-2 rounded-full"></div>
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