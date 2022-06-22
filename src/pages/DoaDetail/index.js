import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { IcBackWhite, IcDetailThumb } from '../../assets';
import { Gap, Volume } from '../../components';

const DoaDetail = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={IcDetailThumb} style={styles.thumb}>
        <TouchableOpacity style={styles.back}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.wrapContainer}>
            <Volume />
            <Text style={styles.title}>Doa - doa Detail Page</Text>
          </View>
          <Gap height={15} />
          <Text style={styles.desc}>
            اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙبِسْمِ اللّٰهِ الرَّحْمٰنِ
            الرَّحِيْمِ اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙبِسْمِ اللّٰهِ
            الرَّحْمٰنِ الرَّحِيْمِ
          </Text>
          <Text style={styles.label}>Artinya :</Text>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            maiores, reiciendis velit repudiandae earum aliquam sunt delectus.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default DoaDetail;

const styles = StyleSheet.create({
  page: { flex: 1 },
  thumb: { height: 200, paddingTop: 26, paddingLeft: 22 },
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -18,
    paddingTop: 26,
    paddingHorizontal: 20,
    flex: 1,
  },
  wrapContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginRight: 85,
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 20,
  },
  label: { fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202' },
});
