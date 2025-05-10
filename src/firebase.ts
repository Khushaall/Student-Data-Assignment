import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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

const analytics = getAnalytics(app);
const auth = getAuth(app); 

export { auth, analytics }; 