import Link from "next/link";

export default function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
        Premium Car Wash
        <span className="block text-blue-600 dark:text-blue-400">Services</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Professional car washing and detailing services that keep your vehicle looking pristine. 
        Book online and experience the VJ Car Wash difference.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/booking" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center">
          Book Appointment
        </Link>
        <Link href="/services" className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors text-center">
          View Services
        </Link>
      </div>
    </div>
  );
}