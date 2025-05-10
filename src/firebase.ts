// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS3QVaK-J5X--t1_IBSUFkL9T8xE3GjCg",
  authDomain: "student-data-f4d1b.firebaseapp.com",
  projectId: "student-data-f4d1b",
  storageBucket: "student-data-f4d1b.firebasestorage.app",
  messagingSenderId: "330613441183",
  appId: "1:330613441183:web:a0ea1518df94b0455998aa",
  measurementId: "G-8ZX67JCEFZ"
};

const app = initializeApp(firebaseConfig);

// Initialize services and get references
const analytics = getAnalytics(app);
const auth = getAuth(app); // <--- Add this line to get the Auth service instance

// You might want to export 'auth' to use it in your React components
export { auth, analytics }; 