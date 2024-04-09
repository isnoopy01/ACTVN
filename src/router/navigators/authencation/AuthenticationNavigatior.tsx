import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Screens } from "../../ScreensName";
import SignIn from "../../../screens/authentication/signIn/signIn";
import SignInAnother from "../../../screens/authentication/signInAnother/signInAnother";
import ForgotPwd from "../../../screens/authentication/forgotPwd/forgotPwd";

const AuthenticationNavigatior = () => {
    const Stack = createStackNavigator();
  
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.SignIn}
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screens.SignInAnother}
          component={SignInAnother}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name={Screens.ForgotPwd}
          component={ForgotPwd}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };
  
  export default AuthenticationNavigatior;