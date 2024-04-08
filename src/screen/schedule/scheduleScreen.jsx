import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopTab from './topTab';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const ScheduleScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={styles.header}>
        <Image
          style={styles.iconHeader}
          source={require('../../img/filters-white.png')}
        />
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Thời khoá biểu </Text>
          <Text style={styles.textSchedule}>- 2023/2</Text>
        </View>
        <Image
          style={styles.iconHeader}
          source={require('../../img/filters.png')}
        />
      </View>

      <TopTab />
    </SafeAreaView>
  );
};

export default ScheduleScreen;
