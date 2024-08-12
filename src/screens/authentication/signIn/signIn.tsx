import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {sizes} from '../../../constants/theme';
import {images} from '../../../assets/images/image';
import {Screens} from '../../../router/ScreensName';

const SignIn = ({navigation}: {navigation: any}) => {
  // const inputAccessoryViewID = 'uniqueID';

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
            onChangeText={setText}
            value={text}
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
              onChangeText={setText}
              value={text}
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
        <TouchableOpacity
          onPress={() => navigation.navigate(Screens.AuthenticatedNavigator)}
          style={styles.btnSignin}>
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
