interface DateTimePickerProps {
  selectedDate: string;
  selectedTime: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

export default function DateTimePicker({ 
  selectedDate, 
  selectedTime, 
  onDateChange, 
  onTimeChange 
}: DateTimePickerProps) {
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30"
  ];

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  // Get date 30 days from now
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateString = maxDate.toISOString().split('T')[0];

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="date" className="block text-lg font-semibold text-gray-800 mb-3">
          Select Date
        </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          min={today}
          max={maxDateString}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-semibold text-gray-800 mb-3">
          Select Time
        </label>
        <div className="grid grid-cols-4 gap-3">
          {timeSlots.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => onTimeChange(time)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedTime === time
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}