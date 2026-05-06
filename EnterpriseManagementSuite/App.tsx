/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/navigation/router';

import { ToastProvider, useToast } from '@src/context/ToastContext';
import Toast from '@src/components/Toast/Toast';

import { Provider } from 'react-redux';
import { store, persistor } from '@src/redux/store'; // 👈 import persistor
import { PersistGate } from 'redux-persist/integration/react'; // 👈 add this

import { useDispatch } from 'react-redux';
import { getAuth } from '@react-native-firebase/auth';
import { setUser } from '@src/redux/userSlice';

// import { useToast } from '@src/context/ToastContext';


const AppContent = () => {
  const { toast } = useToast();

    const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();

    // 🔥 Listen to login/logout changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch(
            setUser({
              name: user.displayName || 'Guest User',
              email: user.email,
              photo: user.photoURL || null,
            })
          );
        } else {
          dispatch(setUser(null)); // logout case
        }
      });

      return unsubscribe;
    });

  return (
    <>
      <Router />
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
};

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
      </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}


export default App;
