export interface BookingData {
  id?: string;
  service: string;
  serviceName: string;
  servicePrice: string;
  date: string;
  time: string;
  description: string;
  imageUrls: string[];
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
  category: 'wash' | 'detail' | 'package';
}

export const SERVICES: Service[] = [
  {
    id: "basic",
    title: "Basic Wash",
    description: "Exterior wash with soap, rinse, and dry",
    price: "₹1,200",
    duration: "30 mins",
    category: "wash",
    features: [
      "Exterior pre-rinse",
      "Foam wash with premium soap",
      "Hand wash and scrub",
      "Thorough rinse",
      "Spot-free drying",
      "Wheel cleaning",
      "Basic tire shine"
    ]
  },
  {
    id: "premium",
    title: "Premium Detail",
    description: "Full interior and exterior detailing service",
    price: "₹3,600",
    duration: "2 hours",
    category: "detail",
    popular: true,
    features: [
      "Complete exterior wash",
      "Clay bar treatment",
      "Paint correction (minor scratches)",
      "Premium wax application",
      "Interior deep cleaning",
      "Leather/fabric protection",
      "Dashboard and console detailing",
      "Window cleaning (inside & out)",
      "Tire and rim deep clean",
      "Air freshener application"
    ]
  },
  {
    id: "deluxe",
    title: "Deluxe Package",
    description: "Complete wash, wax, interior cleaning, and tire shine",
    price: "₹2,800",
    duration: "90 mins",
    category: "package",
    features: [
      "Premium exterior wash",
      "Hand wax application",
      "Interior vacuum and wipe down",
      "Dashboard conditioning",
      "Window cleaning",
      "Tire shine and rim polish",
      "Floor mat cleaning",
      "Door jamb cleaning",
      "Spray wax finish"
    ]
  }
];