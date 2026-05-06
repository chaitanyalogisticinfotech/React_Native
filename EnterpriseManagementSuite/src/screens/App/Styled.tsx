import styled from 'styled-components/native';

/* MAIN */
export const Container= styled.ScrollView`
  flex: 1;
  background-color: #faf9ff;
  padding: 16px;
  margin-top: 20px;
`;

/* HEADER */
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 0px;
`;

export const HeaderLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MenuButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #0052cc;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
// export const ProfileImage = styled.Image`
//   width: 110px;
//   height: 110px;
//   border-radius: 20px;
// `;

/* WELCOME */
export const Section = styled.View`
  margin-bottom: 20px;
`;

export const WelcomeTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #051a3e;
`;

export const WelcomeSubtitle = styled.Text`
  font-size: 14px;
  color: #737685;
  margin-top: 4px;
`;

/* SEARCH */
export const SearchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 12px;
  border: 1px solid #c3c6d6;
`;

export const FilterButton = styled.TouchableOpacity`
  margin-left: 10px;
  padding: 12px;
  background-color: #e1e8ff;
  border-radius: 10px;
`;

/* FEATURE CARD */
export const Card = styled.View`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 150px;
`;

export const CardContent = styled.View`
  padding: 15px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #051a3e;
`;

export const CardDescription = styled.Text`
  font-size: 14px;
  color: #434654;
  margin-top: 6px;
`;

export const RowBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

/* SMALL CARDS */
export const Grid = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const SmallCard = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
`;

export const SmallCardIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
`;

export const SmallCardTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #051a3e;
`;

export const SmallCardText = styled.Text`
  font-size: 12px;
  color: #737685;
  margin-top: 4px;
`;

export const ActivityList = styled.View`
  margin-top: 10px;
`;

export const ActivityItem = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 18px;
`;

export const TimelineWrapper = styled.View`
  align-items: center;
  margin-right: 12px;
`;

export const Dot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #0052cc;
`;

export const Line = styled.View`
  width: 2px;
  flex: 1;
  background-color: #e1e8ff;
  margin-top: 2px;
`;

export const ActivityCard = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 12px;
  border-radius: 12px;

  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-offset: 0px 2px;
  shadow-radius: 4px;
  elevation: 3;
`;

export const ActivityTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #051a3e;
`;

export const ActivityTime = styled.Text`
  font-size: 12px;
  color: #737685;
  margin-top: 4px;
`;

export const StatusBadge = styled.View`
  align-self: flex-start;
  margin-top: 6px;
  padding: 4px 8px;
  border-radius: 6px;
  background-color: #e1e8ff;
`;

export const StatusText = styled.Text`
  font-size: 10px;
  font-weight: 600;
  color: #0052cc;
`;


export const ProfileCard = styled.View`
  background: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 16px;
  align-items: center;
`;


// For the profile page

export const ContainerForProfile = styled.ScrollView`
  flex: 1;
  background: #f5f7fb;
`;

export const HeaderForProfile = styled.View`
  padding: 16px 20px;
  background: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  elevation: 2;
  padding-top: 40px;
`;

export const HeaderLeftForProfile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MenuButtonForProfile = styled.TouchableOpacity`
  margin-right: 18px;
`;

export const HeaderTitleForProfile = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #051a3e;
`;

export const ProfileCardForProfile = styled.View`
  background: #fff;
  margin: 20px;
  padding: 24px;
  border-radius: 18px;
  align-items: center;
  elevation: 3;
`;

export const ProfileImageWrapper = styled.View`
  position: relative;
`;

export const ProfileImageForProfile = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const EditButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #0052cc;
  padding: 6px 12px;
  border-radius: 12px;
`;

export const EditText = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-top: 12px;
  color: #051a3e;
`;

export const Role = styled.Text`
  color: #0052cc;
  margin-top: 4px;
`;

export const Badge = styled.View`
  margin-top: 8px;
  padding: 6px 14px;
  background: rgba(0, 82, 204, 0.1);
  border-radius: 20px;
`;

export const BadgeText = styled.Text`
  color: #0052cc;
  font-size: 12px;
  font-weight: 500;
`;

export const SectionForProfile = styled.View`
  margin: 0 20px;
`;

export const CardForProfile = styled.View`
  background: #fff;
  padding: 16px;
  border-radius: 14px;
  elevation: 2;
`;

export const InfoRow = styled.View`
  margin-bottom: 14px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #737685;
`;

export const Value = styled.Text`
  font-size: 14px;
  color: #051a3e;
  margin-top: 2px;
`;

export const StatsRow = styled.View`
  flex-direction: row;
  margin: 20px;
  gap: 12px;
`;

export const StatCard = styled.View<{ primary?: boolean }>`
  flex: 1;
  padding: 18px;
  border-radius: 14px;
  background: ${({ primary }) => (primary ? '#0052cc' : '#e8edff')};
`;

export const StatValue = styled.Text<{ primary?: boolean }>`
  font-size: 22px;
  font-weight: bold;
  color: ${({ primary }) => (primary ? '#fff' : '#051a3e')};
`;

export const StatLabel = styled.Text<{ primary?: boolean }>`
  font-size: 12px;
  margin-top: 4px;
  color: ${({ primary }) => (primary ? '#fff' : '#737685')};
`;

export const BioCard = styled.View`
  margin: 0 20px 30px;
  padding: 18px;
  background: #fff;
  border-radius: 14px;
  elevation: 2;
`;

export const BioText = styled.Text`
  margin-top: 8px;
  color: #434654;
  line-height: 20px;
`;