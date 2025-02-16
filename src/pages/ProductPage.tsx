import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailView from '../components/ProductDetailView';
import { products } from '../data/products';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
      </div>
    );
  }

  return <ProductDetailView product={product} />;
};

export default ProductPage;
