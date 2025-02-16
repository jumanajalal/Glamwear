export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
  category: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Cotton Crew Neck",
    description: "Our signature crew neck t-shirt made from premium cotton. Features a comfortable fit and durability that lasts through countless washes.",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800"
    ],
    colors: ["White", "Black", "Navy", "Gray"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    category: "T-Shirts",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: "Premium V-Neck Tee",
    description: "Elevate your casual look with our premium v-neck t-shirt. Made from soft, breathable fabric perfect for everyday wear.",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800"
    ],
    colors: ["Black", "White", "Heather Gray", "Navy Blue"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "T-Shirts",
    rating: 4.7,
    reviews: 98
  },
  {
    id: 3,
    name: "Organic Cotton Essential",
    description: "Sustainably made from 100% organic cotton, this t-shirt combines comfort with environmental consciousness.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800"
    ],
    colors: ["Natural", "Sage Green", "Earth Brown", "Stone Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "T-Shirts",
    rating: 4.9,
    reviews: 72
  },
  {
    id: 4,
    name: "Athletic Performance Tee",
    description: "Designed for active lifestyles, this moisture-wicking t-shirt keeps you cool and comfortable during workouts.",
    price: 44.99,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800"
    ],
    colors: ["Black", "Gray Melange", "Blue", "Red"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "T-Shirts",
    rating: 4.6,
    reviews: 124
  }
];
