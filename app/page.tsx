import { getNutritionFacts, getFoodCategories } from '@/lib/cosmic'
import { NutritionFact, FoodCategory } from '@/types'
import Header from '@/components/Header'
import CategoryFilter from '@/components/CategoryFilter'
import NutritionCard from '@/components/NutritionCard'
import Hero from '@/components/Hero'

export const revalidate = 60

export default async function HomePage() {
  const nutritionFacts = await getNutritionFacts() as NutritionFact[]
  const categories = await getFoodCategories() as FoodCategory[]
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryFilter categories={categories} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {nutritionFacts.map((fact) => (
            <NutritionCard key={fact.id} fact={fact} />
          ))}
        </div>
        
        {nutritionFacts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No nutrition facts found.</p>
          </div>
        )}
      </main>
    </div>
  )
}