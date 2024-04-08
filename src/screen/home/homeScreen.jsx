import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchInfo from './searchInfo/searchInfo';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={styles.container}>
        <View style={styles.header1}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../../img/avatar.png')}
          />
          <View style={styles.info}>
            <View style={styles.names}>
              <Text style={styles.name}>Mai Thị Quỳnh</Text>
              <Text style={styles.line}>|</Text>
              <Text style={styles.codeStudent}>AT170341</Text>
            </View>
            <Text style={styles.major}>An toàn thông tin</Text>
          </View>
        </View>
        <View>
          <Image
            style={{width: 30, height: 30}}
            source={require('../../img/bell.png')}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          padding: 10,
        }}>
        <Image style={styles.banner} source={require('../../img/banner.png')} />
      </View>
      <View>
        <View style={styles.textComponent}>
          <Text style={styles.component}>Tiện ích</Text>
        </View>
        <View>
          <View style={styles.items}>
            <TouchableOpacity onPress={() => navigation.navigate('SearchInfo')}>
              <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require('../../img/tra-cuu-thong-tin.png')}
              />
              <Text style={styles.textItem}>Tra cứu thông tin</Text>
              </View>
            </TouchableOpacity >
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require('../../img/ket-qua-hoc-tap.png')}
              />
              <Text style={styles.textItem}>Kết quả học tập</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require('../../img/lop-sinh-vien.png')}
              />
              <Text style={styles.textItem}>Lớp sinh viên</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require('../../img/dang-ky-do-an.png')}
              />
              <Text style={styles.textItem}>Đăng ký đồ án</Text>
            </View>
          </View>
          <View style={styles.items}>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require('../../img/dang-ky-chuyen-de.png')}
              />
              <Text style={styles.textItem}>Đăng ký chuyên đề</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require('../../img/dang-ky-thuc-tap.png')}
              />
              <Text style={styles.textItem}>Đăng ký thực tập</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require('../../img/tien-ich.png')}
              />
              <Text style={styles.textItem}>Tiện ích</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require('../../img/bieu-mau-online.png')}
              />
              <Text style={styles.textItem}>Biểu mẫu online</Text>
            </View>
          </View>
          <View style={styles.items}>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require('../../img/cau-hoi.png')}
              />
              <Text style={styles.textItem}>Câu hỏi</Text>
            </View>

          </View>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
