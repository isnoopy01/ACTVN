import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../ScreensName';
import AuthencatedNavigator from './authencated/authencatedNavigator';
import AuthenticationNavigator from './authencated/authencatedNavigator';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.AuthenticationNavigator}
        component={AuthenticationNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.AuthenticatedNavigator}
        component={AuthencatedNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
