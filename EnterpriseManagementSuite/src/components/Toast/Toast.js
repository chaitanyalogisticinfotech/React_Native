import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(Animated.View)`
  position: absolute;
  bottom: 40px;
  left: 20px;
  right: 20px;
  background-color: #333;
  padding: 14px;
  border-radius: 10px;
  align-items: center;
`;

const Text = styled.Text`
  color: #fff;
`;

const Toast = ({ message, visible }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Container style={{ opacity }}>
      <Text>{message}</Text>
    </Container>
  );
};

export default Toast;