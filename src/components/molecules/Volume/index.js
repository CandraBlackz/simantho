import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IcVolume} from '../../../assets';

const Volume = () => {
  return (
    <View>
      <TouchableOpacity style={styles.volume}>
        <IcVolume />
      </TouchableOpacity>
    </View>
  );
};

export default Volume;

const styles = StyleSheet.create({
  volume: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
