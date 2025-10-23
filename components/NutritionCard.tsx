import { NutritionFact } from '@/types'
import Link from 'next/link'

interface NutritionCardProps {
  fact: NutritionFact
}

export default function NutritionCard({ fact }: NutritionCardProps) {
  const sugar = fact.metadata?.sugar || 0
  const calories = fact.metadata?.calories || 0
  const isHighSugar = sugar > 50
  const teaspoons = Math.round(sugar / 4)
  
  const imageUrl = fact.metadata?.food_image?.imgix_url
  const categoryName = fact.metadata?.category?.metadata?.category_name
  
  return (
    <Link href={`/nutrition/${fact.slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer h-full">
        {imageUrl && (
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={`${imageUrl}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={fact.metadata?.food_name || fact.title}
              className="w-full h-full object-cover"
              width={400}
              height={300}
            />
            {isHighSugar && (
              <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                High Sugar!
              </div>
            )}
          </div>
        )}
        
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900">
              {fact.metadata?.food_name || fact.title}
            </h3>
            {categoryName && (
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                {categoryName}
              </span>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            {fact.metadata?.serving_size || 'Serving size not specified'}
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-emerald-50 p-3 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Calories</p>
              <p className="text-2xl font-bold text-gray-900">{calories}</p>
            </div>
            
            <div className={`p-3 rounded-lg ${isHighSugar ? 'bg-red-50' : 'bg-emerald-50'}`}>
              <p className="text-xs text-gray-600 mb-1">Sugar</p>
              <p className="text-2xl font-bold text-gray-900">{sugar}g</p>
              {teaspoons > 0 && (
                <p className="text-xs text-gray-600 mt-1">≈ {teaspoons} tsp</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-center pt-4 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-600">Protein</p>
              <p className="text-sm font-semibold text-gray-900">{fact.metadata?.protein || 0}g</p>
            </div>
            <div>
              <p className="text-xs text-gray-600">Carbs</p>
              <p className="text-sm font-semibold text-gray-900">{fact.metadata?.carbohydrates || 0}g</p>
            </div>
            <div>
              <p className="text-xs text-gray-600">Fat</p>
              <p className="text-sm font-semibold text-gray-900">{fact.metadata?.total_fat || 0}g</p>
            </div>
          </div>
          
          {fact.metadata?.description && (
            <p className="text-sm text-gray-600 mt-4 line-clamp-2">
              {fact.metadata.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}