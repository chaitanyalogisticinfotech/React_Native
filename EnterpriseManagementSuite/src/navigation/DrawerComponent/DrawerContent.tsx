import React from 'react';
import {
  DrawerContainer,
  ProfileSection,
  ProfileRow,
  ProfileImage,
  ProfileInfo,
  UserName,
  UserEmail,
  UserRole,
  Badge,
  Divider,
  Menu,
  MenuItem,
  MenuText,
  Footer,
  LogoutButton,
  LogoutText,
} from '../Styled';

import { useToast } from '@src/context/ToastContext';
import { getAuth, signOut } from '@react-native-firebase/auth';
import { useSelector } from 'react-redux';

const defaultProfile = require('@src/assets/images/user.png');

const DrawerContent = ({ navigation }: any) => {
  const { showToast } = useToast();

  // ✅ Correct Redux usage
  const user = useSelector((state: any) => state.user.user);

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
    <DrawerContainer>
      
      {/* PROFILE SECTION */}
      <ProfileSection>
        <ProfileRow>
          <ProfileImage
            source={
              typeof user?.photo === 'string'
                ? { uri: user.photo }
                : defaultProfile
            }
          />

          <ProfileInfo>
            <UserName>{user?.name || 'Guest User'}</UserName>
            <UserEmail>{user?.email || 'guest@email.com'}</UserEmail>
          </ProfileInfo>
        </ProfileRow>

        <UserRole>Senior Architect</UserRole>
        <Badge>Premium Member</Badge>
      </ProfileSection>

      <Divider />

      {/* MENU */}
      <Menu>
        <MenuItem
          onPress={() => {
            navigation.navigate('MainTabs', {
              screen: 'Dashboard',
            });
            navigation.closeDrawer();
          }}
        >
          <MenuText>Dashboard</MenuText>
        </MenuItem>

        <MenuItem
          onPress={() => {
            navigation.navigate('ActivityLog'); // ✅ fixed
            navigation.closeDrawer();
          }}
        >
          <MenuText>Activity Log</MenuText>
        </MenuItem>
      </Menu>

      {/* FOOTER */}
      <Footer>
        <Divider />

        <LogoutButton onPress={handleLogout}>
          <LogoutText>Logout</LogoutText>
        </LogoutButton>
      </Footer>
    </DrawerContainer>
  );
};

export default DrawerContent;