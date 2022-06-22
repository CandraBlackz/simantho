import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BottomNavigator } from '../components';
import {
  SplashScreen,
  Home,
  Doa,
  DoaDetail,
  Jadwal,
  Pedoman,
  PedomanDetail,
  Tentang,
  Video,
} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Doa" component={Doa} options={{ headerShown: false }} />
      <Tab.Screen
        name="Pedoman"
        component={Pedoman}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Video"
        component={Video}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Jadwal"
        component={Jadwal}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Tentang"
        component={Tentang}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PedomanDetail"
        component={PedomanDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DoaDetail"
        component={DoaDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
