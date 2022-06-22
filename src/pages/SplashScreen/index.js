import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Logo } from '../../assets';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#28925A',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{ height: 20 }} />
      <Text
        style={{
          fontSize: 32,
          color: '#FFF',
          fontFamily: 'Poppins-Medium',
          marginBottom: 40,
        }}>
        Si Manhto
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontFamily: 'Poppins-Light',
          color: 'yellow',
          marginTop: -50,
        }}>
        Sistem Informasi Manasik Haji Terintegrasi Online
      </Text>
    </View>
  );
};

export default SplashScreen;
