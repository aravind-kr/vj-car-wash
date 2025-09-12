"use client";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About VJ Car Wash
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
              Your trusted partner in premium automotive care since 2020
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                  VJ Car Wash was founded with a simple mission: to provide exceptional car care services 
                  that exceed our customers&apos; expectations. What started as a small family business has grown 
                  into one of the most trusted car wash services in the region.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We believe that every vehicle deserves premium care, regardless of its make, model, or age. 
                  Our team of skilled professionals uses only the finest products and techniques to ensure 
                  your car receives the attention it deserves.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-700">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                    <div className="text-gray-700">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                    <div className="text-gray-700">Service Packages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-gray-700">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for perfection in every service, ensuring your vehicle receives the highest quality care.
                </p>
              </div>

              <div className="text-center bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.71C6.16 17.17 8 10.83 17 8.83V8zM8.29 3.62L7.22 2.91C11.05 1.11 15.4 2.11 18.25 5.96c1.95 2.65 2.38 6.01 1.3 9.08L18.09 14.3C18.56 12.78 18.33 11.09 17.36 9.78C15.44 7.08 12.67 6.38 10.17 7.17l-1.88-3.55z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Eco-Friendly</h3>
                <p className="text-gray-600">
                  We use environmentally safe products and water-efficient techniques to protect our planet.
                </p>
              </div>

              <div className="text-center bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h2v6h2v-6c0-1.11.89-2 2-2h3c1.11 0 2 .89 2 2v6h2v-6c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v6h2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Customer First</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We listen, adapt, and ensure every experience exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals dedicated to making your car shine
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Vijay Patel</h3>
                <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                  With 8+ years in automotive care, Vijay ensures every service meets our high standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Rajesh Kumar</h3>
                <p className="text-green-600 font-medium mb-3">Lead Detailer</p>
                <p className="text-gray-600">
                  Expert in paint correction and interior detailing with meticulous attention to detail.
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Priya Sharma</h3>
                <p className="text-purple-600 font-medium mb-3">Customer Relations</p>
                <p className="text-gray-600">
                  Ensures exceptional customer experience and manages all service appointments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of satisfied customers who trust VJ Car Wash with their vehicles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/booking"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Book Your Service
              </a>
              <a 
                href="/services"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all"
              >
                View Services
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}