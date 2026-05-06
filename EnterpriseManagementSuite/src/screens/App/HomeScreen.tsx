import React, { useEffect, useState } from 'react';
import { Image, FlatList, ActivityIndicator  } from 'react-native';
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
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  RowBetween,
  SmallCard,
  SmallCardIcon,
  SmallCardTitle,
  SmallCardText,
  Grid,
} from './Styled';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { getContents } from '@src/services/Api/contentApi';

const HomeScreen = ({ navigation }: any) => {
  const user = useSelector((state: any) => state.user.user);
  
  const [listData, setListData] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);


const fetchData = async () => {
  try {
    setLoading(true);
    const data = await getContents();

    console.log('DATA:', data);

    setListData(Array.isArray(data) ? data : []);
  } catch (error) {
    console.log('ERROR:', error);
    setListData([]);
  } finally {
    setLoading(false); // ✅ VERY IMPORTANT
  }
};


const renderItem = ({ item }: { item: ContentItem }) => {
  if (!item) return null; // safety

  return (
    <Card style={{ flexDirection: 'row' }}>
      
      <CardImage
        source={
          typeof item.image === 'string'
            ? { uri: item.image }
            : require('@src/assets/images/dashboard.png')
        }
        style={{ width: 120, height: 120 }}
      />

      <CardContent style={{ flex: 1 }}>
        <CardTitle>{item?.title || 'No Title'}</CardTitle>
        <WelcomeSubtitle>{item?.subtitle || ''}</WelcomeSubtitle>

        <CardDescription numberOfLines={2}>
          {item?.description || ''}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#faf9ff' }}>
    <Container>
      {/* HEADER */}
      <Header>
        <HeaderLeft>
          <MenuButton onPress={() => navigation.openDrawer()}>
            <Image
              source={require('@src/assets/images/menu.png')}
              style={{ width: 22, height: 22 }}
            />
          </MenuButton>
          <HeaderTitle>Application</HeaderTitle>
        </HeaderLeft>

        <ProfileImage
          // source={require('@src/assets/images/profile.png')}
          source={
            user?.photo
              ? { uri: user.photo }
              : require('@src/assets/images/profile.png')
          }
        />
      </Header>

      {/* WELCOME */}
      <Section>
        <WelcomeTitle>Welcome back 👋</WelcomeTitle>
        <WelcomeSubtitle>
          Explore your latest insights and updates
        </WelcomeSubtitle>
      </Section>

      {/* SEARCH */}
      <SearchWrapper>
        <SearchInput placeholder="Search..." />
        <FilterButton>
          <Image
            source={require('@src/assets/images/filter.png')}
            style={{ width: 18, height: 18 }}
          />
        </FilterButton>
      </SearchWrapper>

      {/* FEATURE CARD */}
      <Card>
        <CardImage
          source={require('@src/assets/images/dashboard.png')}
        />
        <CardContent>
          <CardTitle>Analytics Report</CardTitle>
          <CardDescription>
            View your latest performance and growth insights in one place.
          </CardDescription>

          <RowBetween>
            <SmallCardText>Updated 2h ago</SmallCardText>
          </RowBetween>
        </CardContent>
      </Card>

      {/* SMALL CARDS */}
      <Grid>
        <SmallCard>
          <SmallCardIcon
            source={require('@src/assets/images/chart.png')}
          />
          <SmallCardTitle>System Health</SmallCardTitle>
          <SmallCardText>
            All services running smoothly
          </SmallCardText>
        </SmallCard>

        <SmallCard>
          <SmallCardIcon
            source={require('@src/assets/images/team.png')}
          />
          <SmallCardTitle>Team Updates</SmallCardTitle>
          <SmallCardText>
            New collaboration tools added
          </SmallCardText>
        </SmallCard>
      </Grid>
      <Section>
  <WelcomeTitle>Latest Updates</WelcomeTitle>

  {loading ? (
    <ActivityIndicator style={{ marginTop: 20 }} />
  ) : (
<FlatList<ContentItem>
  data={listData}
  keyExtractor={(item, index) =>
    item?.id ? item.id.toString() : index.toString()
  }
  renderItem={renderItem}
/>
  )}
</Section>
    </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;  