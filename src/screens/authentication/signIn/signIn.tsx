import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {sizes} from '../../../constants/theme';
import {images} from '../../../assets/images/image';
import {Screens} from '../../../router/ScreensName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ALERT_TYPE, Dialog, Toast} from 'react-native-alert-notification';
import {signInUser} from '../../../repositories/auth';
const SignIn = ({navigation}: {navigation: any}) => {
  // const inputAccessoryViewID = 'uniqueID';
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const response = await signInUser({
        username: userName,
        password: password,
      });
      if (response.alert) {
        await AsyncStorage.setItem('access_token', response.data.access_token);
        await AsyncStorage.setItem(
          'refresh_token',
          response.data.refresh_token,
        );
        await AsyncStorage.setItem('info', JSON.stringify(response.data.info));
        await AsyncStorage.setItem('role', response.data.role);
        Toast.show({
          autoClose: 1500,
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: 'Đăng nhập thành công',
        });
        navigation.navigate(Screens.AuthenticatedNavigator);
      } else {
        Toast.show({
          type: ALERT_TYPE.DANGER,
          textBody: response.message,
        });
      }
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Lỗi hệ thống',
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={images.LogoACT} style={styles.logoAct} />
        <Text style={styles.textTop}>ACT OFFICE</Text>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 30,
          }}>
          <Text style={styles.content1}>Đăng nhập</Text>
          <Text style={styles.content2}> với tài khoản QLĐT</Text>
        </View>
        <View style={styles.dataContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={e => setUserName(e)}
            value={userName}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder={'Nhập tài khoản'}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: sizes.width - 60,
            }}>
            <TextInput
              style={styles.textInput}
              onChangeText={e => setPassword(e)}
              value={password}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder={'Mật khẩu'}
              secureTextEntry
            />
          </View>
        </View>
        {/* <Button
          title="Đăng nhập"
          color="#f194ff"

        /> */}
        <View style={styles.btnForgot}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPwd');
            }}>
            <View>
              <Text style={styles.textForgot}>Quên mật khẩu?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={login} style={styles.btnSignin}>
          <View>
            <Text style={styles.btnText}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.frameLine}>
          <View style={styles.line1} />
          <View>
            <Text style={styles.textLine}>Hoặc đăng nhập với</Text>
          </View>
          <View style={styles.line1} />
        </View>
        <View style={styles.btnOffice}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignInAnother')}>
            <Image
              source={images.Office}
              style={{
                alignItems: 'center',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.textBottom}>Office365</Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
