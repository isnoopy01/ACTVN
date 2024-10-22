import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../../ScreensName';
import {Icon} from '../../../assets/icons/icon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './home-stack/homeStack';
import SettingStack from './setting-stack/settingStack';
import ScheduleScreen from '../../../screens/authenticated/schedule/scheduleScreen';
import ScheduleScreenTeacher from '../../../screens/authenticated/schedule/scheduleScreenTeacher';
import NewsScreen from '../../../screens/authenticated/news/newsScreen';
import ChatScreen from '../../../screens/authenticated/Chat/chatScreen';
import SearchInfo from '../../../screens/authenticated/searchInfo/searchInfo';
import FeatureInfo from '../../../screens/authenticated/featureInfo/featureInfo';
import StudyResult from '../../../screens/authenticated/studyResult/studyResult';
import ClassStudent from '../../../screens/authenticated/home/classStudent/classStudent';
import RegisterProject from '../../../screens/authenticated/home/registerProject/registerProject';
import RegisterTopic from '../../../screens/authenticated/home/registerTopic/registerTopic';
import RegisterIntern from '../../../screens/authenticated/home/registerIntern.tsx/registerIntern';
import Questions from '../../../screens/authenticated/home/question/question';
import CreateNews from '../../../screens/authenticated/news/createNews/createnews';
import Notification from '../../../screens/authenticated/home/notification/notification';
import DetailChat from '../../../screens/authenticated/Chat/detailChat/detailChat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterProjectTeacher from '../../../screens/authenticated/home/registerProject/registerProjectTeacher';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#CF0016',
        tabBarInactiveTintColor: '#555555',
        tabBarStyle: {
          position: 'absolute',

          bottom: 0,
          width: '100%',
          paddingVertical: 10,
          paddingHorizontal: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 3,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
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
          headerShown: false,
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
          headerShown: false,
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
        component={SettingStack}
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

const BottomTabNavigatorTeacher = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#CF0016',
        tabBarInactiveTintColor: '#555555',
        tabBarStyle: {
          position: 'absolute',

          bottom: 0,
          width: '100%',
          paddingVertical: 10,
          paddingHorizontal: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 3,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
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
        name="Lịch"
        component={ScheduleScreenTeacher}
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
                  textAlign: 'center',
                  fontSize: 12,
                  marginTop: 5,
                  fontWeight: '400',
                  color: focused ? '#CF0016' : '#555555',
                }}>
                Lịch
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tin tức"
        component={NewsScreen}
        options={{
          headerShown: false,
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
          headerShown: false,
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
        component={SettingStack}
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
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.BottomTabNavigator}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.SearchInfo}
        component={SearchInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.FeatureInfo}
        component={FeatureInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.StudyResult}
        component={StudyResult}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.ClassStudent}
        component={ClassStudent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.RegisterProject}
        component={RegisterProject}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.RegisterTopic}
        component={RegisterTopic}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.RegisterIntern}
        component={RegisterIntern}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.Questions}
        component={Questions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.CreateNews}
        component={CreateNews}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.Notification}
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.DetailChat}
        component={DetailChat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNavigatorTeacher"
        component={BottomTabNavigatorTeacher}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.SearchInfo}
        component={SearchInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.FeatureInfo}
        component={FeatureInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.StudyResult}
        component={StudyResult}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.ClassStudent}
        component={ClassStudent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterProjectTeacher"
        component={RegisterProjectTeacher}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.RegisterTopic}
        component={RegisterTopic}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.RegisterIntern}
        component={RegisterIntern}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.Questions}
        component={Questions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.CreateNews}
        component={CreateNews}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.Notification}
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.DetailChat}
        component={DetailChat}
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
