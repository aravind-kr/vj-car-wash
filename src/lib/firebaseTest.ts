import { db } from './firebase';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';

export const testFirebaseConnection = async () => {
  try {
    console.log('Testing Firebase connection...');
    
    // Test 1: Try to write a simple document
    const testDocRef = doc(db, 'test', 'connection-test');
    await setDoc(testDocRef, {
      timestamp: new Date(),
      message: 'Connection test successful'
    });
    console.log('✅ Write test successful');
    
    // Test 2: Try to read the document back
    const docSnap = await getDoc(testDocRef);
    if (docSnap.exists()) {
      console.log('✅ Read test successful:', docSnap.data());
    } else {
      console.log('❌ Document not found after write');
    }
    
    return { success: true, message: 'Firebase connection is working!' };
  } catch (error) {
    console.error('❌ Firebase connection test failed:', error);
    return { success: false, error: error };
  }
};

// Debug function to check environment variables
export const debugFirebaseConfig = () => {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? '✅ Set' : '❌ Missing',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? '✅ Set' : '❌ Missing',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? '✅ Set' : '❌ Missing',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ? '✅ Set' : '❌ Missing',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ? '✅ Set' : '❌ Missing',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? '✅ Set' : '❌ Missing'
  };
  
  console.log('Firebase Environment Variables:', config);
  return config;
};