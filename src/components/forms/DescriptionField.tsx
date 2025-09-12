interface DescriptionFieldProps {
  description: string;
  onDescriptionChange: (description: string) => void;
}

export default function DescriptionField({ description, onDescriptionChange }: DescriptionFieldProps) {
  const maxLength = 500;
  
  return (
    <div className="space-y-2">
      <label htmlFor="description" className="block text-lg font-semibold text-gray-800">
        Additional Notes (Optional)
      </label>
      <p className="text-sm text-gray-700">
        Tell us about any specific requirements, concerns about your vehicle, or special instructions.
      </p>
      <textarea
        id="description"
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
        maxLength={maxLength}
        rows={4}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 resize-none"
        placeholder="e.g., My car has sensitive paint, please use gentle products. There are pet hairs in the back seat that need extra attention..."
      />
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">Examples: paint concerns, pet hair, stains, special requests</span>
        <span className={`${description.length > maxLength * 0.9 ? 'text-red-600' : 'text-gray-500'}`}>
          {description.length}/{maxLength}
        </span>
      </div>
    </div>
  );
}