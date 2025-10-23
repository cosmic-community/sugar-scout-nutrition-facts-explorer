'use client'

import { FoodCategory } from '@/types'

interface CategoryFilterProps {
  categories: FoodCategory[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  if (!categories || categories.length === 0) {
    return null
  }
  
  return (
    <div id="categories" className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-3">
        <button className="px-4 py-2 bg-primary text-white rounded-full font-medium hover:bg-emerald-600 transition-colors">
          All Items
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            {category.metadata?.category_name || category.title}
          </button>
        ))}
      </div>
    </div>
  )
}