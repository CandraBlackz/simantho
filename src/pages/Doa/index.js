import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { HeaderMenu, Button, Gap } from '../../components';

const Doa = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View>
        <HeaderMenu title="Doa-Doa Manasik Haji dan Umroh" />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Gap height={6} />
          <Button
            text="Doa Keluar Rumah"
            onPress={() => navigation.navigate('DoaDetail')}
          />
          <Gap height={6} />
          <Button
            text="Doa Setelah Duduk Dalam Kendaraan"
            color="#FFFF"
            onPress={() => navigation.navigate('DoaDetail')}
          />
          <Gap height={6} />
          <Button
            text="Doa Ketika Kendaraan Mulai Bergerak"
            onPress={() => navigation.navigate('DoaDetail')}
          />
          <Gap height={6} />
          <Button
            text="Doa Ketika Tiba Ditempat Tujuan"
            color="#FFFF"
            onPress={() => navigation.navigate('DoaDetail')}
          />
          <Gap height={6} />
          <Button
            text="Niat Umrah dan Haji"
            onPress={() => navigation.navigate('DoaDetail')}
          />
          <Gap height={6} />
          <Button
            text="Niat Haji Qiran"
            color="#FFFF"
            onPress={() => navigation.navigate('DoaDetail')}
          />
          <Gap height={6} />
          <Button
            text="Doa Selesai Berihram"
            onPress={() => navigation.navigate('DoaDetail')}
          />
          <Gap height={6} />
          <Button
            text="Doa Talbiyah"
            color="#FFFF"
            onPress={() => navigation.navigate('DoaDetail')}
          />
          <Gap height={6} />
          <Button
            text="Doa Memasuki Kota Makkah"
            onPress={() => navigation.navigate('DoaDetail')}
          />
          <Gap height={6} />
          <Button
            text="Doa Masuk Masjidil Haram"
            color="#FFFF"
            onPress={() => navigation.navigate('DoaDetail')}
          />
          <Gap height={6} />
          <Button
            text="Doa Ketika Melihat Kabah"
            onPress={() => navigation.navigate('DoaDetail')}
          />
          <Gap height={6} />
          <Button
            text="Doa Tawaf"
            color="#FFFF"
            onPress={() => navigation.navigate('DoaDetail')}
          />
          <Gap height={6} />
          <Button
            text="Doa Sai"
            onPress={() => navigation.navigate('DoaDetail')}
          />
          <Gap height={6} />
          <Button
            text="Doa Menggunting Rambut"
            color="#FFFF"
            onPress={() => navigation.navigate('DoaDetail')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Doa;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#28925A' },
  container: {
    backgroundColor: '#78e08f',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 0,
    paddingTop: 26,
    paddingHorizontal: 24,
    paddingVertical: 2,
    flex: 1,
    marginBottom: 0,
  },
});
