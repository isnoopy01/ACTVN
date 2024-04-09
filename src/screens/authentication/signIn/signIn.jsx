import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { sizes } from '../../../constants/theme';

// import { TextInput } from 'react-native-gesture-handler'

const SignIn = ({navigation}) => {
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [text, setText] = useState(initialText);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('../../img/logo-act.png')}
          style={{
            alignItems: 'center',
            padding: 34,
            paddingTop: 90
          }} />
        <Text style={styles.textTop}>ACT OFFICE</Text>
        <View style={{
          flexDirection: 'row',
          paddingTop: 30
        }}>
          <Text style={styles.content1}>Đăng nhập</Text>
          <Text style={styles.content2}> với tài khoản QLĐT</Text>
        </View>
        <View style={styles.dataContainer}>
          <TextInput style={styles.textInput}
            onChangeText={setText}
            value={text}
            placeholder={'Nhập tài khoản'}
          />
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: sizes.width - 60,
          }}>
            <TextInput style={styles.textInput}
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
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPwd')}>
            <View>
              <Text style={styles.textForgot}>Quên mật khẩu?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnSignin}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <View>
              <Text style={styles.btnText}>Đăng nhập</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.frameLine}>
          <View style={styles.line1} />
          <View>
            <Text style={styles.textLine}>Hoặc đăng nhập với</Text>
          </View>
          <View style={styles.line1} />
        </View>
        <View style={styles.btnOffice}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInAnother')}>
            <Image source={require('../../img/office.png')}
              style={{
                alignItems: 'center',
              }} />
          </TouchableOpacity>
          <Text style={styles.textBottom}>Office365</Text>
        </View>
        {/* <View style={styles.frameForgot}>
          <TouchableOpacity>
              <Text style={styles.btnForgot}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View> */}



      </View>

    </View>
  )
}

export default SignIn;

