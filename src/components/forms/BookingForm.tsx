"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ServiceSelection from "./ServiceSelection";
import DateTimePicker from "./DateTimePicker";
import DescriptionField from "./DescriptionField";
import { BookingService } from "../../lib/bookingService";

interface FormData {
  service: string;
  date: string;
  time: string;
  description: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
}

export default function BookingForm() {
  const searchParams = useSearchParams();
  const [bookingData, setBookingData] = useState<FormData>({
    service: "",
    date: "",
    time: "",
    description: "",
    customerName: "",
    customerPhone: "",
    customerEmail: "",
  });

  // Pre-select service if coming from services page
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setBookingData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
    bookingId?: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Submit booking to Firebase
      const bookingId = await BookingService.createBooking(bookingData);

      setSubmitStatus({
        type: "success",
        message: `Booking submitted successfully! Your booking ID is: ${bookingId}. We'll contact you shortly to confirm your appointment.`,
        bookingId,
      });

      // Reset form
      setBookingData({
        service: "",
        date: "",
        time: "",
        description: "",
        customerName: "",
        customerPhone: "",
        customerEmail: "",
      });

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Booking submission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    bookingData.service &&
    bookingData.date &&
    bookingData.time &&
    bookingData.customerName &&
    bookingData.customerPhone &&
    bookingData.customerEmail;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-lg p-8">
      {/* Status Messages */}
      {submitStatus.type && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          <div className="flex items-start">
            <div
              className={`flex-shrink-0 ${
                submitStatus.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {submitStatus.type === "success" ? "✓" : "✗"}
            </div>
            <div className="ml-3">
              <h3
                className={`text-sm font-medium ${
                  submitStatus.type === "success"
                    ? "text-green-800"
                    : "text-red-800"
                }`}
              >
                {submitStatus.type === "success"
                  ? "Booking Confirmed!"
                  : "Booking Failed"}
              </h3>
              <p className="mt-1 text-sm">{submitStatus.message}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Customer Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Contact Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="customerName"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="customerName"
                value={bookingData.customerName}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    customerName: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                required
              />
            </div>
            <div>
              <label
                htmlFor="customerPhone"
                className="block text-sm font-medium text-gray-800 mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="customerPhone"
                value={bookingData.customerPhone}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    customerPhone: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="customerEmail"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="customerEmail"
              value={bookingData.customerEmail}
              onChange={(e) =>
                setBookingData({
                  ...bookingData,
                  customerEmail: e.target.value,
                })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
              required
            />
          </div>
        </div>

        {/* Service Selection */}
        <ServiceSelection
          selectedService={bookingData.service}
          onServiceSelect={(service) =>
            setBookingData({ ...bookingData, service })
          }
        />

        {/* Date and Time Selection */}
        <DateTimePicker
          selectedDate={bookingData.date}
          selectedTime={bookingData.time}
          onDateChange={(date) => setBookingData({ ...bookingData, date })}
          onTimeChange={(time) => setBookingData({ ...bookingData, time })}
        />

        {/* Description */}
        <DescriptionField
          description={bookingData.description}
          onDescriptionChange={(description) =>
            setBookingData({ ...bookingData, description })
          }
        />

        {/* Submit Button */}
        <div className="pt-6 border-t border-gray-300">
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
              isFormValid && !isSubmitting
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Book Appointment"}
          </button>
          {!isFormValid && (
            <p className="text-sm text-red-600 mt-2 text-center">
              Please fill in all required fields to proceed
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
