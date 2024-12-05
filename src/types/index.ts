export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  quote: string;
  achievement: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}