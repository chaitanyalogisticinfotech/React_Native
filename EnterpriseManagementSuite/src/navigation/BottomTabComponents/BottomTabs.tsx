import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@src/screens/App/HomeScreen';
import ProfileScreen from '@src/screens/App/ProfileScreen';
import SettingsScreen from '@src/screens/App/SettingsScreen';

import {
  BottomBar,
  TabItem,
  TabText,
  IconWrapper,
} from '../Styled';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

// 👇 single icon only
const getIcon = (routeName: string) => {
  switch (routeName) {
    case 'Dashboard':
      return require('@src/assets/images/Home.png');
    case 'Profile':
      return require('@src/assets/images/profile.png');
    case 'Settings':
      return require('@src/assets/images/settings.png');
    default:
      return require('@src/assets/images/Home.png');
  }
};

const CustomTabBar = ({ state, navigation }: any) => {
  return (
    <BottomBar>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const icon = getIcon(route.name);

        return (
          <TabItem
            key={index}
            active={isFocused}
            onPress={() => navigation.navigate(route.name)}
          >
            <IconWrapper active={isFocused}>
              <Image
                source={icon}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: isFocused ? '#0052cc' : '#999',
                }}
                resizeMode="contain"
              />
            </IconWrapper>

            <TabText active={isFocused}>
              {route.name}
            </TabText>
          </TabItem>
        );
      })}
    </BottomBar>
  );
};

const BottomTabs = () => {
  return (
    
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Dashboard" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
};

export default BottomTabs;