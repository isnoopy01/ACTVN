import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../../../ScreensName';
import HomeScreen from '../../../../screens/authenticated/home/homeScreen';
import HomeScreenTeacher from '../../../../screens/authenticated/home/homeScreenTeacher';
// import SearchInfo from '../../../../screens/authenticated/searchInfo/searchInfo';
// import StudyResult from '../../../../screens/authenticated/studyResult/studyResult';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const HomeStack = () => {
  const [role, setRole] = React.useState('');
  const getRole = async () => {
    try {
      const role = await AsyncStorage.getItem('role');
      return role;
    } catch (error) {
      return '';
    }
  };

  getRole().then(res => setRole(res ? res : 'student'));
  return role === 'student' ? (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={Screens.HomeScreen}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name={Screens.StudyResult}
        component={StudyResult}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeScreenTeacher"
        component={HomeScreenTeacher}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name={Screens.StudyResult}
        component={StudyResult}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
