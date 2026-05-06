import React from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Container,
  Header,
  HeaderLeft,
  MenuButton,
  HeaderTitle,
  ProfileImage,
  Section,
  WelcomeTitle,
  WelcomeSubtitle,
  SearchWrapper,
  SearchInput,
  FilterButton,
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  RowBetween,
} from './Styled';
import { useSelector } from 'react-redux';

const menuIcon = require('@src/assets/images/menu.png');
const defaultProfile = require('@src/assets/images/user.png');
const filterIcon = require('@src/assets/images/filter.png');

const ActivityLog = ({ navigation }: any) => {
  const user = useSelector((state: any) => state.user.user);

  const activities = [
    {
      id: '1',
      title: 'Project Updated',
      description: 'Skyline Plaza Phase II updated successfully.',
      time: '2 mins ago',
      status: 'Success',
    },
    {
      id: '2',
      title: 'New Task Added',
      description: 'Client meeting scheduled for tomorrow.',
      time: '10 mins ago',
      status: 'Pending',
    },
    {
      id: '3',
      title: 'Profile Updated',
      description: 'Your profile information was changed.',
      time: '1 hour ago',
      status: 'Info',
    },
    {
      id: '4',
      title: 'Password Changed',
      description: 'Your account password was updated.',
      time: 'Yesterday',
      status: 'Security',
    },
  ];

  const renderItem = ({ item }: any) => (
    <Card>
      <CardContent>
        <RowBetween>
          <CardTitle>{item.title}</CardTitle>
        </RowBetween>

        <CardDescription>{item.description}</CardDescription>

        <RowBetween>
          <CardDescription>{item.time}</CardDescription>
          <CardDescription>{item.status}</CardDescription>
        </RowBetween>
      </CardContent>
    </Card>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#faf9ff' }}>
      <Container>
        {/* HEADER */}
        <Header>
          <HeaderLeft>
            <MenuButton onPress={() => navigation.openDrawer()}>
              <Image source={menuIcon} style={{ width: 22, height: 22 }} />
            </MenuButton>

            <HeaderTitle>Activity Log</HeaderTitle>
          </HeaderLeft>

          <ProfileImage
            source={
              typeof user?.photo === 'string'
                ? { uri: user.photo }
                : defaultProfile
            }
          />
        </Header>

        {/* WELCOME */}
        <Section>
          <WelcomeTitle>Activity History</WelcomeTitle>
          <WelcomeSubtitle>
            Track all your recent actions and updates
          </WelcomeSubtitle>
        </Section>

        {/* SEARCH */}
        <SearchWrapper>
          <SearchInput placeholder="Search activity..." />
          <FilterButton>
            <Image source={filterIcon} style={{ width: 18, height: 18 }} />
          </FilterButton>
        </SearchWrapper>

        {/* LIST */}
        <FlatList
          data={activities}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </Container>
    </SafeAreaView>
  );
};

export default ActivityLog;