import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { IcBackWhite } from '../../../assets';
import { useNavigation } from '@react-navigation/native';

const HeaderMenu = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <TouchableOpacity activeOpacity={0.6} onPress={navigation.goBack} >
        <View style={styles.back} >
          <IcBackWhite />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28925A',
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: { padding: 14, marginRight: 10, marginLeft: -10 },
  title: { fontSize: 16, fontFamily: 'Poppins-Medium', color: '#FFFF' },
});
