export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Our Premium Services
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
          Professional car wash and detailing services designed to keep your vehicle looking pristine. 
          From quick washes to comprehensive detailing, we have the perfect service for every need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/booking"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book Now
          </a>
          <a 
            href="tel:+1234567890"
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}