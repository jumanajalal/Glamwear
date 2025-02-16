import React from 'react';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import AuthPage from './pages/AuthPage';
import { useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';

function MainContent() {
  const { showAuthPage } = useAuth();

  const handleLinkClick = (event, route) => {
    event.preventDefault();
    // Add logic to navigate to the route
  };

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
                <li><a href="/about/story" onClick={(event) => handleLinkClick(event, '/about/story')} className="text-gray-300 hover:text-white">Our Story</a></li>
                <li><a href="/about/careers" onClick={(event) => handleLinkClick(event, '/about/careers')} className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="/about/press" onClick={(event) => handleLinkClick(event, '/about/press')} className="text-gray-300 hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="/contact" onClick={(event) => handleLinkClick(event, '/contact')} className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="/shipping" onClick={(event) => handleLinkClick(event, '/shipping')} className="text-gray-300 hover:text-white">Shipping Info</a></li>
                <li><a href="/returns" onClick={(event) => handleLinkClick(event, '/returns')} className="text-gray-300 hover:text-white">Returns</a></li>
                <li><a href="/faq" onClick={(event) => handleLinkClick(event, '/faq')} className="text-gray-300 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/size-guide" onClick={(event) => handleLinkClick(event, '/size-guide')} className="text-gray-300 hover:text-white">Size Guide</a></li>
                <li><a href="/gift-cards" onClick={(event) => handleLinkClick(event, '/gift-cards')} className="text-gray-300 hover:text-white">Gift Cards</a></li>
                <li><a href="/store-locator" onClick={(event) => handleLinkClick(event, '/store-locator')} className="text-gray-300 hover:text-white">Store Locator</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <ul className="space-y-2">
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Instagram</a></li>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Facebook</a></li>
                <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 GlamWear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <MainContent />
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
