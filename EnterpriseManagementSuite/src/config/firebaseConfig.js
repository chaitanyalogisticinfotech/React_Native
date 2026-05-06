import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDLs-EyNHJG1tMg42EI8rJ1dCrF9Dv8384',
  authDomain: 'enterprisemanagementsuit-78a1e.firebaseapp.com',
  projectId: 'enterprisemanagementsuit-78a1e',
  storageBucket: 'enterprisemanagementsuit-78a1e.appspot.com',
  messagingSenderId: '219527338996',
  appId: '1:219527338996:android:acffbfe8ace97daabc37a1',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
