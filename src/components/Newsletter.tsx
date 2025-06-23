import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Latest Offers
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter and be the first to know about new products, 
              exclusive deals, and special promotions.
            </p>

            {isSubscribed ? (
              <div className="flex items-center justify-center space-x-2 text-green-600 text-lg font-medium">
                <CheckCircle className="h-6 w-6" />
                <span>Successfully subscribed! Welcome to Vikram Store family.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex space-x-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}

            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50,000+</div>
                <div className="text-gray-600">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Weekly</div>
                <div className="text-gray-600">Updates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Exclusive</div>
                <div className="text-gray-600">Deals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;