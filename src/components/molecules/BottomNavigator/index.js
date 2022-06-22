import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  IcAboutOff,
  IcAboutOn,
  IcHomeOff,
  IcHomeOn,
  IcJadwalOn,
  IcJadwalOff,
  IcDoaOn,
  IcDoaOff,
  IcPedomanOn,
  IcPedomanOff,
  IcVideoOn,
  IcVideoOff,
} from '../../../assets';

const Icon = ({ label, focus }) => {
  switch (label) {
    case 'Home':
      return focus ? <IcHomeOn /> : <IcHomeOff />;
    case 'Tentang':
      return focus ? <IcAboutOn /> : <IcAboutOff />;
    case 'Jadwal':
      return focus ? <IcJadwalOn /> : <IcJadwalOff />;
    case 'Doa':
      return focus ? <IcDoaOn /> : <IcDoaOff />;
    case 'Pedoman':
      return focus ? <IcPedomanOn /> : <IcPedomanOff />;
    case 'Video':
      return focus ? <IcVideoOn /> : <IcVideoOff />;
    default:
      return <IcHomeOn />;
  }
};

const BottomNavigator = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#10ac84',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
});
