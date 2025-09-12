"use client";

import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import BookingForm from "../../components/forms/BookingForm";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Service
          </h1>
          <p className="text-xl">
            Choose your preferred service and schedule your appointment
          </p>
        </div>

        <BookingForm />
      </main>

      <Footer />
    </div>
  );
}
