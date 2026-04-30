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

const LoginScreen = ({navigation}) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Center>
        <Header>
          <IconBox>
            {/* <Icon name="lock" size={26} color="#fff" /> */}
          </IconBox>
          <Title>Welcome Back</Title>
          <Subtitle>Enter your credentials</Subtitle>
        </Header>

        <Card>
          <Label>Email</Label>
          <InputWrapper>
            <LeftIcon>
              {/* <Icon name="email" size={20} /> */}
            </LeftIcon>
            <Input placeholder="email@example.com" />
          </InputWrapper>

          <RowBetween>
            <Label>Password</Label>
            <Link>Forgot Password?</Link>
          </RowBetween>

          <InputWrapper>
            <LeftIcon>
              {/* <Icon name="lock" size={20} /> */}
            </LeftIcon>
            <Input secureTextEntry={!show} />
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

          <Button>
            <ButtonText>Sign In</ButtonText>
          </Button>

          <Divider>
            <Line />
            <DividerText>OR CONTINUE WITH</DividerText>
            <Line />
          </Divider>

          {/* ✅ Google Login */}
          <SocialButton>
            {/* <Icon name="google" size={20} /> */}
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