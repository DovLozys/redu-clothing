import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// Apparently, Firebase API keys are OK in checked-in config files
// https://firebase.google.com/docs/projects/api-keys
const firebaseConfig = {
  apiKey: "AIzaSyAbghnxvQktQtrhG1sftgeLm3U9UAyLp70",
  authDomain: "redu-clothing-db.firebaseapp.com",
  projectId: "redu-clothing-db",
  storageBucket: "redu-clothing-db.appspot.com",
  messagingSenderId: "714446440989",
  appId: "1:714446440989:web:1886b13798077099f7d4f4"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocument = async (user) => {
  const userDocRef = doc(db, 'users', user.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
}
