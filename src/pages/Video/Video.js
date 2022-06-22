import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Gap, HeaderMenu, IframeCard } from '../../components';

import React, { Component } from 'react'
import Api from '../../config/Api';

export default class Video extends Component {
  state = {
    loading: 0,
    data: []
  }
  componentDidMount = async () => {
    await Api.get('simanto/yt')
      .then((d) => {
        this.setState({ data: d.data.data, loading: 1 }, () => console.log(d.data))
      })
      .catch((err) => {
        this.setState({ loading: 2 }, () => console.log(err))
      })
  }
  render() {
    let video = (
      <View style={styles.page}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    )
    if (this.state.loading === 1) {

      video = this.state.data.map((data, key) => {
        return (
          <IframeCard ytubeId={data.video} judul={data.judul} key={key} />
        )
      })
    }
    if (this.state.loading === 2) {
      video = (
        <View style={styles.page}>
          <Text style={styles.loading}>Tidak ada internet.</Text>
          <Text style={styles.loading}>Silahkan menggunakan data seluler atau wifi.</Text>
        </View>
      )
    }
    return (
      <View style={styles.page}>
        <HeaderMenu title="Video Tutorial" />
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.iframeCardContainer}>
              <Gap width={10} />
              {video}
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

// const Video = () => {
//   return (
//     <View style={styles.page}>
//       <HeaderMenu title="Video Tutorial" />
//       <View style={styles.container}>
//         <ScrollView>
//           <View style={styles.iframeCardContainer}>
//             <Gap width={10} />
//             <IframeCard ytubeId={'3REto0Zt5I8'} judul={'URA'} />
//             <IframeCard ytubeId={'Au9qQm4gyjI'} />
//             <IframeCard ytubeId={'VnT_t8TpQjU'} />
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };


const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#78e08f' },
  container: {
    backgroundColor: '#78e08f',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 20,
    marginBottom: 0,
  },
  iframeCardContainer: { marginBottom: 80, marginHorizontal: 15 },
  loading: { flex: 1, backgroundColor: '#78e08f' },
  loading: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center'
  }
});
