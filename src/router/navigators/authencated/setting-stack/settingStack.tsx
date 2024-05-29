import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../../../ScreensName';
import SettingScreen from '../../../../screens/authenticated/setting/settingScreen';
// import FeatureInfo from '../../../../screens/authenticated/featureInfo/featureInfo';

const Stack = createStackNavigator();
const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={Screens.SettingScreen}
        component={SettingScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name={Screens.FeatureInfo}
        component={FeatureInfo}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default SettingStack;
