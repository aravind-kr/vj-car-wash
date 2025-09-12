import Navigation from "../components/layout/Navigation";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Hero />
        <Services />
      </main>

      <Footer />
    </div>
  );
}
