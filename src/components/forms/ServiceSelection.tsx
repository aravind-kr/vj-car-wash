import { SERVICES } from "../../lib/types";

interface ServiceSelectionProps {
  selectedService: string;
  onServiceSelect: (serviceId: string) => void;
}

export default function ServiceSelection({ selectedService, onServiceSelect }: ServiceSelectionProps) {

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Select Service</h3>
      <div className="grid gap-4">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedService === service.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-blue-300"
            }`}
            onClick={() => onServiceSelect(service.id)}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{service.title}</h4>
                <p className="text-sm text-gray-700 mt-1">{service.description}</p>
                <p className="text-sm text-blue-600 mt-2">Duration: {service.duration}</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-blue-600">{service.price}</div>
                <div className={`w-4 h-4 rounded-full border-2 mt-2 ${
                  selectedService === service.id
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}