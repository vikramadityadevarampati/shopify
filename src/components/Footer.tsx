import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Vikram Store
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Your trusted destination for premium products and exceptional shopping experience. 
                Quality guaranteed, satisfaction assured.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#categories" className="text-gray-400 hover:text-white transition-colors">Categories</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Your Order</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer Reviews</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">123 Commerce St, City, State 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">support@vikramstore.com</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-medium text-white mb-2">Business Hours</h5>
                <p className="text-gray-400 text-sm">
                  Mon - Fri: 9:00 AM - 8:00 PM<br />
                  Sat - Sun: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h5 className="font-medium text-white mb-3">Secure Payment Methods</h5>
              <div className="flex space-x-3">
                <div className="bg-white p-2 rounded text-blue-600 font-bold text-xs">VISA</div>
                <div className="bg-white p-2 rounded flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-400 -ml-1"></div>
                </div>
                <div className="bg-white p-2 rounded text-blue-800 font-bold text-xs">AMEX</div>
                <div className="bg-white p-2 rounded text-blue-600 font-bold text-xs">PayPal</div>
                <div className="bg-white p-2 rounded text-gray-800 font-medium text-xs">🍎 Pay</div>
                <div className="bg-white p-2 rounded text-gray-700 font-medium text-xs">G Pay</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center space-x-2 mb-2">
                <CreditCard className="h-5 w-5 text-emerald-400" />
                <span className="text-white font-medium">Secure Checkout</span>
              </div>
              <p className="text-gray-400 text-sm">256-bit SSL Encryption</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Vikram Store. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;