import {SafeAreaView, FlatList, Text, View} from 'react-native';
import styles from './styles';
import React, {useState} from 'react';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales.vn = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthNamesShort: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  dayNames: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
  dayNamesShort: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  today: 'today',
};
LocaleConfig.defaultLocale = 'vn';

const TimeTable = () => {
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

  // const markedDates = {
  //   '2024-02-06': {marked: true},
  //   '2024-02-19': {marked: true},
  //   '2024-02-20': {selected: true, marked: true, selectedColor: 'red'},
  // };
  return (
    <SafeAreaView style={styles.container}>
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

export default TimeTable;

