// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Food Category type
export interface FoodCategory extends CosmicObject {
  type: 'food-categories';
  metadata: {
    category_name?: string;
    description?: string;
  };
}

// Nutrition Facts type
export interface NutritionFact extends CosmicObject {
  type: 'nutrition-facts';
  metadata: {
    food_name?: string;
    serving_size?: string;
    calories?: number;
    protein?: number;
    carbohydrates?: number;
    total_fat?: number;
    sugar?: number;
    sodium?: number;
    fiber?: number;
    description?: string;
    food_image?: {
      url: string;
      imgix_url: string;
    };
    category?: FoodCategory;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}