import React from 'react';
import { Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setUserImage } from '@src/redux/userSlice';
import RNFS from 'react-native-fs';

import {
  ContainerForProfile,
  HeaderForProfile,
  HeaderLeftForProfile,
  MenuButtonForProfile,
  HeaderTitleForProfile,
  ProfileCardForProfile,
  ProfileImageWrapper,
  ProfileImageForProfile,
  EditButton,
  EditText,
  Name,
  Role,
  Badge,
  BadgeText,
  SectionForProfile,
  CardForProfile,
  InfoRow,
  Label,
  Value,
  StatsRow,
  StatCard,
  StatValue,
  StatLabel,
  BioCard,
  BioText,
} from './Styled';

const menuIcon = require('@src/assets/images/menu.png');
const defaultProfile = require('@src/assets/images/user.png');

const ProfileScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);

  // 📸 PICK IMAGE
  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.7,
    });

    const uri = result.assets?.[0]?.uri;

    if (!uri) return;

    const savedPath = await saveImageLocally(uri, user?.photo);

    if (savedPath) {
      dispatch(setUserImage(savedPath));
    }
  };

  // 💾 SAVE IMAGE LOCALLY
const saveImageLocally = async (uri: string, oldPath?: string) => {
  try {
    let sourcePath = uri;

    // 🔥 FIX for Android
    if (uri.startsWith('content://')) {
      const stat = await RNFS.stat(uri);
      sourcePath = stat.path;
    }

    const fileName = `profile_${Date.now()}.jpg`;
    const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

    if (oldPath && oldPath.includes(RNFS.DocumentDirectoryPath)) {
      const exists = await RNFS.exists(oldPath);
      if (exists) await RNFS.unlink(oldPath);
    }

    await RNFS.copyFile(sourcePath, destPath);

    return `file://${destPath}`; // 🔥 IMPORTANT
  } catch (error) {
    console.log('Error saving image:', error);
    return null;
  }
};

  return (
    <ContainerForProfile>
      {/* HEADER */}
      <HeaderForProfile>
        <HeaderLeftForProfile>
          <MenuButtonForProfile onPress={() => navigation.openDrawer()}>
            <Image source={menuIcon} style={{ width: 22, height: 22 }} />
          </MenuButtonForProfile>
          <HeaderTitleForProfile>Profile</HeaderTitleForProfile>
        </HeaderLeftForProfile>
      </HeaderForProfile>

      {/* PROFILE */}
      <ProfileCardForProfile>
        <ProfileImageWrapper>
        <ProfileImageForProfile
  source={
    user?.photo
      ? { uri: user.photo }
      : defaultProfile
  }
/>


          <EditButton onPress={pickImage}>
            <EditText>Edit</EditText>
          </EditButton>
        </ProfileImageWrapper>

        <Name>{user?.name || 'Guest User'}</Name>
        <Role>Senior Architect</Role>

        <Badge>
          <BadgeText>Premium Member</BadgeText>
        </Badge>
      </ProfileCardForProfile>

      {/* INFO */}
      <SectionForProfile>
        <CardForProfile>
          <InfoRow>
            <Label>Email</Label>
            <Value>{user?.email || '-'}</Value>
          </InfoRow>

          <InfoRow>
            <Label>Phone</Label>
            <Value>+91 9876543210</Value>
          </InfoRow>

          <InfoRow>
            <Label>Location</Label>
            <Value>India</Value>
          </InfoRow>
        </CardForProfile>
      </SectionForProfile>

      {/* STATS */}
      <StatsRow>
        <StatCard primary>
          <StatValue primary>42</StatValue>
          <StatLabel primary>Projects</StatLabel>
        </StatCard>

        <StatCard>
          <StatValue>15</StatValue>
          <StatLabel>Years Exp</StatLabel>
        </StatCard>
      </StatsRow>

      {/* BIO */}
      <BioCard>
        <Label>Professional Bio</Label>
        <BioText>
          Experienced architect focused on scalable systems and clean UI design.
          Leading projects from idea to deployment.
        </BioText>
      </BioCard>
    </ContainerForProfile>
  );
};

export default ProfileScreen;