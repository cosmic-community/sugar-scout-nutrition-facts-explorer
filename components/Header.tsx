import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🍬</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Sugar Scout</h1>
              <p className="text-sm text-gray-600">Nutrition Facts Explorer</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Browse All
            </Link>
            <Link href="/#categories" className="text-gray-700 hover:text-primary transition-colors">
              Categories
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}