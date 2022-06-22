import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";


export default function IframeCard({ ytubeId, judul }) {
  const [co, setCo] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.youtube}>
        {co && (
          <OrientationLocker
            orientation={LANDSCAPE}
            onChange={o => console.log(o, 'change')}
          />
        )}
        <YoutubePlayer height={230} videoId={ytubeId}
          onFullScreenChange={() => setCo(!co)}
        />


      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          {judul}
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: 'black',
    ShadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  youtube: { resizeMode: 'cover' },
  content: { alignItems: 'center', padding: 6 },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
