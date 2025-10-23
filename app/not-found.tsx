import Link from 'next/link'
import Header from '@/components/Header'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Item Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the nutrition facts you're looking for.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
        >
          Browse All Items
        </Link>
      </div>
    </div>
  )
}