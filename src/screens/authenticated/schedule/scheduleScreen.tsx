import {Text, View, StyleSheet, Image, TouchableOpacity, Pressable, Modal, ScrollView, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
// import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import RBSheet from 'react-native-raw-bottom-sheet';
import TopTab from './topTab';
import BottomFiller from './bottomFiller';
import {Calendar, LocaleConfig} from 'react-native-calendars';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Icon} from '../../../assets/icons/icon';

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
const ScheduleScreen = () => {
  const refFilter = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  // const Tab = createMaterialTopTabNavigator();
  const [selected, setSelected] = useState('');
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed); // Đảo ngược trạng thái
  };

  
  const [selectedDate, setSelectedDate] = useState('2024-10-27');

  // Dữ liệu về thời khóa biểu
  const schedule = [
    {
      id: '1',
      timeStart: '12:30',
      timeEnd: '14:55',
      subject: 'Kỹ thuật lập trình an toàn',
      room: '304_TA2TA2',
      day: 'Chiều thứ 4',
      lesson: 'Tiết 7 - 9',
      code: 'ATATAP3_AT3CN-2-23',
      date: '2024-10-13', // Ngày có lịch học
    },
    {
      id: '1',
      timeStart: '12:30',
      timeEnd: '14:55',
      subject: 'Kỹ thuật lập trình an toàn',
      room: '304_TA2TA2',
      day: 'Chiều thứ 4',
      lesson: 'Tiết 7 - 9',
      code: 'ATATAP3_AT3CN-2-23',
      date: '2024-10-20', // Ngày có lịch học
    },
    {
      id: '1',
      timeStart: '12:30',
      timeEnd: '14:55',
      subject: 'Kỹ thuật lập trình an toàn',
      room: '304_TA2TA2',
      day: 'Chiều thứ 4',
      lesson: 'Tiết 7 - 9',
      code: 'ATATAP3_AT3CN-2-23',
      date: '2024-10-27', // Ngày có lịch học
    },
    // Bạn có thể thêm các lịch khác vào đây
  ];
  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };
  const getMarkedDates = () => {
    const marked = {
      '2024-10-27': {
        marked: true,
        dotColor: selectedDate === '2024-10-27' ? 'white' : 'red', // Đổi màu chấm khi được chọn
        selectedColor: selectedDate === '2024-10-27' ? 'red' : undefined, // Màu nền khi được chọn
        selected: selectedDate === '2024-10-27',
        textColor: selectedDate === '2024-10-27' ? 'white' : 'black', // Đổi màu chữ
      },
      '2024-10-13': {
        marked: true,
        dotColor: selectedDate === '2024-10-13' ? 'white' : 'red',
        selectedColor: selectedDate === '2024-10-13' ? 'red' : undefined,
        selected: selectedDate === '2024-10-13',
        textColor: selectedDate === '2024-10-13' ? 'white' : 'black',
      },
      '2024-10-20': {
        marked: true,
        dotColor: selectedDate === '2024-10-20' ? 'white' : 'red',
        selectedColor: selectedDate === '2024-10-20' ? 'red' : undefined,
        selected: selectedDate === '2024-10-20',
        textColor: selectedDate === '2024-10-20' ? 'white' : 'black',
      },
    };

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

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[
      styles.scheduleItem,
      selectedDate === item.date ? styles.selectedScheduleItem : null
    ]}>
      <View style={styles.scheduleTime}>
        <Text>{item.timeStart}</Text>
        <Text>|</Text>
        <Text>{item.timeEnd}</Text>
      </View>
      <View style={styles.scheduleDetails}>
        <Text style={styles.subjectText}>
          {item.code} ({item.subject})
        </Text>
        <Text>{`${item.day}, ${item.lesson}, ${item.room}`}</Text>
      </View>
      {/* <Ionicons name="chevron-forward-outline" size={24} color="black" /> */}
    </TouchableOpacity>
  );
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
              <TouchableOpacity
                style={[
                  styles.frameSemester,
                  {borderColor: isPressed ? '#A7A7A7' : '#CF0016',
                  },
                ]}
                onPress={handlePress}>
                <Text style={[styles.semester, {color: isPressed ? '#000000' : '#CF0016'}]}>2024/2</Text>
              </TouchableOpacity>
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
        onDayPress={onDayPress} // Sự kiện khi chọn ngày
        markedDates={getMarkedDates()} // Gán dữ liệu đánh dấu ngày
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
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.noEventsText}>Không có lịch học.</Text>
        }

      />
    </SafeAreaView>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 20,
  },
  iconHeader: {
    width: 25,
    height: 25,
  },
  textHeaders: {
    flexDirection: 'row',
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444444',
  },
  textSchedule: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444444',
  },



  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: 'rgba(0 0 0 / 0.4)',
  },
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    height: '40%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#CF0016',
  },
  titleModal: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  iconClose: {
    width: 30,
    height: 30,
  },
  frameSemester: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 20,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#A7A7A7'
  },
  semester: {
    fontSize: 15,
    fontWeight: '600'
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  calendar: {
    // height: 350,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  eventItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  eventTime: {
    fontSize: 14,
    color: '#5B5B5B',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  eventLocation: {
    fontSize: 14,
    color: '#5B5B5B',
  },
  noEventsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
  

  // container: {
  //   flex: 1,
  //   backgroundColor: '#F5F5F5',
  // },
  scheduleItem: {
    backgroundColor: '#f0f0f0',
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  selectedScheduleItem: {
    backgroundColor: '#FFD3D3',
    
  },
  scheduleTime: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scheduleDetails: {
    flex: 1,
  },
  subjectText: {
    fontSize: 16,
    marginBottom: 5,
  },
  
});


