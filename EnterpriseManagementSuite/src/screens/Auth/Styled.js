import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #faf9ff;
  padding: 20px;
`;

export const Center = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const IconBox = styled.View`
  width: 64px;
  height: 64px;
  background-color: #0052cc;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 700;
  color: #051a3e;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #737685;
  margin-top: 5px;
  text-align: center;
`;

export const Card = styled.View`
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  elevation: 3;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #434654;
  margin-bottom: 6px;
  font-weight: 600;
`;

export const InputWrapper = styled.View`
  position: relative;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput`
  height: 48px;
  border-width: 1px;
  border-color: #c3c6d6;
  border-radius: 8px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const LeftIcon = styled.View`
  position: absolute;
  left: 12px;
  top: 12px;
`;

export const RightIcon = styled.TouchableOpacity`
  position: absolute;
  right: 12px;
  top: 12px;
`;

export const Button = styled.TouchableOpacity`
  height: 48px;
  background-color: #0052cc;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const RowBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LinkButton = styled.TouchableOpacity`
  margin: 3px;
`;

export const Link = styled.Text`
  color: #0052cc;
  font-size: 12px;
`;

export const Divider = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;

export const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: #c3c6d6;
`;

export const DividerText = styled.Text`
  margin: 0 10px;
  font-size: 11px;
  color: #737685;
`;

export const Footer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const ErrorText = styled.Text`
  color: #ba1a1a;
  font-size: 12px;
  margin-top: 4px;
`;

export const SocialButton = styled.TouchableOpacity`
  height: 48px;
  border-width: 1px;
  border-color: #c3c6d6;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const SocialText = styled.Text`
  font-size: 14px;
  color: #000;
  margin-left: 8px;
`;

export const Spacer = styled.View`
  height: 10px;
`;

export const TopBar = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  border-bottom-width: 1px;
  border-color: #e5e7eb;
  background-color: #fff;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const TopTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const InfoCard = styled.View`
  flex: 1;
  padding: 14px;
  border-radius: 10px;
  margin-horizontal: 4px;
`;

export const InfoCardPrimary = styled(InfoCard)`
  background-color: #e3f2fd;
`;

export const InfoCardSecondary = styled(InfoCard)`
  background-color: #fdecea;
`;

export const InfoIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-bottom: 6px;
`;

export const InfoText = styled.Text`
  font-size: 12px;
  color: #051a3e;
`;