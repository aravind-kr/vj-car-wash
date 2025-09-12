"use client";

import { Suspense } from "react";
import BookingForm from "./BookingForm";

function BookingFormFallback() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-lg p-8">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-4">
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function BookingFormWrapper() {
  return (
    <Suspense fallback={<BookingFormFallback />}>
      <BookingForm />
    </Suspense>
  );
}