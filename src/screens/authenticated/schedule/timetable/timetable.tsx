import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {getSchedule} from '../../../../repositories/schedule';

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
  var today = moment().format('YYYY-MM-DD');
  const [selectedDate, setSelectedDate] = useState(today);
  const [schedule, setSchedule] = useState([]);
  const scheduleStudent = async () => {
    const response = await getSchedule();
    setSchedule(response.data);
  };

  useEffect(() => {
    scheduleStudent();
  }, []);

  const onDayPress = day => {
    setSelectedDate(day.dateString);
  };
  const getMarkedDates = (schedule: any, selectedDate: string) => {
    const marked = {};
    schedule.filter((item: any) => {
      marked[item.date] = {
        marked: true,
        dotColor: selectedDate === item.date ? 'white' : 'red', // Đổi màu chấm khi được chọn
        selectedColor: selectedDate === item.date ? 'red' : undefined, // Màu nền khi được chọn
        selected: selectedDate === item.date,
        textColor: selectedDate === item.date ? 'white' : 'black', // Đổi màu chữ
      };
    });
    // Đánh dấu ngày mới được chọn với màu nền đỏ và chữ trắng
    if (selectedDate && !marked[selectedDate]) {
      marked[selectedDate] = {
        selected: true,
        selectedColor: 'red',
        textColor: 'white',
      };
    }

    return marked;
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.scheduleItem,
        selectedDate === item.date ? styles.selectedScheduleItem : null,
      ]}>
      <View style={styles.scheduleTime}>
        <Text style={{fontSize: 13, color: '#000000'}}>{item.timeStart}</Text>
        <Text>|</Text>
        <Text style={{fontSize: 13, color: '#000000'}}>{item.timeEnd}</Text>
      </View>
      <View style={styles.scheduleDetails}>
        <Text style={styles.subjectText}>
          {item.code} ({item.subject})
        </Text>
        <Text>{`${item.lesson}, ${item.room}`}</Text>
      </View>
      {/* <Ionicons name="chevron-forward-outline" size={24} color="black" /> */}
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        onDayPress={onDayPress} // Sự kiện khi chọn ngày
        markedDates={getMarkedDates(schedule, selectedDate)} // Gán dữ liệu đánh dấu ngày
        theme={{
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
        }}
      />
      <FlatList
        data={schedule.filter(item => item.date === selectedDate)} // Lọc lịch theo ngày được chọn
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={styles.noEventsText}>Không có lịch học.</Text>
        }
      />
    </SafeAreaView>
  );
};

export default TimeTable;
