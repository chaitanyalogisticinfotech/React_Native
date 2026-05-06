import styled from 'styled-components/native';

/* CONTAINER */
export const DrawerContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-top: 45px;
  padding-left: 20px;
  padding-bottom: 20px;
`;

/* PROFILE */
export const ProfileSection = styled.View`
  margin-bottom: 20px;
`;

export const ProfileRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 12px;
`;

export const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #0052cc;
`;

export const UserEmail = styled.Text`
  font-size: 12px;
  color: #666;
  margin-top: 2px;
`;

export const UserRole = styled.Text`
  margin-top: 10px;
  font-size: 13px;
  color: #666;
`;

export const Badge = styled.Text`
  margin-top: 6px;
  background-color: #e3f2fd;
  color: #0052cc;
  font-size: 10px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 12px;
  align-self: flex-start;
`;

/* DIVIDER */
export const Divider = styled.View`
  height: 1px;
  background-color: #eee;
  margin-vertical: 12px;
`;

/* MENU */
export const Menu = styled.View`
  flex: 1;
`;

export const MenuItem = styled.TouchableOpacity`
  padding: 14px;
  border-radius: 10px;
`;

export const MenuText = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;

/* FOOTER */
export const Footer = styled.View`
  margin-top: auto;
`;

export const LogoutButton = styled.TouchableOpacity`
  padding: 14px;
`;

export const LogoutText = styled.Text`
  color: #ba1a1a;
  font-weight: bold;
`;

// export const BottomBar = styled.View`
//   flex-direction: row;
//   height: 60px;
//   border-top-width: 1px;
//   border-color: #eee;
//   background-color: white;
// `;

// export const TabItem = styled.TouchableOpacity`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
// `;

// export const TabText = styled.Text`
//   font-size: 12px;
//   color: ${(props) => (props.active ? '#0052cc' : '#999')};
// `;

// export const BottomBar = styled.View`
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: center;
//   height: 65px;
//   background-color: #ffffff;
//   border-top-width: 1px;
//   border-top-color: #eee;
//   elevation: 10;
// `;
export const BottomBar = styled.View`
  flex-direction: row;
  height: 80px;
  background-color: #fff;
  border-top-width: 1px;
  border-color: #eee;
  margin-bottom: 0;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
export const TabItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-vertical: 6px;
`;

export const IconWrapper = styled.View`
  padding: 6px 10px;
  border-radius: 60px;
  background-color: ${({ active }) =>
    active ? 'rgba(0,82,204,0.1)' : 'transparent'};
`;

export const Container = styled.View`
  flex: 1;
  padding-bottom: 70px; 
`;

export const TabText = styled.Text`
  font-size: 11px;
  margin-top: 2px;
  color: ${({ active }) => (active ? '#0052cc' : '#999')};
`;