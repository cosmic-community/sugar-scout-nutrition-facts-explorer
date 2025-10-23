export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-emerald-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Know What You're Eating
        </h2>
        <p className="text-xl md:text-2xl text-emerald-50 mb-6">
          Discover the hidden sugar and nutrition facts in your favorite foods
        </p>
        <div className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full">
          <span className="text-2xl">💡</span>
          <span className="font-medium">Did you know? A large Mountain Dew has 118g of sugar!</span>
        </div>
      </div>
    </section>
  )
}