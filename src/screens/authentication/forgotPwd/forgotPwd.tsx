import {Image, Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {sizes} from '../../../constants/theme';

const ForgotPwd = ({navigation}: {navigation: any}) => {
  const initialText = '';
  const [text, setText] = useState(initialText);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              justifyContent: 'flex-start',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                }}
                source={require('../../img/arrow-left.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <Text style={styles.textTop}>Quên mật khẩu</Text>
          </View>
          <View>
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../../img/arrow-right.png')}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            padding: 20,
          }}>
          <Image
            source={require('../../img/logo-act.png')}
            style={{
              alignItems: 'center',
              padding: 34,
              paddingTop: 90,
            }}
          />
          <Text style={styles.text}>ACT OFFICE</Text>
        </View>
        <View
          style={{
            padding: 10,
          }}>
          <Text style={styles.content2}>
            Bạn hãy nhập Email (của trường) hoặc MSSV (đối với Sinh viên) để lấy
            mật khẩu. Mật khảu mới sẽ được gửi về email của bạn.
          </Text>
        </View>
        <View style={styles.dataContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={setText}
            value={text}
            placeholder={'Nhập email hoặc MSSV'}
          />
        </View>
        <View style={styles.btnSignAnother}>
          <TouchableOpacity>
            <View>
              <Text style={styles.btnText}>Xác nhận</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPwd;
