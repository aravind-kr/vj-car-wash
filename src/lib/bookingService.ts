import { 
  collection, 
  addDoc, 
  doc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  getDoc, 
  query, 
  where, 
  orderBy, 
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';
import { BookingData, SERVICES } from './types';

const BOOKINGS_COLLECTION = 'bookings';

// Retry utility function
const retryOperation = async <T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      console.log(`Attempt ${attempt}/${maxRetries} failed:`, error);
      
      if (attempt === maxRetries) {
        throw error;
      }
      
      // Wait before retrying, with exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }
  throw new Error('Maximum retries exceeded');
};

export class BookingService {
  // Create a new booking
  static async createBooking(formData: {
    service: string;
    date: string;
    time: string;
    description: string;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
  }): Promise<string> {
    try {
      // Find service details
      const selectedService = SERVICES.find(s => s.id === formData.service);
      if (!selectedService) {
        throw new Error('Invalid service selected');
      }

      // Create booking document
      const bookingData: Omit<BookingData, 'id'> = {
        service: formData.service,
        serviceName: selectedService.title,
        servicePrice: selectedService.price,
        date: formData.date,
        time: formData.time,
        description: formData.description,
        imageUrls: [], // No images for now
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,
        customerEmail: formData.customerEmail,
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // Add booking to Firestore with retry logic
      const docRef = await retryOperation(
        () => addDoc(collection(db, BOOKINGS_COLLECTION), bookingData)
      );
      return docRef.id;
    } catch (error) {
      console.error('Error creating booking:', error);
      
      // Provide more specific error messages based on the error type
      if (error instanceof Error) {
        if (error.message.includes('offline') || error.message.includes('network')) {
          throw new Error('Network connection issue. Please check your internet connection and try again.');
        } else if (error.message.includes('permission') || error.message.includes('PERMISSION_DENIED')) {
          throw new Error('Database permission denied. Please contact support.');
        } else if (error.message.includes('quota') || error.message.includes('QUOTA_EXCEEDED')) {
          throw new Error('Service temporarily unavailable. Please try again later.');
        } else {
          throw new Error(`Booking failed: ${error.message}`);
        }
      }
      
      throw new Error('Failed to create booking. Please check your connection and try again.');
    }
  }

  // Get booking by ID
  static async getBooking(bookingId: string): Promise<BookingData | null> {
    try {
      const docRef = doc(db, BOOKINGS_COLLECTION, bookingId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          ...data,
          createdAt: data.createdAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date()
        } as BookingData;
      }
      
      return null;
    } catch (error) {
      console.error('Error getting booking:', error);
      throw new Error('Failed to fetch booking details');
    }
  }

  // Get all bookings (for admin use)
  static async getAllBookings(): Promise<BookingData[]> {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(db, BOOKINGS_COLLECTION),
          orderBy('createdAt', 'desc')
        )
      );
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date()
      })) as BookingData[];
    } catch (error) {
      console.error('Error getting all bookings:', error);
      throw new Error('Failed to fetch bookings');
    }
  }

  // Get bookings by customer email
  static async getBookingsByEmail(email: string): Promise<BookingData[]> {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(db, BOOKINGS_COLLECTION),
          where('customerEmail', '==', email),
          orderBy('createdAt', 'desc')
        )
      );
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date()
      })) as BookingData[];
    } catch (error) {
      console.error('Error getting bookings by email:', error);
      throw new Error('Failed to fetch bookings');
    }
  }

  // Update booking status
  static async updateBookingStatus(bookingId: string, status: BookingData['status']): Promise<void> {
    try {
      await updateDoc(doc(db, BOOKINGS_COLLECTION, bookingId), {
        status,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error updating booking status:', error);
      throw new Error('Failed to update booking status');
    }
  }

  // Delete booking
  static async deleteBooking(bookingId: string): Promise<void> {
    try {
      // Delete the booking document
      await deleteDoc(doc(db, BOOKINGS_COLLECTION, bookingId));
    } catch (error) {
      console.error('Error deleting booking:', error);
      throw new Error('Failed to delete booking');
    }
  }

  // Generate booking confirmation number
  static generateBookingNumber(): string {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `VJ${timestamp.slice(-6)}${random}`;
  }
}