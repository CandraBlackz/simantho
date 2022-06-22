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
import { Gap } from '../../components';

const Tentang = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={IcDetailThumb} style={styles.thumb}>
        <TouchableOpacity style={styles.back}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView>
          <View>
            <Text style={styles.title}>Tentang Kami Page</Text>
          </View>
          <Gap height={15} />
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            maiores, reiciendis velit repudiandae earum aliquam sunt delectus.
            Modi voluptates amet itaque delectus, quidem, accusamus magni vel
            tenetur, dolor distinctio quibusdam! Ex dolore iure error
            laudantium? Delectus aut aliquid fuga sed, aperiam blanditiis,
            officia magnam, sequi accusamus esse saepe suscipit vel maxime
            voluptas? Incidunt illo debitis officiis praesentium accusantium
            nostrum earum? Rem minima magnam, similique alias itaque doloribus
            cumque? Quidem at nisi dolores aut id est eos expedita, obcaecati
            iste animi aliquam assumenda corrupti illo doloribus exercitationem
            deleniti quam placeat quibusdam. Dolorum similique reprehenderit
            itaque labore repudiandae voluptatibus facilis alias optio iste
            culpa quibusdam nesciunt ex molestias dignissimos beatae in eligendi
            explicabo dolor, laboriosam ullam magnam illum fugiat rem.
            Aspernatur, delectus. Beatae adipisci ea error corrupti amet quasi
            quis eum iste, expedita, quo quidem accusamus itaque culpa corporis
            laboriosam ad explicabo fuga animi ullam facere maiores nobis labore
            nesciunt odit! Voluptatibus! Quibusdam, placeat, ex sit ratione
            rerum iusto amet reiciendis asperiores nostrum, officia maiores
            deserunt fuga esse. Sapiente quas quasi natus dolores. Explicabo
            nesciunt illum ullam reprehenderit error harum amet delectus?
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Tentang;

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
    backgroundColor: '#78e08f',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -30,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  title: { fontSize: 18, fontFamily: 'Poppins-Regular', color: '#FFFF' },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#FFFF',
    marginBottom: 20,
  },
});
