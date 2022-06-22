import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import React from 'react';
import { WS_URL } from '../../../config/config';

const BannerCard = ({ gbr, teks, onpress, judul, tanggal, tipe }) => {
  return (
    <TouchableHighlight onPress={onpress}>
      <View style={styles.container} >
        <Image source={tipe === 'uri' ? { uri: WS_URL + 'upload/' + gbr } : gbr} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.judul}>
            {judul}
          </Text>
          <Text style={styles.tanggal}>
            {tanggal}
          </Text>
          <Text style={styles.text}>
            {teks}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default BannerCard;

const styles = StyleSheet.create({
  container: {
    width: 330,
    backgroundColor: 'white',
    shadowColor: 'black',
    ShadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 10,
  },
  image: { width: 330, height: 500, resizeMode: 'contain', backgroundColor: '#dff9fb' },
  content: {
    alignItems: 'center',
    padding: 6,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    textAlign: 'center',
  },
  judul: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    color: '#079992',
  },
  tanggal: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#079992',
  },
});
