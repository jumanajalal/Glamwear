import React from 'react';
import Navbar from './Navbar';
import ProductDetails from './ProductDetails';
import AuthPage from '../pages/AuthPage';
import { useAuth } from '../context/AuthContext';

function MainContent() {
  const { showAuthPage } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      {showAuthPage ? (
        <AuthPage />
      ) : (
        <main className="flex-grow">
          <div className="container-custom py-6">
            <ProductDetails />
          </div>
        </main>
      )}
      <footer className="bg-gray-900 text-white">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Our Story</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainContent;
