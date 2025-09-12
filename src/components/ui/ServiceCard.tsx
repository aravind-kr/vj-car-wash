interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
}

export default function ServiceCard({ title, description, price }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>
      <div className="text-2xl font-bold text-blue-600">{price}</div>
    </div>
  );
}