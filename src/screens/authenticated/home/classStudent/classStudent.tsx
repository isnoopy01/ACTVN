import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Icon} from '../../../../assets/icons/icon';
import {images} from '../../../../assets/images/image';
// import SearchBar from 'react-native-search-bar';

const ClassStudent = ({navigation}: {navigation: any}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Icon.ArrowLeft} />
        </TouchableOpacity>
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Thông tin lớp sinh viên</Text>
        </View>
        <Image style={styles.iconHeader} source={Icon.FilterWhite} />
      </View>
      <View style={styles.informationClass}>
        <View style={styles.infoGeneral}>
          <Text style={styles.class}>AT17CP</Text>
          <View style={styles.subsystems}>
            <Text style={styles.textSubsystem}>Hệ: </Text>
            <Text style={styles.infoSubsystems}>Kỹ sư chính quy</Text>
          </View>
        </View>
        <View style={styles.infoPerson}>
          <View style={styles.classMonitor}>
            <Text style={styles.textMonitor}>Lớp trưởng:</Text>
            <Text style={styles.infoMonitor}>N/A</Text>
          </View>
          <View style={styles.classSecretary}>
            <Text style={styles.textSecretary}>Bí thư:</Text>
            <Text style={styles.infoSecretary}>N/A</Text>
          </View>
          <View style={styles.classManage}>
            <Text style={styles.textManage}>GV quản lý lớp:</Text>
            <Text style={styles.infoManage}>N/A</Text>
          </View>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.textStudent}>Danh sách sinh viên </Text>
        <Text style={styles.numberStudent}>(7)</Text>
      </View>
      <View>
        <View style={styles.infoListStudent}>
          <View style={styles.infoListS}>
            <Image style={styles.avatarStudent} source={images.Avatar} />
            <View style={styles.infoTextS}>
              <Text style={styles.nameStudent}>Nguyễn Hồng Đức</Text>
              <Text style={styles.msvStudent}>AT170310</Text>
            </View>
          </View>
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
                  <Text style={styles.titleModal}>Thông tin</Text>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Image style={styles.iconClose} source={Icon.Close} />
                  </Pressable>
                </View>
                <View>
                  <View style={styles.frameInfo}>
                    <View style={styles.information}>
                      <View style={styles.name}>
                        <Text style={styles.headerName}>Họ và tên</Text>
                        <Text style={styles.fullname}>Mai Thị Quỳnh</Text>
                      </View>
                      <View style={styles.msv}>
                        <Text style={styles.textMsv}>Mã sinh viên</Text>
                        <Text style={styles.codeStudent}>AT170341</Text>
                      </View>
                      <View style={styles.personalEmail}>
                        <Text style={styles.textPersonal}>Email cá nhân</Text>
                        <Text
                          ellipsizeMode="tail"
                          numberOfLines={1}
                          style={styles.infoPersonal}>
                          maiquynhanhhh1302@gmail.com
                        </Text>
                      </View>
                      <View style={styles.phones}>
                        <Text style={styles.textPhones}>Số điện thoại</Text>
                        <Text style={styles.infoPhone}>0337645566</Text>
                      </View>
                      <View style={styles.majors}>
                        <Text style={styles.textMajors}>Phòng/Khoa</Text>
                        <Text style={styles.infoMajors}>An toàn thông tin</Text>
                      </View>
                      <View style={styles.subsys}>
                        <Text style={styles.textSubsys}>Hệ</Text>
                        <Text style={styles.infoSubsys}>Kỹ sư chính quy</Text>
                      </View>
                      <View style={styles.class_end}>
                        <Text style={styles.textClass}>Lớp</Text>
                        <Text style={styles.infoClass}>AT17C</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Modal>

          <Pressable
            style={styles.frameButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonDetail}>Chi tiết</Text>
          </Pressable>
          {/* <View>
            <TouchableOpacity
              style={styles.frameButton}
              onPress={() => {
                setShowModal(!showModal);
              }}>
              <Text style={styles.buttonDetail}>Chi tiết</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ClassStudent;
