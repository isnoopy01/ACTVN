import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../../../ScreensName';
import HomeScreen from '../../../../screens/authenticated/home/homeScreen';
import SearchInfo from '../../../../screens/authenticated/searchInfo/searchInfo';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
      name={Screens.HomeScreen} 
      component={HomeScreen} 
      options={{ headerShown: false }}
      />
      <Stack.Screen 
      name={Screens.SearchInfo} 
      component={SearchInfo} 
      options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;