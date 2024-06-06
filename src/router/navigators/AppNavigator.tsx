import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../ScreensName';
import AuthencatedNavigator from './authencated/authencatedNavigator';
import AuthenticationNavigatior from './authencation/AuthenticationNavigatior';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.AuthenticationNavigator}
        component={AuthenticationNavigatior}
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
