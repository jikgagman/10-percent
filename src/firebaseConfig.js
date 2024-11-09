// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
// getAnalytics import 제거
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAOfFt6Wc2o_0Z5bEAu1iAWQnXhDFDrptI",
  authDomain: "tenpercent-e33fa.firebaseapp.com",
  projectId: "tenpercent-e33fa",
  storageBucket: "tenpercent-e33fa.firebasestorage.app",
  messagingSenderId: "243627915892",
  appId: "1:243627915892:web:b73e860125d48e214d6f21",
  measurementId: "G-YE7L6K7VSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// analytics 초기화 코드 제거
// const analytics = getAnalytics(app);

export { app };