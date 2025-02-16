import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { products } from '@/data/products';
import ReviewSection from './ReviewSection';

const ProductDetails = () => {
  const { t } = useLanguage();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Use the first product from our data
  const product = products[0];

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="product-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <ol className="flex space-x-2 text-sm">
          <li><a href="/" className="text-gray-500 hover:text-gray-700">Home</a></li>
          <li className="text-gray-400">/</li>
          <li><a href="/products" className="text-gray-500 hover:text-gray-700">Products</a></li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900">{product.name}</li>
        </ol>
      </nav>

      {/* Main Product Section */}
      <div className="product-grid">
        {/* Product Images */}
        <div className="product-image-container">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-white shadow-sm">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-center object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          {product.images.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-white shadow-sm hover:opacity-75 transition-opacity ${
                    index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-center object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="lg:pl-12">
          <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="ml-3 text-sm text-gray-500">
                {product.rating} ({product.reviews} {t('product.reviews')})
              </p>
            </div>

            <div className="text-3xl font-bold text-gray-900 mb-8">
              ${product.price.toFixed(2)}
            </div>

            <div className="space-y-8">
              {/* Color Selection */}
              <div>
                <h2 className="text-sm font-medium text-gray-900 mb-4">{t('product.color')}</h2>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorSelect(color)}
                      className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        selectedColor === color
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-sm font-medium text-gray-900">{t('product.size')}</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-700">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`min-w-[48px] px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        selectedSize === size
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-b border-gray-200 py-6">
                <button
                  onClick={toggleDescription}
                  className="flex items-center justify-between w-full text-left text-gray-900 group"
                >
                  <span className="font-medium">{t('product.description')}</span>
                  {isDescriptionExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 group-hover:text-gray-700" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-gray-700" />
                  )}
                </button>
                <div
                  className={`mt-4 text-gray-600 transition-all duration-300 ${
                    isDescriptionExpanded ? 'max-h-96' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <p>{product.description}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {t('product.buyNow')}
                  </button>
                  <button 
                    className="w-full bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    {t('product.addToCart')}
                  </button>
                </div>
                <button
                  onClick={toggleWishlist}
                  className={`w-full px-6 py-3 rounded-md font-medium border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isWishlisted
                      ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100 focus:ring-red-500'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 focus:ring-gray-500'
                  }`}
                >
                  <span className="flex items-center justify-center">
                    <Heart className={`h-5 w-5 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                    {t('product.addToWishlist')}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <ReviewSection />
      </div>
    </div>
  );
};

export default ProductDetails;