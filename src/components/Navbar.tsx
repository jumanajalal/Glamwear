import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { isAuthenticated, logout, setShowAuthPage } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as 'en' | 'ml';
    setLanguage(newLanguage);
  };

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      setShowAuthPage(true);
    }
  };

  const handleProtectedAction = () => {
    if (!isAuthenticated) {
      setShowAuthPage(true);
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b">
        <div className="container-custom">
          <div className="flex justify-between items-center h-10">
            {/* Left side links */}
            <div className="flex items-center space-x-6">
              <a href="/help" className="text-sm text-gray-500 hover:text-gray-700">
                {t('navbar.help')}
              </a>
              <a href="/track" className="text-sm text-gray-500 hover:text-gray-700">
                {t('navbar.track')}
              </a>
              <a href="/order" className="text-sm text-gray-500 hover:text-gray-700">
                {t('navbar.order')}
              </a>
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-6">
              <select
                value={language}
                onChange={handleLanguageChange}
                className="text-sm text-gray-500 bg-transparent border-none focus:ring-0"
              >
                <option value="en">English</option>
                <option value="ml">മലയാളം</option>
              </select>
              <button 
                onClick={handleAuthClick}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                {isAuthenticated ? 'Sign Out' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900">
              GlamWear
            </span>
          </a>

          {/* Search - hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-xl mx-12">
            <div className="relative">
              <input
                type="text"
                placeholder={t('navbar.search')}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1">
            <div className="flex items-center space-x-8">
              <a href="/new" className="text-gray-700 hover:text-gray-900 font-medium">
                {t('navbar.new')}
              </a>
              <a href="/women" className="text-gray-700 hover:text-gray-900 font-medium">
                {t('navbar.women')}
              </a>
              <a href="/men" className="text-gray-700 hover:text-gray-900 font-medium">
                {t('navbar.men')}
              </a>
              <a href="/kids" className="text-gray-700 hover:text-gray-900 font-medium">
                {t('navbar.kids')}
              </a>
              <a href="/sale" className="text-red-600 hover:text-red-700 font-medium">
                {t('navbar.sale')}
              </a>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button 
                onClick={handleProtectedAction}
                className="p-2 text-gray-400 hover:text-gray-500"
              >
                <Heart className="h-6 w-6" />
              </button>
              <button 
                onClick={handleProtectedAction}
                className="p-2 text-gray-400 hover:text-gray-500"
              >
                <User className="h-6 w-6" />
              </button>
              <button 
                onClick={handleProtectedAction}
                className="p-2 text-gray-400 hover:text-gray-500 relative"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Search className="h-6 w-6" />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/new" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
            {t('navbar.new')}
          </a>
          <a href="/women" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
            {t('navbar.women')}
          </a>
          <a href="/men" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
            {t('navbar.men')}
          </a>
          <a href="/kids" className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
            {t('navbar.kids')}
          </a>
          <a href="/sale" className="block px-3 py-2 text-red-600 hover:text-red-700 hover:bg-gray-50 rounded-md">
            {t('navbar.sale')}
          </a>
        </div>
        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleProtectedAction}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <Heart className="h-6 w-6" />
            </button>
            <button 
              onClick={handleProtectedAction}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <User className="h-6 w-6" />
            </button>
            <button 
              onClick={handleProtectedAction}
              className="p-2 text-gray-400 hover:text-gray-500 relative"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
