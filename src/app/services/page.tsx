import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import ServicesHero from "../../components/sections/ServicesHero";
import ServicesList from "../../components/sections/ServicesList";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      <main>
        <ServicesHero />
        <ServicesList />
      </main>

      <Footer />
    </div>
  );
}