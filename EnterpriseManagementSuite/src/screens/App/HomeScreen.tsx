import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAuth, signOut } from '@react-native-firebase/auth';
import { Button } from 'react-native';
import { useToast } from '@src/context/ToastContext';

const HomeScreen = () => {
  const { showToast } = useToast();

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);

      showToast('Logged out successfully');
    } catch (error) {
      showToast('Logout failed');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>

        <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen; 
