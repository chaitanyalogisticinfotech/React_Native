import React, { useState } from 'react';

import {
  Container,
  Header,
  IconBox,
  Title,
  Subtitle,
  Card,
  Label,
  InputWrapper,
  Input,
  LeftIcon,
  RightIcon,
  Button,
  ButtonText,
  Footer,
  ErrorText,
  Divider,
  Line,
  DividerText,
  SocialButton,
  SocialText,
  LinkButton,
  Link
} from './Styled';
import {Image} from 'react-native';
import { registerUser } from '@src/services/Auth/firebaseAuth';
import { useToast } from '@src/context/ToastContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegistrationScreen = ({navigation}:any) => {
  const [pass, setPass] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');


  const handleRegister = async () => {
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      return setError('All fields are required');
    }

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    const res = await registerUser(name, email, password);
    
    if (!res.success) {
      setError(res.error);
    } else {
      showToast('Account created successfully!');
      navigation.navigate('Login');
    }

    // if (!res.success) {
    //   setError(res.error);
    // } else {
    //   console.log('User created:', res.user);
    //   // navigation.navigate('Home'); // we will handle later
    // }
  };

  const { showToast } = useToast();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#faf9ff' }}>
    <Container>
      <Header>
        <IconBox>
          {/* <Icon name="rocket-launch" size={26} color="#fff" /> */}
          <Image
            source={require('@src/assets/images/rocket-launch.png')}
            style={{ width: 35, height: 35, tintColor: '#fff' }}
          />
        </IconBox>
        <Title>Create Account</Title>
        <Subtitle>Join us and start managing your projects efficiently.</Subtitle>
      </Header>

      <Card>
        <Label>Full Name</Label>
        <InputWrapper>
          <LeftIcon>
              <Image
                source={require('@src/assets/images/user.png')}
                style={{ width: 20, height: 22, tintColor: '#666666' }}
              />
          </LeftIcon>
          <Input placeholder="Enter name" value={name} onChangeText={setName} />
        </InputWrapper>

        <Label>Email Address</Label>
        <InputWrapper>
          <LeftIcon>
            <Image
              source={require('@src/assets/images/email.png')}
              style={{ width: 24, height: 24, tintColor: '#666666' }}
            />
          </LeftIcon>
          <Input placeholder="email@example.com" value={email} onChangeText={setEmail} />
        </InputWrapper>

        <Label>Password</Label>
        <InputWrapper>
          <LeftIcon>
            {/* <Icon name="lock" size={20} /> */}
            <Image
              source={require('@src/assets/images/lock.png')}
              style={{ width: 24, height: 24, tintColor: '#666666' }}
            />
          </LeftIcon>
          <Input placeholder="Enter password" secureTextEntry={!pass} value={password} onChangeText={setPassword} />
          <RightIcon onPress={() => setPass(!pass)}>
            {/* <Icon name={pass ? 'visibility-off' : 'visibility'} size={20} /> */}
            <Image
              source={
              pass
                  ? require('@src/assets/images/hide.png')
                  : require('@src/assets/images/view.png')
              }
              style={{ width: 20, height: 20 }}
            />
          </RightIcon>
        </InputWrapper>

        <Label>Confirm Password</Label>
        <InputWrapper>
          <LeftIcon>
            {/* <Icon name="lock" size={20} /> */}
            <Image
              source={require('@src/assets/images/lock.png')}
              style={{ width: 24, height: 24, tintColor: '#666666' }}
            />
          </LeftIcon>
          <Input placeholder="Confirm password" secureTextEntry={!confirm} value={confirmPassword} onChangeText={setConfirmPassword} />
          <RightIcon onPress={() => setConfirm(!confirm)}>
            {/* <Icon name={confirm ? 'visibility-off' : 'visibility'} size={20} /> */}
            <Image
              source={
              confirm
                  ? require('@src/assets/images/hide.png')
                  : require('@src/assets/images/view.png')
              }
              style={{ width: 20, height: 20 }}
            />
          </RightIcon>
        </InputWrapper>

        {/* <ErrorText>Passwords do not match</ErrorText> */}
        {error ? <ErrorText>{error}</ErrorText> : null}
        <Button onPress={handleRegister}>
          <ButtonText>Sign Up</ButtonText>
        </Button>

        {/* ✅ Divider */}
        <Divider>
          <Line />
          <DividerText>OR CONTINUE WITH</DividerText>
          <Line />
        </Divider>

        {/* ✅ Google Signup */}
        <SocialButton>
          {/* <FontAwesome name="google" size={18} color="#DB4437" /> */}
            <Image
              source={require('@src/assets/images/search.png')}
              style={{ width: 20, height: 20 }}
            />
          <SocialText>Google</SocialText>
        </SocialButton>
      </Card>

      <Footer>
         <LinkButton onPress={() => navigation.navigate('Login')}><ButtonText style={{ color: '#0052cc' }}>
          Already have an account? Login
        </ButtonText></LinkButton>
  
      </Footer>
    </Container>
    </SafeAreaView>
  );
};

export default RegistrationScreen;