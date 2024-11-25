import {
  Text,
  View,
  SafeAreaView,
  Image,
  Switch,
  TouchableOpacity,
  Pressable,
  Modal,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Icon} from '../../../assets/icons/icon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Screens} from '../../../router/ScreensName';

const SettingScreen = ({navigation}: {navigation: any}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const signOut = async () => {
    await AsyncStorage.clear();
    setModalVisible(false);
    navigation.navigate(Screens.AuthenticationNavigator);
  };

  const [studentInfo, setStudentInfo] = React.useState({
    name: '',
    phone: '',
    email: '',
  });
  const getStudentInfo = async () => {
    try {
      const fullName = await AsyncStorage.getItem('info');
      return fullName;
    } catch (error) {
      return '';
    }
  };

  getStudentInfo().then(res => setStudentInfo(res ? JSON.parse(res) : ''));
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.iconHeader} source={Icon.FilterWhite} />
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Cài đặt</Text>
        </View>
        <Image style={styles.iconHeader} source={Icon.FilterWhite} />
      </View>
      <View style={styles.info}>
        <View>
          <Image
            style={styles.avatarSetting}
            source={require('../../../assets/images/avatar-setting.png')}
          />
        </View>
        <View style={styles.textInfo}>
          <Text style={styles.nameSetting}>{studentInfo.name}</Text>
          <View style={styles.phone}>
            <Text style={styles.textNumber}>SĐT: </Text>
            <Text style={styles.number}>{studentInfo.phone}</Text>
          </View>
          <View style={styles.email}>
            <Text style={styles.textEmail}>Email: </Text>
            <Text style={styles.addEmail}>{studentInfo.email}</Text>
          </View>
        </View>
        <View />
      </View>
      <View style={styles.featureSetting}>
        <TouchableOpacity
          style={styles.feature}
          onPress={() => navigation.navigate('FeatureInfo')}>
          <View style={styles.infoFeature}>
            <Image style={styles.iconstart} source={Icon.InfoSetting} />
            <Text style={styles.textFeature}>Thông tin sinh viên</Text>
          </View>
          <Image style={styles.iconend} source={Icon.ChevronRight} />
        </TouchableOpacity>
        <View style={styles.feature}>
          <View style={styles.infoFeature}>
            <Image style={styles.iconstart} source={Icon.ForgotPass} />
            <Text style={styles.textFeature}>Đổi mật khẩu</Text>
          </View>
          <Image style={styles.iconend} source={Icon.ChevronRight} />
        </View>
        <View style={styles.feature}>
          <View style={styles.infoFeature}>
            <Image style={styles.iconstart} source={Icon.ForgotPass} />
            <Text style={styles.textFeature}>Hoạt động của bạn</Text>
          </View>
          <Image style={styles.iconend} source={Icon.ChevronRight} />
        </View>
        <View style={styles.feature}>
          <View style={styles.infoFeature}>
            <Image style={styles.iconstart} source={Icon.FaceID} />
            <Text style={styles.textFeature}>Đăng nhập bằng FaceID</Text>
          </View>
          <Switch
            trackColor={{false: '#FFFFFF', true: '#CF0016'}}
            thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
            ios_backgroundColor="#FFFFFF"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Pressable style={styles.feature} onPress={() => setModalVisible(true)}>
          <View style={styles.infoFeature}>
            <Image style={styles.iconstart} source={Icon.LogOut} />
            <Text style={styles.textFeature}>Đăng xuất</Text>
          </View>
        </Pressable>
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
                <Image style={styles.iconClose} source={Icon.CloseWhite} />
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Image style={styles.iconClose} source={Icon.Close} />
                </Pressable>
              </View>
              <View style={styles.headerModal1}>
                <Image style={styles.iconClose} source={Icon.CloseWhite} />
                <Text style={styles.titleModal}>Thông báo</Text>
                <Image style={styles.iconClose} source={Icon.CloseWhite} />
              </View>
              <View style={styles.framecontentNoti}>
                <Text style={styles.contentNoti}>
                  Bạn có chắc chắn muốn đăng xuất khỏi tài khoản?
                </Text>
              </View>
              <View style={styles.buttonLogout}>
                <TouchableOpacity style={styles.buttonCancel}>
                  <Text style={styles.textButtonCancel}>Huỷ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonConfirm}
                  onPress={signOut}>
                  <Text style={styles.textButtonConfirm}>Đồng ý</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
