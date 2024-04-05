import { Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import IonIcon from 'react-native-vector-icons/Ionicons';
import { sizes } from '../../constants/theme';

const SignInAnother = ({navigation}) => {
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
          paddingTop: 30,
        }}>
          <Text style={styles.content2}>Đăng nhập với tài khoản email của Học viện (Office365)</Text>
        </View>

        <View style={styles.btnSignAnother}>
          <TouchableOpacity>
            <View>
              <Text style={styles.btnText}>Đăng nhập</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnAnother}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.textBottom}>Đăng nhập bằng hình thức khác</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default SignInAnother;