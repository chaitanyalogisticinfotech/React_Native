import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabs from '@src/navigation/BottomTabComponents/BottomTabs';
import DrawerContent from './DrawerContent';
import ActivityLog from '@src/screens/App/ActivityLog';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const user = null;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerStyle: {
          width: 280,
        },
      }}
      drawerContent={(props) => (
        <DrawerContent {...props} user={user} />
      )}
    >
      {/* ✅ ONLY ONE SCREEN */}
      <Drawer.Screen name="MainTabs" component={BottomTabs} />
       <Drawer.Screen name="ActivityLog" component={ActivityLog} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;