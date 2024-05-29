import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from '../../../../assets/icons/icon';

const scheduleData = [
  {id: '1', day: 'Chiều thứ 2', period: 'tiết 7 - 9', room: '304_TA2TA2'},
  {id: '2', day: 'Chiều thứ 2', period: 'tiết 7 - 9', room: '304_TA2TA2'},
  {id: '3', day: 'Chiều thứ 4', period: 'tiết 7 - 9', room: '304_TA2TA2'},
  {id: '4', day: 'Chiều thứ 4', period: 'tiết 7 - 9', room: '304_TA2TA2'},
  {id: '5', day: 'Chiều thứ 4', period: 'tiết 7 - 9', room: '304_TA2TA2'},
  {id: '6', day: 'Chiều thứ 6', period: 'tiết 7 - 9', room: '304_TA2TA2'},
];

const dateRanges = [
  '22/01/2024 - 28/01/2024',
  '19/02/2024 - 14/04/2024',
  '15/04/2024 - 21/04/2024',
  '22/01/2024 - 28/01/2024',
];

const ScheduleItem = ({
  day,
  period,
  room,
}: {
  day: any;
  period: any;
  room: any;
}) => (
  <View style={styles.itemContainer}>
    <Image style={styles.listRed} source={Icon.ListRed} />
    <Text style={styles.infoLocation}>{`${day}, ${period}, ${room}`}</Text>
  </View>
);

const DateRangeItem = ({dateRange}: {dateRange: any}) => (
  <View>
    <Text style={styles.dateRangeText}>{dateRange}</Text>
  </View>
);

const ClassList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.textTitle}>Các lớp trong học kỳ:</Text>
      </View>
      <ScrollView>
        <View style={styles.schedule}>
          <View style={styles.scheduleItem}>
            <View style={styles.infoSchedule}>
              <View>
                <Text style={styles.headerText}>
                  ATATAP3_AT3CN-2-23 (AT17 - Công nghệ 01) - Kỹ thuật lập trình
                  an toàn - ATATAP3
                </Text>
              </View>
              <View style={styles.Location}>
                <FlatList
                  data={scheduleData}
                  renderItem={({item}) => (
                    <ScheduleItem
                      day={item.day}
                      period={item.period}
                      room={item.room}
                    />
                  )}
                  keyExtractor={item => item.id}
                  scrollEnabled={false}
                />
              </View>
              <View style={styles.timeSchedule}>
                <Image style={styles.listYellow} source={Icon.ListYellow} />
                <View style={styles.dateRangesContainer}>
                  <Text style={styles.dateRangeHeader}>Tuần học:</Text>
                  {dateRanges.map((dateRange, index) => (
                    <DateRangeItem key={index} dateRange={dateRange} />
                  ))}
                </View>
              </View>
            </View>
            <Image style={styles.chevronRight} source={Icon.ChevronRight} />
          </View>
          <View style={styles.scheduleItem}>
            <View style={styles.infoSchedule}>
              <View>
                <Text style={styles.headerText}>
                  ATATAP3_AT3CN-2-23 (AT17 - Công nghệ 01) - Kỹ thuật lập trình
                  an toàn - ATATAP3
                </Text>
              </View>
              <View style={styles.Location}>
                <FlatList
                  data={scheduleData}
                  renderItem={({item}) => (
                    <ScheduleItem
                      day={item.day}
                      period={item.period}
                      room={item.room}
                    />
                  )}
                  keyExtractor={item => item.id}
                  scrollEnabled={false}
                />
              </View>
              <View style={styles.timeSchedule}>
                <Image style={styles.listYellow} source={Icon.ListYellow} />
                <View style={styles.dateRangesContainer}>
                  <Text style={styles.dateRangeHeader}>Tuần học:</Text>
                  {dateRanges.map((dateRange, index) => (
                    <DateRangeItem key={index} dateRange={dateRange} />
                  ))}
                </View>
              </View>
            </View>
            <Image style={styles.chevronRight} source={Icon.ChevronRight} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClassList;
