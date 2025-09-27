import { MenuItem } from '../types';

export const menuData: MenuItem[] = [
  // Dim Sum
  {
    id: 'har-gow',
    name: 'Har Gow (Shrimp Dumplings)',
    description: 'Delicate translucent dumplings filled with fresh shrimp and bamboo shoots',
    basePrice: 180,
    category: 'dim-sum',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'siu-mai',
    name: 'Siu Mai (Pork & Shrimp Dumplings)',
    description: 'Traditional open-topped dumplings with pork, shrimp, and mushrooms',
    basePrice: 160,
    category: 'dim-sum',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'char-siu-bao',
    name: 'Char Siu Bao (BBQ Pork Buns)',
    description: 'Fluffy steamed buns filled with sweet and savory BBQ pork',
    basePrice: 140,
    category: 'dim-sum',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'karaage-bucket',
    name: 'Karaage Bucket',
    description: '500 grams of crunchy deep fried chicken bites served with Japanese mayonnaise',
    basePrice: 518,
    category: 'dim-sum',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'gyoza-popular',
    name: 'Gyoza',
    description: 'Gyoza of minced pork and a mixture of spices, hand wrapped in thinly rolled dough skin, pan-seared and served with sauce',
    basePrice: 69,
    category: 'dim-sum',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'xiao-long-bao',
    name: 'Xiao Long Bao (Soup Dumplings)',
    description: 'Delicate dumplings filled with pork and savory broth',
    basePrice: 220,
    category: 'dim-sum',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'cheung-fun',
    name: 'Cheung Fun (Rice Noodle Rolls)',
    description: 'Silky rice noodle rolls with choice of shrimp, beef, or char siu',
    basePrice: 180,
    category: 'dim-sum',
    variations: [
      { id: 'shrimp', name: 'Shrimp', price: 0 },
      { id: 'beef', name: 'Beef', price: 20 },
      { id: 'char-siu', name: 'Char Siu', price: 15 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'turnip-cake',
    name: 'Lo Bak Go (Turnip Cake)',
    description: 'Pan-fried radish cake with Chinese sausage and dried shrimp',
    basePrice: 120,
    category: 'dim-sum',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Noodles
  {
    id: 'beef-chow-fun',
    name: 'Beef Chow Fun',
    description: 'Stir-fried wide rice noodles with tender beef and bean sprouts',
    basePrice: 280,
    category: 'noodles',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'miso-ramen',
    name: 'Miso Ramen',
    description: 'Noodle in a creamy, nutty and hearty miso soup, topped with chashu and 1/2 a slice of ajitama',
    basePrice: 199,
    category: 'noodles',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'tantanmen-ramen',
    name: 'Tantanmen Ramen',
    description: 'Noodle in a reddish, spicy chili, nutty and sesame soup, 1/2 ajitama with chashu',
    basePrice: 259,
    category: 'noodles',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'shoyu-ramen',
    name: 'Shoyu Ramen',
    description: 'Noodle and savory in a tangy, salty and savory soup, topped with chashu, nori and 1/2 ajitama',
    basePrice: 199,
    category: 'noodles',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'dan-dan-noodles',
    name: 'Dan Dan Noodles',
    description: 'Sichuan noodles with spicy sesame sauce and minced pork',
    basePrice: 250,
    category: 'noodles',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'wonton-noodle-soup',
    name: 'Wonton Noodle Soup',
    description: 'Fresh egg noodles in clear broth with pork and shrimp wontons',
    basePrice: 220,
    category: 'noodles',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'pad-thai',
    name: 'Pad Thai',
    description: 'Thai stir-fried rice noodles with shrimp, tofu, and peanuts',
    basePrice: 260,
    category: 'noodles',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'lo-mein',
    name: 'Chicken Lo Mein',
    description: 'Soft egg noodles tossed with chicken and vegetables',
    basePrice: 240,
    category: 'noodles',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Rice Dishes
  {
    id: 'yang-chow-fried-rice',
    name: 'Yang Chow Fried Rice',
    description: 'Classic fried rice with shrimp, char siu, and eggs',
    basePrice: 280,
    category: 'rice-dishes',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'beef-broccoli-rice',
    name: 'Beef and Broccoli Rice',
    description: 'Tender beef with fresh broccoli in savory sauce over steamed rice',
    basePrice: 320,
    category: 'rice-dishes',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'sweet-sour-pork-rice',
    name: 'Sweet and Sour Pork Rice',
    description: 'Crispy pork with pineapple and bell peppers in tangy sauce',
    basePrice: 300,
    category: 'rice-dishes',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'mapo-tofu-rice',
    name: 'Mapo Tofu Rice',
    description: 'Silky tofu in spicy Sichuan sauce with ground pork over rice',
    basePrice: 260,
    category: 'rice-dishes',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'kung-pao-chicken-rice',
    name: 'Kung Pao Chicken Rice',
    description: 'Diced chicken with peanuts and chili peppers in savory sauce',
    basePrice: 290,
    category: 'rice-dishes',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Beverages
  {
    id: 'jasmine-tea',
    name: 'Jasmine Tea',
    description: 'Fragrant jasmine tea served hot in traditional pot',
    basePrice: 80,
    category: 'beverages',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'oolong-tea',
    name: 'Oolong Tea',
    description: 'Premium oolong tea with complex floral notes',
    basePrice: 100,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'chrysanthemum-tea',
    name: 'Chrysanthemum Tea',
    description: 'Cooling herbal tea with dried chrysanthemum flowers',
    basePrice: 90,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'lychee-juice',
    name: 'Fresh Lychee Juice',
    description: 'Sweet and refreshing lychee juice served chilled',
    basePrice: 120,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'winter-melon-tea',
    name: 'Winter Melon Tea',
    description: 'Traditional Chinese tea with subtle sweet flavor',
    basePrice: 85,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'hot-soy-milk',
    name: 'Hot Soy Milk',
    description: 'Fresh soy milk served hot with optional sugar',
    basePrice: 70,
    category: 'beverages',
    variations: [
      { id: 'plain', name: 'Plain', price: 0 },
      { id: 'sweet', name: 'Sweetened', price: 10 }
    ],
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  
  // Republic Combo Sets
  {
    id: 'set-a',
    name: 'Set A',
    description: '2 Miso Ramen + 4 pieces Gyoza - Perfect for sharing',
    basePrice: 448,
    category: 'republic-combo',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'set-b',
    name: 'Set B',
    description: '3 Tantanmen Ramen + 6 pieces Gyoza - Great for groups',
    basePrice: 877,
    category: 'republic-combo',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'set-c',
    name: 'Set C',
    description: '1 Spicy Miso + 1 Curry Ramen + 1 Shoyu Ramen + 6 pieces Gyoza - Ultimate variety',
    basePrice: 747,
    category: 'republic-combo',
    popular: true,
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];

export const categories = [
  { id: 'dim-sum', name: 'Dim Sum', icon: '🥟' },
  { id: 'noodles', name: 'Noodles', icon: '🍜' },
  { id: 'rice-dishes', name: 'Rice Dishes', icon: '🍚' },
  { id: 'beverages', name: 'Beverages', icon: '🍵' },
  { id: 'republic-combo', name: 'Republic Combo', icon: '🍱' }
];

export const addOnCategories = [
  { id: 'spice', name: 'Spice Level' },
  { id: 'protein', name: 'Extra Protein' },
  { id: 'sauce', name: 'Sauces' },
  { id: 'extras', name: 'Extras' }
];