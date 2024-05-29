import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from '../../../assets/icons/icon';
// import SearchBar from 'react-native-search-bar';

const FeatureInfo = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Icon.ArrowLeft} />
        </TouchableOpacity>
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Thông tin sinh viên</Text>
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
          <Text style={styles.nameSetting}>Mai Thị Quỳnh</Text>
          <View style={styles.phone}>
            <Text style={styles.textNumber}>SĐT: </Text>
            <Text style={styles.number}>0337645566</Text>
          </View>
          <View style={styles.email}>
            <Text style={styles.textEmail}>Email: </Text>
            <Text style={styles.addEmail}>at170341@actvn.edu.vn</Text>
          </View>
        </View>
        <View />
      </View>
      <View style={styles.frames}>
        <View style={styles.frameInfo}>
          <Text style={styles.textTitle}>Thông tin</Text>
          <View style={styles.information}>
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
            <View style={styles.subsystems}>
              <Text style={styles.textSubsystem}>Hệ</Text>
              <Text style={styles.infoSubsystems}>Kỹ sư chính quy</Text>
            </View>
            <View style={styles.class}>
              <Text style={styles.textClass}>Lớp</Text>
              <Text style={styles.infoClass}>AT17C</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FeatureInfo;
