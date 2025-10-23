import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all nutrition facts
export async function getNutritionFacts() {
  try {
    const response = await cosmic.objects
      .find({ type: 'nutrition-facts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch nutrition facts');
  }
}

// Fetch nutrition facts by category
export async function getNutritionFactsByCategory(categoryId: string) {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'nutrition-facts',
        'metadata.category': categoryId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch nutrition facts by category');
  }
}

// Fetch single nutrition fact by slug
export async function getNutritionFactBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ 
        type: 'nutrition-facts',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch nutrition fact');
  }
}

// Fetch all food categories
export async function getFoodCategories() {
  try {
    const response = await cosmic.objects
      .find({ type: 'food-categories' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch food categories');
  }
}