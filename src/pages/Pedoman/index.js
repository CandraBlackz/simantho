import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { HeaderMenu, Button, Gap } from '../../components';

const Pedoman = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View>
        <HeaderMenu title="Pedoman Manasik Haji dan Umroh" />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Gap height={6} />
          <Button
            text="Pedoman Manasik Haji dan Umrah"
            onPress={() => navigation.navigate('PedomanDetail')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Pedoman;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#78e08f' },
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
