/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext, useState, useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import MovieDetailScreen from "../screen/MovieDetailScreen";
import SearchScreen from "../screen/SearchScreen";
import HomeDrawerNavigator from "../navigator/HomeDrawerNavigator";
import TVDetailScreen from "../screen/TVDetailScreen";
import WebViewScreen from "../screen/WebViewScreen";
import MovieListScreen from "../screen/MovieListScreen";
import { View, StatusBar, ScrollView, StyleSheet, Text } from "react-native";

import OfflineNotice from "../component/OfflineNotice";
import MovieSeasonScreen from "../screen/MovieSeasonScreen";
import auth from '@react-native-firebase/auth';

import {AuthContext, AuthProvider} from './AuthProvider';
import AuthStack from './AuthStack';
import LoginScreen from '../screen/LoginScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeDrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      <Stack.Screen name="TVDetail" component={TVDetailScreen} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureDirection: "vertical-inverted",
        }}
      />
      <Stack.Screen name="Webview" component={WebViewScreen} />
      <Stack.Screen name="Movielist" component={MovieListScreen} />
      <Stack.Screen name="Movieseason" component={MovieSeasonScreen} />
    </Stack.Navigator>
  );
};

// const App = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);

//   return (
//     <NavigationContainer>
      
//       {false ? <AppNavigator /> : <LoginScreen/>}
     
       
//     </NavigationContainer>
//   );
// };

export default AppNavigator;
