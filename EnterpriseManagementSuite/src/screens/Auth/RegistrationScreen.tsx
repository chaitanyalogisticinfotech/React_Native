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
} from './Styled';

import { registerUser } from '@src/services/Auth/firebaseAuth';

const RegistrationScreen = ({navigation}) => {
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
      console.log('User created:', res.user);
      // navigation.navigate('Home'); // we will handle later
    }
  };

  return (
    <Container>
      <Header>
        <IconBox>
          {/* <Icon name="rocket-launch" size={26} color="#fff" /> */}
        </IconBox>
        <Title>Create Account</Title>
        <Subtitle>Start your journey</Subtitle>
      </Header>

      <Card>
        <Label>Full Name</Label>
        <InputWrapper>
          <LeftIcon>
            {/* <Icon name="person" size={20} /> */}
          </LeftIcon>
          <Input placeholder="Enter name" value={name} onChangeText={setName} />
        </InputWrapper>

        <Label>Email</Label>
        <InputWrapper>
          <LeftIcon>
            {/* <Icon name="email" size={20} /> */}
          </LeftIcon>
          <Input placeholder="email@example.com" value={email} onChangeText={setEmail} />
        </InputWrapper>

        <Label>Password</Label>
        <InputWrapper>
          <LeftIcon>
            {/* <Icon name="lock" size={20} /> */}
          </LeftIcon>
          <Input secureTextEntry={!pass} value={password} onChangeText={setPassword} />
          <RightIcon onPress={() => setPass(!pass)}>
            {/* <Icon name={pass ? 'visibility-off' : 'visibility'} size={20} /> */}
          </RightIcon>
        </InputWrapper>

        <Label>Confirm Password</Label>
        <InputWrapper>
          <LeftIcon>
            {/* <Icon name="lock" size={20} /> */}
          </LeftIcon>
          <Input secureTextEntry={!confirm} value={confirmPassword} onChangeText={setConfirmPassword} />
          <RightIcon onPress={() => setConfirm(!confirm)}>
            {/* <Icon name={confirm ? 'visibility-off' : 'visibility'} size={20} /> */}
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
          <SocialText>Google</SocialText>
        </SocialButton>
      </Card>

      <Footer>
        <ButtonText style={{ color: '#0052cc' }}>
          Already have an account? Login
        </ButtonText>
      </Footer>
    </Container>
  );
};

export default RegistrationScreen;