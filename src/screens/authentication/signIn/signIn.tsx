import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {sizes} from '../../../constants/theme';
import {images} from '../../../assets/images/image';
import {Screens} from '../../../router/ScreensName';
import axios from 'axios';

const LOGIN_API = 'https://api-kma.zoffice.vn/edu/v1/auth/login';
const SignIn = ({navigation}: {navigation: any}) => {
  // const inputAccessoryViewID = 'uniqueID';
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const response = await axios.post(LOGIN_API, {
        username: userName,
        password: password,
      });
      if (!!response && response.status === 200) {
        navigation.navigate(Screens.AuthenticatedNavigator);
      }
    } catch (error) {
      console.log('errr', error);
    }
  };
  const [text, setText] = useState('');
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
              placeholder={'Mật khẩu'}
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
