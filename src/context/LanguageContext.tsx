import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ml'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    'navbar.help': 'Help',
    'navbar.track': 'Track Order',
    'navbar.order': 'My Orders',
    'navbar.search': 'Search for products...',
    'navbar.new': 'New Arrivals',
    'navbar.women': 'Women',
    'navbar.men': 'Men',
    'navbar.kids': 'Kids',
    'navbar.sale': 'Sale',
    'product.addToCart': 'Add to Cart',
    'product.buyNow': 'Buy Now',
    'product.size': 'Select Size',
    'product.color': 'Select Color',
    'product.description': 'Description',
    'product.reviews': 'Reviews',
    'product.relatedProducts': 'You May Also Like',
    'product.title': 'Stylish T-Shirt',
    'product.brand': 'Brand Name',
    'product.addToWishlist': 'Add to Wishlist',
    'product.availableOffers': 'Available Offers',
    'reviews.title': 'Customer Reviews',
    'relatedProducts.title': 'Related Products',
  },
  ml: {
    'navbar.help': 'സഹായം',
    'navbar.track': 'ഓർഡർ ട്രാക്ക്',
    'navbar.order': 'എന്റെ ഓർഡറുകൾ',
    'navbar.search': 'ഉൽപ്പന്നങ്ങൾ തിരയുക...',
    'navbar.new': 'പുതിയ വരവുകൾ',
    'navbar.women': 'സ്ത്രീകൾ',
    'navbar.men': 'പുരുഷന്മാർ',
    'navbar.kids': 'കുട്ടികൾ',
    'navbar.sale': 'വിൽപ്പന',
    'product.addToCart': 'കാർട്ടിലേക്ക് ചേർക്കുക',
    'product.buyNow': 'ഇപ്പോൾ വാങ്ങുക',
    'product.size': 'വലുപ്പം തിരഞ്ഞെടുക്കുക',
    'product.color': 'നിറം തിരഞ്ഞെടുക്കുക',
    'product.description': 'വിവരണം',
    'product.reviews': 'അവലോകനങ്ങൾ',
    'product.relatedProducts': 'നിങ്ങൾക്ക് ഇഷ്ടപ്പെട്ടേക്കാം',
    'product.title': 'സ്റ്റൈലിഷ് ടീ-ഷർട്ട്',
    'product.brand': 'ബ്രാൻഡ് നാമം',
    'product.addToWishlist': 'വിഷ്‌ലിസ്റ്റിലേക്ക് ചേർക്കുക',
    'product.availableOffers': 'ലഭ്യമായ ഓഫറുകൾ',
    'reviews.title': 'ഉപഭോക്തൃ അവലോകനങ്ങൾ',
    'relatedProducts.title': 'അനുബന്ധ ഉൽപ്പന്നങ്ങൾ',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}