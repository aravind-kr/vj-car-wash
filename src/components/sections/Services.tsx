import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Basic Wash",
      description: "Exterior wash with soap, rinse, and dry",
      price: "₹1,200"
    },
    {
      title: "Premium Detail",
      description: "Full interior and exterior detailing service",
      price: "₹3,600"
    },
    {
      title: "Deluxe Package",
      description: "Complete wash, wax, interior cleaning, and tire shine",
      price: "₹2,800"
    }
  ];

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            price={service.price}
          />
        ))}
      </div>
    </div>
  );
}