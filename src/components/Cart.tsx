import React from 'react';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  cartItems: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  onContinueShopping: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  updateQuantity,
  removeFromCart,
  clearCart,
  getTotalPrice,
  onContinueShopping,
  onCheckout
}) => {
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-red-600 rounded-full mb-8">
              <span className="text-4xl">🍽️</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">Add some delicious Filipino dishes to get started!</p>
            <button
              onClick={onContinueShopping}
              className="bg-red-600 text-white px-8 py-4 rounded-2xl hover:bg-red-700 transition-all duration-300 font-medium text-lg"
            >
              Browse Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6">
            <span className="text-3xl">🛒</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Your Cart</h1>
          <div className="w-32 h-2 bg-red-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Review your delicious Filipino dishes and proceed to checkout
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onContinueShopping}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 bg-white px-4 py-2 rounded-xl hover:bg-gray-50 shadow-sm"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Continue Shopping</span>
          </button>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 transition-colors duration-200 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-xl"
          >
            Clear All
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-gray-200">
        {cartItems.map((item, index) => (
          <div key={item.id} className={`p-6 hover:bg-gray-50 transition-all duration-300 ${index !== cartItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                {item.selectedVariation && (
                  <p className="text-sm text-gray-600 mb-1 bg-gray-100 px-3 py-1 rounded-full inline-block">
                    Size: {item.selectedVariation.name}
                  </p>
                )}
                {item.selectedAddOns && item.selectedAddOns.length > 0 && (
                  <p className="text-sm text-gray-600 mb-2 mt-2">
                    Add-ons: {item.selectedAddOns.map(addOn => 
                      addOn.quantity && addOn.quantity > 1 
                        ? `${addOn.name} x${addOn.quantity}`
                        : addOn.name
                    ).join(', ')}
                  </p>
                )}
                <p className="text-lg font-semibold text-gray-900 mt-2">₱{item.totalPrice} each</p>
              </div>
              
              <div className="flex items-center space-x-6 ml-4">
                <div className="flex items-center space-x-3 bg-gray-100 rounded-xl p-2 border border-gray-200">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200 text-red-600"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="font-bold text-gray-900 min-w-[32px] text-center text-lg">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200 text-red-600"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">₱{item.totalPrice * item.quantity}</p>
                </div>
                
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-3 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-200"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <div className="flex items-center justify-between text-3xl font-bold text-gray-900 mb-8">
          <span>Total:</span>
          <span className="text-red-600">₱{getTotalPrice().toFixed(2)}</span>
        </div>
        
        <button
          onClick={onCheckout}
          className="w-full bg-red-600 text-white py-6 rounded-xl hover:bg-red-700 transition-all duration-300 font-bold text-xl"
        >
          Proceed to Checkout
        </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;