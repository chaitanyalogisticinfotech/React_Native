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

function App(){
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return(
    <SafeAreaProvider>
     <Router />;
    </SafeAreaProvider>
  );
}

export default App;
