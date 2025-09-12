import { Service } from "../../lib/types";

interface DetailedServiceCardProps {
  service: Service;
}

export default function DetailedServiceCard({ service }: DetailedServiceCardProps) {
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full flex flex-col ${
      service.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
    }`}>
      {service.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
          service.category === 'wash' ? 'bg-green-100 text-green-800' :
          service.category === 'detail' ? 'bg-purple-100 text-purple-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {service.category.toUpperCase()}
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {service.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {service.description}
        </p>
        
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{service.price}</div>
            <div className="text-sm text-gray-500">Price</div>
          </div>
          <div className="w-px h-12 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300">{service.duration}</div>
            <div className="text-sm text-gray-500">Duration</div>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">What's Included:</h4>
        <ul className="space-y-2 mb-8">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <svg 
                className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto">
        <a
          href={`/booking?service=${service.id}`}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all block ${
            service.popular
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
          }`}
        >
          Book This Service
        </a>
      </div>
    </div>
  );
}