/*
  # Add Chipori Cainta Complete Menu (Updated)

  1. New Categories
    - Add rice-sets, must-try, additional-orders, beverages, beer-bottle, hard-drinks, 
      beer-bucket, pica-pica, bes-treat, unlimited-madness, platter, bes-meal, 
      bes-burger-meal, bes-bowl, bes-sides, bes-extras, ramen-varieties, republic-combo categories

  2. New Menu Items
    - Bes Treat: Ribs, Wings, Nuggets in different sizes with corrected prices
    - Unlimited Madness: Full, Wings Focus, Nuggets Focus packages
    - Platter: Burger Steak, Wings, Ribs, Barkada, Family platters
    - Bes Meal: Rice-based meals with updated prices
    - Bes Burger Meal: Burgers with fries and lemonade
    - Bes Bowl: Fried rice varieties
    - Bes Sides: French fries and sides
    - Bes Extras: Additional items and sauces
    - Beverages: Updated beverage options with pitchers
    - All other categories with proper pricing and descriptions

  3. Features
    - Auto-generated UUIDs for all items (no manual IDs)
    - Corrected pricing based on latest specifications
    - Detailed descriptions with serving details and inclusions
    - Proper categorization for easy browsing
    - Popular items marked appropriately
*/

-- First, add the new categories for Chipori Cainta
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('rice-sets', 'Rice Sets', '🍱', 1, true),
  ('must-try', 'Must Try', '⭐', 2, true),
  ('additional-orders', 'Additional Orders', '➕', 3, true),
  ('beverages', 'Beverages', '🥤', 4, true),
  ('beer-bottle', 'Beer Bottle', '🍺', 5, true),
  ('hard-drinks', 'Hard Drinks', '🥃', 6, true),
  ('beer-bucket', 'Beer Bucket', '🍻', 7, true),
  ('pica-pica', 'Pica-Pica', '🥨', 8, true),
  ('bes-treat', 'Bes Treat', '🍗', 9, true),
  ('unlimited-madness', 'Unlimited Madness', '♾️', 10, true),
  ('platter', 'Platter', '🍽️', 11, true),
  ('bes-meal', 'Bes Meal', '🍽️', 12, true),
  ('bes-burger-meal', 'Bes Burger Meal', '🍔', 13, true),
  ('bes-bowl', 'Bes Bowl', '🍚', 14, true),
  ('bes-sides', 'Bes Sides', '🍟', 15, true),
  ('bes-extras', 'Bes Extras', '🧂', 16, true),
  ('ramen-varieties', 'Ramen Varieties', '🍜', 17, true),
  ('republic-combo', 'Republic Combo', '🎯', 18, true)
ON CONFLICT (id) DO NOTHING;

-- Insert Rice Sets Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Karaage Bento', '50 grams of crunchy chicken strips served with rice and Cold Ramen', 199.00, 'rice-sets', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Gyoza Bento', '4 pieces gyoza served with Ramen and refreshing Cold Ramen', 199.00, 'rice-sets', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Chashu Bento', '4 pieces chashu (braised pork) served with rice and refreshing Cold Ramen', 199.00, 'rice-sets', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Tendondon Curry', 'Tender Beef Tendondon Curry served with a warm bowl of Japanese Rice', 380.00, 'rice-sets', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Gyudon', 'Gyudon Bowl served over Japanese Beef Rice with a red pickled ginger and white sesame seeds', 380.00, 'rice-sets', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Chicken Teriyaki', 'Soy-based glazed in a flavorful sweet warm bowl of Japanese rice, spring onions and white sesame seeds', 160.00, 'rice-sets', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Chashu Rice', '4 pieces chashu (braised pork) served with Japanese rice', 149.00, 'rice-sets', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Tonkatsu Rice', 'Tonkatsu (60 grams) served with Japanese rice and cabbage', 128.00, 'rice-sets', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Karaage Rice', '100 grams of crunchy chicken strips served with Japanese mayo and rice', 179.00, 'rice-sets', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Must Try Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Karaage Bucket', '500 grams of crunchy deep fried chicken bites served with Japanese mayonnaise', 518.00, 'must-try', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Karaage Fries', '100 grams of crunchy chicken strips served with Japanese mayonnaise', 149.00, 'must-try', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Gyoza', 'Gyoza of minced pork and a mixture of spices, hand wrapped in thinly rolled dough skin, pan-seared and served with sauce', 69.00, 'must-try', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Takoyaki', 'Japanese snack in the shape of little round balls containing octopus', 89.00, 'must-try', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Additional Orders Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Extra Noodle', 'Additional ramen noodles', 65.00, 'additional-orders', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Extra Chashu Slice', 'Additional chashu slice', 60.00, 'additional-orders', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Extra Rice', 'Additional serving of rice', 45.00, 'additional-orders', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Beverages Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Bottled Water', 'Standard bottle of pure water', 40.00, 'beverages', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Blue Lemonade', 'Blue-flavored refreshing lemonade', 55.00, 'beverages', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Soda (Canned)', 'Coke or Pepsi in can', 75.00, 'beverages', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Soda (Pitcher)', 'Large pitcher of soda', 85.00, 'beverages', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Red Iced Tea (Pitcher)', 'Large pitcher of red iced tea', 108.00, 'beverages', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Beer Bottle Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Sanmig Light', 'Light beer option', 95.00, 'beer-bottle', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Sanmig Pale Pilsen', 'Classic pale pilsen beer', 95.00, 'beer-bottle', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Sanmig Flavored Beer', 'Flavored beer variety', 95.00, 'beer-bottle', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Redhorse', 'Strong beer option', 99.00, 'beer-bottle', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Sanmig Super Dry', 'Super dry beer', 99.00, 'beer-bottle', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Smirnoff Mule', 'Premium beer option', 99.00, 'beer-bottle', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Hard Drinks Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Soju Original', 'Traditional Korean soju', 218.00, 'hard-drinks', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Soju Flavored', 'Flavored soju - Tequila', 198.00, 'hard-drinks', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Jose Cuervo Tequila', 'Premium tequila', 245.00, 'hard-drinks', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Fundador', 'Premium brandy', 810.00, 'hard-drinks', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Alfonso', 'Premium brandy', 810.00, 'hard-drinks', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Alfonso with Coke', 'Alfonso brandy with Coca-Cola', 850.00, 'hard-drinks', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Fundador with Coke', 'Fundador brandy with Coca-Cola', 850.00, 'hard-drinks', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Black Label (75 cl)', 'Premium whiskey', 2499.00, 'hard-drinks', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Jack Daniels (75 cl)', 'Premium whiskey', 2500.00, 'hard-drinks', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Beer Bucket Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('5+1 Beer Bucket', 'Flavored beers - 6 bottles total', 475.00, 'beer-bucket', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('5+1 Bucket n/ Wings', 'Choice of pulutan (Nachos or 6 pcs Wings)', 649.00, 'beer-bucket', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('5+1 Bucket n/ Ribs', '6 pcs ribs with beer bucket', 799.00, 'beer-bucket', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('5+1 SRH Bucket', 'Special SRH beer bucket', 495.00, 'beer-bucket', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Premium Bucket', 'Super Dry, Smirnoff Mule', 558.00, 'beer-bucket', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Premium Bucket w/ Pulutan', 'Mexican Nachos or 6 pcs Wings', 728.00, 'beer-bucket', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Pica-Pica (Appetizers/Snacks) Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Flavored Fries', 'Cheese, sour cream, BBQ flavored fries', 80.00, 'pica-pica', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Mexican Nachos', 'Crispy nachos with Mexican toppings', 228.00, 'pica-pica', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('10 pcs Shanghai Bites', 'Crispy Shanghai spring rolls', 99.00, 'pica-pica', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('5 pcs Dyna Bites', 'Spicy dynamite bites', 159.00, 'pica-pica', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Sizzling Hotdog', 'Sizzling hotdog with special sauce', 249.00, 'pica-pica', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Sizzling Sisig', 'Traditional Filipino sisig', 249.00, 'pica-pica', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Cheezy Sweet Corn', 'Sweet corn with cheese', 109.00, 'pica-pica', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Garlic Mushroom', 'Garlic sautéed mushrooms', 210.00, 'pica-pica', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Bes Treat Items (Updated Prices)
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Ribs (6 pcs)', '6 pcs tender ribs', 88.00, 'bes-treat', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Ribs (12 pcs)', '12 pcs tender ribs', 148.00, 'bes-treat', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Wings (6 pcs)', '6 pcs crispy wings', 208.00, 'bes-treat', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Wings (12 pcs)', '12 pcs crispy wings', 408.00, 'bes-treat', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Nuggets (6 pcs)', '6 pcs chicken nuggets', 108.00, 'bes-treat', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Nuggets (12 pcs)', '12 pcs chicken nuggets', 208.00, 'bes-treat', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Nuggets (18 pcs)', '18 pcs chicken nuggets', 308.00, 'bes-treat', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Unlimited Madness Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Unlimited Madness (Full)', 'Wings, Mexican Rice, Ribs w/ Curly Fries - includes Iced Tea and sauces', 588.00, 'unlimited-madness', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Unlimited Madness (Wings Focus)', 'Wings w/ Plain Rice - includes Iced Tea and 5 sauces', 428.00, 'unlimited-madness', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Unlimited Madness (Nuggets Focus)', 'Wings w/ 5 Sauces, Mexican Rice - includes Iced Tea and curly fries', 378.00, 'unlimited-madness', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Platter Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Burger Steak Platter', '5 Burger Steaks - includes Gravy sauce', 358.00, 'platter', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Wings Platter', '30 Wings - includes 5 flavors and 1L Pepsi', 1188.00, 'platter', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Ribs Platter', '30 Ribs - includes 3 flavors and 1L Pepsi', 1098.00, 'platter', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Barkada Platter', '12 Nuggets, 6 pcs (mix), 2 flavors - includes 1 Big Bowl Japanese Fried Rice and 1L Pepsi', 1788.00, 'platter', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Family Platter', '12 Ribs w/ 2 flavors, 12 Wings - includes 1.5L Pepsi and Mug Root Beer', 2298.00, 'platter', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Bes Meal Items (Updated Prices)
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Crispy Chicken Fillet w/ Rice', 'Crispy chicken fillet served with rice', 118.00, 'bes-meal', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Bacon w/ Cheesy Mexican Rice', 'Bacon with cheesy Mexican rice', 128.00, 'bes-meal', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Trio Wings w/ Rice', '3 wings served with rice', 128.00, 'bes-meal', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Solo Burger Steak w/ Rice', 'Single patty burger steak with rice and gravy', 138.00, 'bes-meal', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Double Burger Steak w/ Rice', 'Double patty burger steak with rice and gravy', 168.00, 'bes-meal', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Smoked Pork Ribs w/ Rice', 'Smoked pork ribs with rice', 238.00, 'bes-meal', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Bes Burger Meal Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Crispy Chicken Sandwich', 'Served with French Fries and Lemonade Juice', 118.00, 'bes-burger-meal', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Quarter Pounder Beef Burger', 'Single beef patty served with French Fries and Lemonade Juice', 128.00, 'bes-burger-meal', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Double Cheese Burger', 'Double cheese burger served with French Fries and Lemonade Juice', 228.00, 'bes-burger-meal', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Smoky BBQ Pulled Burger', 'BBQ pulled pork/beef served with French Fries and Lemonade Juice', 218.00, 'bes-burger-meal', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Jaws Burger', 'Large burger served with French Fries and Lemonade Juice', 258.00, 'bes-burger-meal', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Club Sandwich', 'Club-style sandwich served with French Fries and Lemonade Juice', 98.00, 'bes-burger-meal', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Bes Bowl Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Chicken Chao Fan', 'Chicken fried rice bowl', 208.00, 'bes-bowl', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Korean Fried Rice', 'Korean-style fried rice', 208.00, 'bes-bowl', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Japanese Fried Rice', 'Japanese-style fried rice', 228.00, 'bes-bowl', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Bes Sides Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Flavored French Fries', 'Cheese/Cajun (2 flavors)', 98.00, 'bes-sides', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Overload Fries', 'Loaded fries with toppings', 168.00, 'bes-sides', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Mexican Nachos', 'Nacho chips with Mexican toppings', 248.00, 'bes-sides', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Bes Extras Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Dip Sauce', 'Generic dipping sauce', 30.00, 'bes-extras', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Plain Rice', 'Steamed white rice', 30.00, 'bes-extras', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Coleslaw', 'Creamy coleslaw side', 30.00, 'bes-extras', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Garlic Rice', 'Garlic flavored fried rice', 30.00, 'bes-extras', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Mexican Rice', 'Mexican-style seasoned rice', 55.00, 'bes-extras', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Curried Rice', 'Curry-flavored rice', 55.00, 'bes-extras', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Ramen Varieties Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Miso', 'Noodle in a creamy, nutty and hearty miso soup, topped with chashu and 1/2 a slice of ajitama', 199.00, 'ramen-varieties', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Tantanmen', 'Noodle in a reddish, spicy chili, nutty and sesame soup, 1/2 ajitama with chashu', 259.00, 'ramen-varieties', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Shoyu Ramen', 'Noodle and savory in a tangy, salty and savory soup, topped with chashu, nori and 1/2 ajitama', 199.00, 'ramen-varieties', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Tonkotsu', 'Noodle in a savory pork bones soup, topped with a slice of chashu and 1/2 ajitama', 199.00, 'ramen-varieties', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Black Garlic', 'Noodle in a slightly bitter, smoky rich black garlic soup, topped with chashu and 1/2 ajitama', 239.00, 'ramen-varieties', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Spicy Miso', 'For spicy miso lovers. Noodle in a spicy miso soup, topped with 1/2 a slice of ajitama and chashu', 249.00, 'ramen-varieties', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Curry Ramen', 'Ramen with a twist! Noodle in a creamy curry soup, topped with ajitama chashu and 1/2 ajitama', 249.00, 'ramen-varieties', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Cold Ramen', 'Noodle in a cold shoyu soup with chicken strips, topped with corn and cucumber. Refreshing!', 249.00, 'ramen-varieties', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Seafood', 'Noodle in a savory scallop based soup, topped with cabbage strips, kani sticks, and narutomaki', 229.00, 'ramen-varieties', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Ramen Overload', 'Classic Miso Ramen with 6 pcs Gyoza', 299.00, 'ramen-varieties', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Insert Republic Combo Sets Items
INSERT INTO menu_items (name, description, base_price, category, popular, available, image_url) VALUES
  ('Set A', '2 Miso, 4 pcs Gyoza', 448.00, 'republic-combo', true, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Set B', '3 Tantanmen, 6 pieces Gyoza', 877.00, 'republic-combo', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800'),
  
  ('Set C', '1 Spicy Miso, 1 Shoyu Ramen, 6 Shoyu Gyoza', 747.00, 'republic-combo', false, true, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Add variations for Gyoza (6 pcs and 16 pcs)
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'Gyoza'), '6 pcs', 0.00),
  ((SELECT id FROM menu_items WHERE name = 'Gyoza'), '16 pcs', 80.00)
ON CONFLICT DO NOTHING;

-- Add variations for Takoyaki (4 pcs, 6 pcs, 8 pcs)
INSERT INTO variations (menu_item_id, name, price) VALUES
  ((SELECT id FROM menu_items WHERE name = 'Takoyaki'), '4 pcs', 0.00),
  ((SELECT id FROM menu_items WHERE name = 'Takoyaki'), '6 pcs', 20.00),
  ((SELECT id FROM menu_items WHERE name = 'Takoyaki'), '8 pcs', 50.00)
ON CONFLICT DO NOTHING;
