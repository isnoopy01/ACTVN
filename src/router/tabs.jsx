import HomeScreen from "../screen/home/homeScreen";
import ScheduleScreen from "../screen/schedule/scheduleScreen";
import NewsScreen from "../screen/news/newsScreen";
import ChatScreen from "../screen/Chat/chatScreen";
import Setting from "../screen/setting/settingScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "../component/Image";
import { Image, View, VStack, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#CF0016',
        tabBarInactiveTintColor: '#555555',
        tabBarStyle: {
          padding: 10,
          alignItems: 'center', 
        },
        
      }}>
      <Tab.Screen name="Trang chủ" component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBar}>
              <Image
                style={{ width: 24, height: 24, tintColor: focused ? '#CF0016' : '#555555' }}
                source={require('../img/home.png')}
                resizeMode="contain" />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  fontWeight: '400',
                  color: focused ? '#CF0016' : '#555555'
                }}>Trang chủ</Text>
            </View>
          ),
        }} />
      <Tab.Screen name="Lịch học" component={ScheduleScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBar}>
              <Image style={{ width: 24, height: 24 }} source={focused ? Icon.Schedule : Icon.Schedule1} />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  fontWeight: '400',
                  color: focused ? '#CF0016' : '#555555'
                }}>Lịch học</Text>
            </View>

          ),
        }} />
      <Tab.Screen name="Tin tức" component={NewsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBar}>
              <Image
                style={{ 
                  width: 60, 
                  height: 60, 
                  top: -50 , 
                  position: 'absolute', }}
                source={focused ? Icon.News : Icon.News1}
                resizeMode="contain" />
              <Text
                style={{
                  top: 15,
                  fontSize: 12,
                  fontWeight: '400',
                  color: focused ? '#CF0016' : '#555555'
                }}>Tin tức</Text>
            </View>
          ),
        }} />
      <Tab.Screen name="Nhắn tin" component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBar}>
              <Image style={{ width: 24, height: 24 }} source={focused ? Icon.Chat : Icon.Chat1} />
              <Text
              style={{
                fontSize: 12,
                marginTop: 5,
                fontWeight: '400',
                color: focused ? '#CF0016' : '#555555'
              }}>Nhắn tin</Text>
            </View>
          ),
        }} />
      <Tab.Screen name="Cài đặt" component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBar}>
              <Image
                style={{ width: 24, height: 24, tintColor: focused ? '#CF0016' : '#555555' }}
                source={require('../img/setting.png')}
                resizeMode="contain" />
                <Text
              style={{
                fontSize: 12,
                marginTop: 5,
                fontWeight: '400',
                color: focused ? '#CF0016' : '#555555'
              }}>Cài đặt</Text>
            </View>
          ),
        }} />
    </Tab.Navigator>
  );
}
export default MyTabs;

const styles = StyleSheet.create({
  tabBar: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 5
  }
});