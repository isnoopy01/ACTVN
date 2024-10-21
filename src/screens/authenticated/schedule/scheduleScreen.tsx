import {Text, View, Image, TouchableOpacity, Pressable, Modal, ScrollView, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import RBSheet from 'react-native-raw-bottom-sheet';
import TopTab from './topTab';
import BottomFiller from './bottomFiller';
import {Calendar, LocaleConfig} from 'react-native-calendars';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Icon} from '../../../assets/icons/icon';

const ScheduleScreen = () => {
  const refFilter = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  // const Tab = createMaterialTopTabNavigator();
  const [selected, setSelected] = useState('');
  const events = {
    '2024-02-06': [
      {
        time: '12:30 - 14:55',
        title: 'Kỹ thuật lập trình an toàn',
        location: '304_TA2TA2',
      },
    ],
    '2024-02-20': [
      {
        time: '12:30 - 14:55',
        title: 'Kỹ thuật lập trình an toàn',
        location: '304_TA2TA2',
      },
    ],
    '2024-02-27': [
      {
        time: '12:30 - 14:55',
        title: 'Kỹ thuật lập trình an toàn',
        location: '304_TA2TA2',
      },
    ],
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={styles.header}>
        <Image style={styles.iconHeader} source={Icon.FilterWhite} />
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Thời khoá biểu </Text>
          <Text style={styles.textSchedule}>- 2023/2</Text>
        </View>
        <Pressable onPress={() => setModalVisible(true)}>
          <Image style={styles.iconHeader} source={Icon.Filter} />
        </Pressable>
      </View>
      {/* <BottomFiller/> */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerModal}>
              <Text style={styles.titleModal}>Chọn học kỳ</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.iconClose} source={Icon.CloseWhite} />
              </Pressable>
            </View>
            <ScrollView>
              <View style={styles.frameSemester}>
                <Text style={styles.semester}>2024/2</Text>
              </View>
              <View style={styles.frameSemester}>
                <Text style={styles.semester}>2024/2</Text>
              </View>
              <View style={styles.frameSemester}>
                <Text style={styles.semester}>2024/2</Text>
              </View>
              <View style={styles.frameSemester}>
                <Text style={styles.semester}>2024/2</Text>
              </View>
              <View style={styles.frameSemester}>
                <Text style={styles.semester}>2024/2</Text>
              </View>
              <View style={styles.frameSemester}>
                <Text style={styles.semester}>2024/2</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Calendar
        style={styles.calendar}
        current={selected}
        theme={{
          // backgroundColor: '#ffffff',
          // calendarBackground: '#ffffff',
          textSectionTitleColor: '#CF0016',
          textSectionTitleDisabledColor: '#DFDFDF',
          selectedDayBackgroundColor: '#CF0016',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#CF0016',
          dayTextColor: '#444444',
          textDisabledColor: '#DFDFDF',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: '#444444',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: '#444444',
          indicatorColor: 'blue',
          textDayFontFamily: 'roboto',
          textMonthFontFamily: 'roboto',
          textDayHeaderFontFamily: 'roboto',
          textDayFontWeight: '500',
          textMonthFontWeight: '600',
          textDayHeaderFontWeight: '600',
          textDayFontSize: 14,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 15,
          // todayTextColor: 'red',
          // selectedDayBackgroundColor: 'red',
          // arrowColor: 'red',
          // dotColor: 'red',
        }}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        // markedDates={markedDates}
        markedDates={{
          [selected]: {
            selected: true,
            marked: true,
            disableTouchEvent: true,
            dotColor: '#CF0016',
          },
        }}
      />
      <FlatList
        data={events[selected] || []}
        // marked: true,
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.eventItem}>
            <Text style={styles.eventTime}>{item.time}</Text>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventLocation}>{item.location}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noEventsText}>Không có lịch học.</Text>
        }
      />
    </SafeAreaView>
  );
};

export default ScheduleScreen;
