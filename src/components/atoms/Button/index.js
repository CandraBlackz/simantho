import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const Button = ({text, color = '#D9DDDC', textColor = '#020202', onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    padding: 18,
    borderRadius: 8,
    shadowColor: 'black',
    ShadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 8,
    overflow: 'hidden',
  }),
  text: color => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: color,
    textAlign: 'center',
  }),
});
