import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, dispatch } = useCart();
  
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Vikram Store
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Products</a>
            <a href="#categories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Categories</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button 
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Home</a>
              <a href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Products</a>
              <a href="#categories" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Categories</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;