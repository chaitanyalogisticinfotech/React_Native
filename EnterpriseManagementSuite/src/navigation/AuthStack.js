import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import LoginScreen from '@src/screens/Auth/LoginScreen';
import RegistrationScreen from '@src/screens/Auth/RegistrationScreen';
import ForgotPasswordScreen from '@src/screens/Auth/ForgotPasswordScreen';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={RegistrationScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
    </Stack.Navigator>
  );
};

export default AuthStack;