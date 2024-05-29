// import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TimeTable from './timetable/timetable';
import ClassList from './classList/classList';
import TestSchedule from './testSchedule/testSchedule';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#CF0016',
        tabBarInactiveTintColor: '#555555',
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
          textTransform: 'capitalize',
        },
      }}>
      <Tab.Screen name="Thời khoá biểu" component={TimeTable} />
      <Tab.Screen name="Danh sách lớp" component={ClassList} />
      <Tab.Screen name="Lịch thi" component={TestSchedule} />
    </Tab.Navigator>
  );
};
export default TopTab;
// const styles = StyleSheet.create({});
