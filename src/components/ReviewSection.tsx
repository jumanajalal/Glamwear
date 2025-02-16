import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ReviewSection = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      id: 1,
      author: 'Sarah M.',
      rating: 5,
      date: '2 months ago',
      title: 'Perfect fit and great quality',
      content: 'I absolutely love this t-shirt! The material is soft and comfortable, and the fit is exactly as described. Will definitely buy more colors.',
      verified: true,
    },
    {
      id: 2,
      author: 'Michael R.',
      rating: 4,
      date: '1 month ago',
      title: 'Good value for money',
      content: 'Nice quality shirt, good stitching and material. The only reason for 4 stars is that it runs slightly large.',
      verified: true,
    },
    {
      id: 3,
      author: 'Emily L.',
      rating: 5,
      date: '3 weeks ago',
      title: 'Excellent customer service',
      content: 'Not only is the shirt great, but the customer service was exceptional. Had a question about sizing and they were very helpful.',
      verified: true,
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('reviews.title')}</h2>
        
        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">4.8</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-500">Based on 150 reviews</p>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <div className="w-12 text-sm text-gray-600">{rating} stars</div>
                <div className="flex-1 mx-4 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-400"
                    style={{ width: `${rating === 5 ? 75 : rating === 4 ? 20 : 5}%` }}
                  />
                </div>
                <div className="w-12 text-sm text-gray-600 text-right">
                  {rating === 5 ? '75%' : rating === 4 ? '20%' : '5%'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review List */}
        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 mr-2">{review.author}</span>
                    {review.verified && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{review.title}</h3>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>

        {/* Write Review Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;