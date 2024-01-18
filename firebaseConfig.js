import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBM1iAoCgd4T3NPkCCplX6H3FxAkUQalU0",
  authDomain: "scalae-35a8d.firebaseapp.com",
  projectId: "scalae-35a8d",
  storageBucket: "scalae-35a8d.appspot.com",
  messagingSenderId: "561612616267",
  appId: "1:561612616267:web:118a847f6b328d581a53ce",
  measurementId: "G-27PKVGMHXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

console.log(app);

export{ app, auth, analytics }
