import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Logo} from '../../../assets';

const LogoSimanhto = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Si Manhto</Text>
      <Text style={styles.subTitle}>
        Sistem Informasi Manasik Haji Terintegrasi Online
      </Text>
    </View>
  );
};

export default LogoSimanhto;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#28925A',
    paddingHorizontal: 24,
    paddingTop: 26,
    paddingBottom: 30,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#FFFF',
    marginBottom: -6,
  },
  subTitle: {fontSize: 10, fontFamily: 'Poppins-Light', color: 'yellow'},
});
