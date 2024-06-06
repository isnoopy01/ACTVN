import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../../ScreensName';
import SignIn from '../../../screens/authentication/signIn/signIn';
import {Walkthrough} from '../../../screens/authentication/walkthrough';

export const AuthenticationNavigatior = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Walkthrough}
        component={Walkthrough}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.SignIn}
        component={SignIn}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name={Screens.SignInAnother}
        component={SignInAnother}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name={Screens.ForgotPwd}
        component={ForgotPwd}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthenticationNavigatior;
