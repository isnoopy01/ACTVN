import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../../ScreensName';
import {Icon} from '../../../assets/icons/icon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './home-stack/homeStack';
import ScheduleScreen from '../../../screens/authenticated/schedule/scheduleScreen';
import NewsScreen from '../../../screens/authenticated/news/newsScreen';
import ChatScreen from '../../../screens/authenticated/Chat/chatScreen';
import Setting from '../../../screens/authenticated/setting/settingScreen';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#CF0016',
        tabBarInactiveTintColor: '#555555',
        tabBarStyle: {
          padding: 10,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.25,
          shadowRadius: 8.84,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBar}>
              <Image
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#CF0016' : '#555555',
                }}
                source={Icon.Home}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  fontWeight: '400',
                  color: focused ? '#CF0016' : '#555555',
                }}>
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Lịch học"
        component={ScheduleScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBar}>
              <Image
                style={{width: 24, height: 24}}
                source={focused ? Icon.Schedule : Icon.Schedule1}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  fontWeight: '400',
                  color: focused ? '#CF0016' : '#555555',
                }}>
                Lịch học
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tin tức"
        component={NewsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBar}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  top: -50,
                  position: 'absolute',
                }}
                source={focused ? Icon.News : Icon.News1}
                resizeMode="contain"
              />
              <Text
                style={{
                  top: 15,
                  fontSize: 12,
                  fontWeight: '400',
                  color: focused ? '#CF0016' : '#555555',
                }}>
                Tin tức
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Nhắn tin"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBar}>
              <Image
                style={{width: 24, height: 24}}
                source={focused ? Icon.Chat : Icon.Chat1}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  fontWeight: '400',
                  color: focused ? '#CF0016' : '#555555',
                }}>
                Nhắn tin
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cài đặt"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBar}>
              <Image
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#CF0016' : '#555555',
                }}
                source={Icon.Setting}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  fontWeight: '400',
                  color: focused ? '#CF0016' : '#555555',
                }}>
                Cài đặt
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AuthencatedNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen
            name={Screens.BottomTabNavigator}
            component={BottomTabNavigator}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  );
};

export default AuthencatedNavigator;

const styles = StyleSheet.create({
  tabBar: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
  },
});
