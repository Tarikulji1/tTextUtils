import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD1R3glgtu_g0wNYheVHyeBwCe33cme71E",
  authDomain: "ttextutils.firebaseapp.com",
  projectId: "ttextutils",
  storageBucket: "ttextutils.firebasestorage.app",
  messagingSenderId: "334400884467",
  appId: "1:334400884467:web:a6b20741bf054cce8ef186",
//   measurementId: "G-5CPJ5D4LB4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
