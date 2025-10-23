// app/nutrition/[slug]/page.tsx
import { getNutritionFactBySlug } from '@/lib/cosmic'
import { NutritionFact } from '@/types'
import Header from '@/components/Header'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function NutritionDetailPage({ params }: PageProps) {
  const { slug } = await params
  const fact = await getNutritionFactBySlug(slug) as NutritionFact | null
  
  if (!fact) {
    notFound()
  }
  
  const sugar = fact.metadata?.sugar || 0
  const calories = fact.metadata?.calories || 0
  const teaspoons = Math.round(sugar / 4)
  const isHighSugar = sugar > 50
  const imageUrl = fact.metadata?.food_image?.imgix_url
  const categoryName = fact.metadata?.category?.metadata?.category_name
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="text-primary hover:text-emerald-600 font-medium mb-6 inline-block">
          ← Back to all items
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {imageUrl && (
            <div className="relative h-96 w-full">
              <img
                src={`${imageUrl}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={fact.metadata?.food_name || fact.title}
                className="w-full h-full object-cover"
                width={1200}
                height={600}
              />
              {isHighSugar && (
                <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                  High Sugar Alert!
                </div>
              )}
            </div>
          )}
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-bold text-gray-900">
                {fact.metadata?.food_name || fact.title}
              </h1>
              {categoryName && (
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                  {categoryName}
                </span>
              )}
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              Serving Size: {fact.metadata?.serving_size || 'Not specified'}
            </p>
            
            {fact.metadata?.description && (
              <div className="bg-emerald-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">{fact.metadata.description}</p>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border border-emerald-200">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Calories</h3>
                <p className="text-5xl font-bold text-gray-900">{calories}</p>
              </div>
              
              <div className={`p-6 rounded-xl border ${isHighSugar ? 'bg-gradient-to-br from-red-50 to-red-100 border-red-200' : 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200'}`}>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Sugar Content</h3>
                <p className="text-5xl font-bold text-gray-900 mb-2">{sugar}g</p>
                {teaspoons > 0 && (
                  <p className="text-lg text-gray-600">
                    Approximately <span className="font-semibold">{teaspoons} teaspoons</span> of sugar
                  </p>
                )}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nutrition Facts</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Protein</p>
                  <p className="text-2xl font-bold text-gray-900">{fact.metadata?.protein || 0}g</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Carbohydrates</p>
                  <p className="text-2xl font-bold text-gray-900">{fact.metadata?.carbohydrates || 0}g</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Total Fat</p>
                  <p className="text-2xl font-bold text-gray-900">{fact.metadata?.total_fat || 0}g</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Sodium</p>
                  <p className="text-2xl font-bold text-gray-900">{fact.metadata?.sodium || 0}mg</p>
                </div>
              </div>
              
              {fact.metadata?.fiber !== undefined && fact.metadata.fiber > 0 && (
                <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Dietary Fiber</p>
                  <p className="text-2xl font-bold text-gray-900">{fact.metadata.fiber}g</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}