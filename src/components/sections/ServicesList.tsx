import { SERVICES } from "../../lib/types";
import DetailedServiceCard from "../ui/DetailedServiceCard";

export default function ServicesList() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Perfect Service
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From quick washes to comprehensive detailing, our professional team
            delivers exceptional results tailored to your vehicle's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {SERVICES.map((service) => (
            <DetailedServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose VJ Car Wash?
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Professional trained staff with years of experience
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Premium products and eco-friendly solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Satisfaction guarantee on all services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Convenient online booking and flexible scheduling</span>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Need a Custom Service?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Contact us for specialized cleaning or bulk service packages.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+1234567890"
                    className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Call Us Now
                  </a>
                  <a
                    href="mailto:info@vjcarwash.com"
                    className="block text-white hover:text-gray-500 font-semibold transition-colors py-2 px-4 rounded-lg"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
