import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBLAHCsYz9OUmsyAIZOH62Zwc5Q94KNUDw',
  authDomain: 'uploadingfile-a6483.firebaseapp.com',
  projectId: 'uploadingfile-a6483',
  storageBucket: 'uploadingfile-a6483.appspot.com',
  messagingSenderId: '391393751703',
  appId: '1:391393751703:web:a338b138d19dab09d0afd2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
