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

const AppContent = () => {
  const { toast } = useToast();

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
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </SafeAreaProvider>
  );
}


export default App;
