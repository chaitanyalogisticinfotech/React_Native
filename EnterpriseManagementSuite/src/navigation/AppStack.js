// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Import your screens
// import HomeScreen from '@src/screens/App/HomeScreen';
// import ProfileScreen from '@src/screens/App/ProfileScreen';

// const Stack = createNativeStackNavigator();

// const AppStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// };

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from '@src/navigation/DrawerComponent/DrawerNavigator';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainApp" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default AppStack;

// export default AppStack;