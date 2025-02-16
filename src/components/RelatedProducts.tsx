import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const RelatedProducts = () => {
  const { t } = useLanguage();

  const relatedProducts = [
    {
      id: 1,
      name: 'Similar T-Shirt 1',
      price: '$29.99',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Similar T-Shirt 2',
      price: '$24.99',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Similar T-Shirt 3',
      price: '$34.99',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Similar T-Shirt 4',
      price: '$27.99',
      image: '/placeholder.svg'
    }
  ];

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">{t('relatedProducts.title')}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;