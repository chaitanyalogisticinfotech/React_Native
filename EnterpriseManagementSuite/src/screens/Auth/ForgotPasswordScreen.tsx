import React, {useState} from 'react';
import { Image } from 'react-native';
import {
  Container,
  Card,
  Header,
  Title,
  Subtitle,
  Label,
  InputWrapper,
  Input,
  LeftIcon,
  Button,
  ButtonText,
  Footer,
  LinkButton,
  Link,
  Row,
  InfoCardSecondary,
  InfoText,
  InfoIcon,
  InfoCardPrimary,
} from './Styled';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useToast } from '@src/context/ToastContext';
import { resetPassword } from '@src/services/Auth/firebaseAuth';

const ForgotPasswordScreen = ({ navigation }: any) => {


    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const { showToast } = useToast();

    const handleResetPassword = async () => {
    if (!email) {
      return showToast('Please enter your email');
    }

    setLoading(true);

    const res = await resetPassword(email);

    setLoading(false);

    if (!res.success) {
        showToast(res.error);
    } else {
        showToast('Password reset email sent!');
        navigation.navigate('Login');
    }
    };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#faf9ff' }}>
    <Container>

      {/* Top Bar */}
      {/* <TopBar>
        <BackButton onPress={() => navigation.goBack()}>
          <Image
            source={require('@src/assets/images/lock.png')}
            style={{ width: 20, height: 20 }}
          />
        </BackButton>
        <TopTitle>Forgot Password</TopTitle>
      </TopBar> */}

      {/* Content */}
      <Header>
        <Title>Reset Password</Title>
        <Subtitle>
          Enter your email and we’ll send you a reset link.
        </Subtitle>
      </Header>

      <Card>
        <Label>Email Address</Label>
        <InputWrapper>
          <LeftIcon>
            <Image
              source={require('@src/assets/images/email.png')}
              style={{ width: 22, height: 22, tintColor: '#666666' }}
            />
          </LeftIcon>
          <Input placeholder="name@company.com" value={email} onChangeText={setEmail} />
        </InputWrapper>

        <Button onPress={handleResetPassword} disabled={loading}>
          <ButtonText> {loading ? 'Sending...' : 'Send Reset Link'}</ButtonText>
        </Button>

        <Footer>
          <LinkButton onPress={() => navigation.navigate('Login')}>
            <Link>Back to Login</Link>
          </LinkButton>
        </Footer>
      </Card>

      {/* Info Section */}
<Row>
  <InfoCardPrimary>
    <InfoIcon
      source={require('@src/assets/images/security.png')}
    />
    <InfoText>Secure reset process</InfoText>
  </InfoCardPrimary>

  <InfoCardSecondary>
    <InfoIcon
      source={require('@src/assets/images/support.png')}
    />
    <InfoText>Need help? Contact support</InfoText>
  </InfoCardSecondary>
</Row>
    </Container>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;