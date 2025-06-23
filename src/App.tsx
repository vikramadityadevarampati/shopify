import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import PaymentMethods from './components/PaymentMethods';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Categories />
          <ProductGrid />
          <PaymentMethods />
          <Newsletter />
        </main>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;