import React, { useState } from 'react';
import {
  Container,
  Center,
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
  RowBetween,
  Link,
  Divider,
  Line,
  DividerText,
  Footer,
  SocialButton,
  SocialText,
  LinkButton
} from './Styled';
import {Image} from 'react-native';
import { useToast } from '@src/context/ToastContext';
import { loginUser } from '@src/services/Auth/firebaseAuth';

const LoginScreen = ({navigation}:any) => {
  
  const [show, setShow] = useState(false);

  const { showToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


  const handleLogin = async () => {
    if (!email || !password) {
      return showToast('Please enter email and password');
    }

    setLoading(true);

    const res = await loginUser(email, password);

    setLoading(false);

    if (!res.success) {
      showToast(res.error);
    } else {
      showToast('Login successful!');
      
      // 🔥 temporary navigation (we'll improve later)
      // navigation.navigate("Home");
    }
  };


  return (
    <Container>
      <Center>
        <Header>
          <IconBox>
            {/* <Icon name="lock" size={26} color="#fff" /> */}
             <Image
                    source={require('@src/assets/images/lock.png')}
                    style={{ width: 30, height: 30, tintColor: '#fff' }}
                />
          </IconBox>
          <Title>Welcome Back</Title>
          <Subtitle>Enter your credentials to access your workspace.</Subtitle>
        </Header>

        <Card>
          <Label>Email</Label>
          <InputWrapper>
            <LeftIcon>
              {/* <Icon name="email" size={20} /> */}
              <Image
                    source={require('@src/assets/images/email.png')}
                    style={{ width: 23, height: 25, tintColor: '#666666' }}
              />
            </LeftIcon>
            <Input placeholder="email@example.com" value={email} onChangeText={setEmail} />
          </InputWrapper>

          <RowBetween>
            <Label>Password</Label>
            <LinkButton onPress={() => navigation.navigate('ForgotPassword')}><Link>Forgot Password?</Link></LinkButton>
          </RowBetween>

          <InputWrapper>
            <LeftIcon>
              <Image
                    source={require('@src/assets/images/lock.png')}
                    style={{ width: 25, height: 25, tintColor: '#666666' }}
              />
            </LeftIcon>
            <Input placeholder="Password" secureTextEntry={!show} value={password} onChangeText={setPassword} />
            <RightIcon onPress={() => setShow(!show)}>
                <Image
                    source={
                    show
                        ? require('@src/assets/images/hide.png')
                        : require('@src/assets/images/view.png')
                    }
                    style={{ width: 20, height: 20 }}
                />
            </RightIcon>
          </InputWrapper>

          <Button onPress={handleLogin} disabled={loading}>
            <ButtonText>{loading ? 'Please wait...' : 'Sign In'}</ButtonText>
          </Button>

          <Divider>
            <Line />
            <DividerText>OR CONTINUE WITH</DividerText>
            <Line />
          </Divider>

          {/* ✅ Google Login */}
          <SocialButton>
            <Image
              source={require('@src/assets/images/search.png')}
              style={{ width: 20, height: 20 }}
            />
            <SocialText>Google</SocialText>
          </SocialButton>
        </Card>

        <Footer>
           <Label>Don't have an account?  <LinkButton onPress={() => navigation.navigate('Signup')}>
             <Link>Create Account</Link>
           </LinkButton>  </Label>
        </Footer>
      </Center>
    </Container>
  );
};

export default LoginScreen;