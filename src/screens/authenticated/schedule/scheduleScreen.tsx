import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import RBSheet from 'react-native-raw-bottom-sheet';
import TopTab from './topTab';
import BottomFiller from './bottomFiller';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Icon} from '../../../assets/icons/icon';
import {schedule} from '../../../repositories/schedule';

const ScheduleScreen = () => {
  const refFilter = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  // const Tab = createMaterialTopTabNavigator();
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
          <Text style={styles.textSchedule}>- 2024/2</Text>
        </View>
        <Pressable onPress={() => setModalVisible(true)}>
          <Image style={styles.iconHeader} source={Icon.Filter} />
        </Pressable>
      </View>
      {/* <BottomFiller/> */}
      <Modal
        animationType="slide"
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

      <TopTab />
    </SafeAreaView>
  );
};

export default ScheduleScreen;
