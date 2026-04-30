import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Example: check login (later use AsyncStorage / API)
  useEffect(() => {
    // Fake delay to simulate checking login
    setTimeout(() => {
      setIsLoggedIn(false); // change to true to test
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;