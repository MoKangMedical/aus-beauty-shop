// Product categories
export type Category = "press-on-nails" | "beauty-toys" | "bag-charms" | "accessories";

// Product data model
export interface Product {
  id: string;
  name: string;
  nameZh: string;
  category: Category;
  price: number; // AUD
  originalPrice?: number; // crossed-out price
  images: string[];
  description: string;
  descriptionZh: string;
  features: string[];
  material: string;
  colors: string[];
  sizes: string[];
  inStock: boolean;
  isNew: boolean;
  isHot: boolean;
  shippingFrom: string; // "China → Australia"
  estimatedDelivery: string;
  tags: string[];
  tiktokVideo?: string; // TikTok video URL
  instagramPost?: string; // Instagram post URL
}

// Cart item
export interface CartItem {
  productId: string;
  quantity: number;
  color?: string;
  size?: string;
}
