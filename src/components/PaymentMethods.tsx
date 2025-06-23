import React from 'react';
import { CreditCard, Smartphone, Shield } from 'lucide-react';

const PaymentMethods: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Secure Payment Options
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Shop with confidence using our secure payment methods. 
            Your financial information is always protected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Security */}
          <div className="text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">SSL Encrypted</h3>
            <p className="text-gray-600">Your payment information is secured with 256-bit SSL encryption</p>
          </div>

          {/* Cards */}
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Credit & Debit Cards</h3>
            <p className="text-gray-600">We accept all major credit and debit cards worldwide</p>
          </div>

          {/* Mobile */}
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Payments</h3>
            <p className="text-gray-600">Pay securely with Apple Pay, Google Pay, and more</p>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-6">
            Accepted Payment Methods
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* Visa */}
            <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-center w-20 h-12">
              <div className="text-blue-600 font-bold text-lg">VISA</div>
            </div>
            
            {/* Mastercard */}
            <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-center w-20 h-12">
              <div className="flex space-x-1">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div className="w-4 h-4 rounded-full bg-orange-400 -ml-2"></div>
              </div>
            </div>
            
            {/* American Express */}
            <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-center w-20 h-12">
              <div className="text-blue-800 font-bold text-sm">AMEX</div>
            </div>
            
            {/* PayPal */}
            <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-center w-20 h-12">
              <div className="text-blue-600 font-bold text-sm">PayPal</div>
            </div>
            
            {/* Apple Pay */}
            <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-center w-20 h-12">
              <div className="text-gray-800 font-medium text-sm">🍎 Pay</div>
            </div>
            
            {/* Google Pay */}
            <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-center w-20 h-12">
              <div className="text-gray-700 font-medium text-sm">G Pay</div>
            </div>
            
            {/* Discover */}
            <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-center w-20 h-12">
              <div className="text-orange-600 font-bold text-xs">DISCOVER</div>
            </div>
            
            {/* Stripe */}
            <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-center w-20 h-12">
              <div className="text-purple-600 font-bold text-sm">Stripe</div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              All transactions are processed securely through our certified payment partners
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t">
          <div className="flex items-center space-x-2 text-gray-600">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-medium">256-bit SSL Encryption</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-sm font-medium">PCI DSS Compliant</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <CreditCard className="h-5 w-5" />
            <span className="text-sm font-medium">Secure Checkout</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;