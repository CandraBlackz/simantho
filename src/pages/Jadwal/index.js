import { ScrollView, StyleSheet, View, Linking, Text } from 'react-native';
//import { IcJadwalDua } from '../../assets';
import { BannerCard, Gap, HeaderMenu } from '../../components';
import ZoomPNG from '../../assets/Ilustration/zoom.png'

import React, { Component } from 'react'
import Api from '../../config/Api'
export default class Jadwal extends Component {
  state = {
    data: [],
    loading: 1
  }
  componentDidMount() {
    this._getlink()
  }
  _getlink = async () => {
    this.setState({ loading: 2 })
    await Api.post('simanto/zoom')
      .then((d) => {
        this.setState({ data: d.data.data, loading: 3 })
        console.log(d.data.data)
      })
      .catch((err) => {
        this.setState({ data: err, loading: 4 })
        console.log(err)
      })
  }
  render() {
    let banner = <BannerCard gbr={ZoomPNG} text='Loading..' judul='Loading...' tanggal="" tipe="gbr" />
    if (this.state.loading === 3) {
      banner = this.state.data.map((data, key) => {
        const handleClick = () => {
          Linking.openURL(data.link);
        }
        return (
          <BannerCard key={key} tipe="uri" gbr={data.image} teks={data.isi} onpress={handleClick} judul={data.judul} tanggal={data.waktu} />
        )
      })
    }
    if (this.state.loading === 4) {
      banner = <Text style={styles.error}>{JSON.stringify(this.state.data)}</Text>
    }
    return (
      <View style={styles.page}>
        <HeaderMenu title="Jadwal Zoom" />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.bannerCardContainer}>
              <Gap width={10} />
              {banner}
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#78e08f' },
  bannerCardContainer: { flexDirection: 'row', marginVertical: 10 },
  error: {
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
    color: "black",
    fontSize: 20
  }
});
