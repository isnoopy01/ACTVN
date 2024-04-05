import HomeScreen from "../screen/home/homeScreen";
import ScheduleScreen from "../screen/schedule/scheduleScreen";
import NewsScreen from "../screen/news/newsScreen";
import ChatScreen from "../screen/Chat/chatScreen";
import Setting from "../screen/setting/settingScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
}
export default MyTabs;