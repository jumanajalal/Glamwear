import React from 'react';
import ProductCard from './ProductCard';
import AuthPage from '../pages/AuthPage';
import { useAuth } from '../context/AuthContext';
import { products } from '../data/products';

function MainContent() {
  const { showAuthPage } = useAuth();

  return (
    <div className="flex-grow">
      {showAuthPage ? (
        <AuthPage />
      ) : (
        <main className="flex-grow">
          {/* Hero Section */}
          <div className="relative bg-gray-900">
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600"
                alt="Fashion hero"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                New Arrivals
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                Discover our latest collection of premium fashion pieces. From casual comfort to elegant statements,
                find your perfect style with GlamWear.
              </p>
              <div className="mt-10">
                <a
                  href="#featured-products"
                  className="inline-block bg-red-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-red-700 transition-colors"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          {/* Featured Products Section */}
          <div id="featured-products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Featured Products
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Curated selection of our finest pieces
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-baseline sm:justify-between">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
                <a href="/categories" className="hidden text-sm font-semibold text-red-600 hover:text-red-500 sm:block">
                  Browse all categories<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
                {['T-Shirts', 'Dresses', 'Accessories'].map((category) => (
                  <div key={category} className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75">
                      <img
                        src={`https://images.unsplash.com/photo-${category.toLowerCase() === 't-shirts' ? '1523381210434-83304e47675e' : 
                          category.toLowerCase() === 'dresses' ? '1539008835657-9830e3bc3366' : 
                          '1523293182086-7651a899d37f'}?w=800`}
                        alt={category}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      <a href={`/category/${category.toLowerCase()}`}>
                        <span className="absolute inset-0" />
                        {category}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Shop now</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:hidden">
                <a href="/categories" className="block text-sm font-semibold text-red-600 hover:text-red-500">
                  Browse all categories<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="/about/story" className="text-gray-300 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="/about/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="/about/press" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="/returns" className="text-gray-300 hover:text-white transition-colors">Returns</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/size-guide" className="text-gray-300 hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="/gift-cards" className="text-gray-300 hover:text-white transition-colors">Gift Cards</a></li>
                <li><a href="/store-locator" className="text-gray-300 hover:text-white transition-colors">Store Locator</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
              <ul className="space-y-2">
                <li><a href="https://www.instagram.com/glamwear" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://www.facebook.com/glamwear" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="https://www.twitter.com/glamwear" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GlamWear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainContent;
