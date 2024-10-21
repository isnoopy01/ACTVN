import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../../../assets/images/image';
import {Icon} from '../../../assets/icons/icon';
// import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.containers}>
      <View style={styles.container}>
        <View style={styles.header1}>
          <Image style={{width: 40, height: 40}} source={images.Avatar} />
          <View style={styles.info}>
            <View style={styles.names}>
              <Text style={styles.name}>Trần Anh Tú</Text>
              <Text style={styles.line}>|</Text>
              <Text style={styles.codeStudent}>GVAT01</Text>
            </View>
            <Text style={styles.major}>An toàn thông tin</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image style={styles.iconBell} source={Icon.Bell} />
        </TouchableOpacity>
      </View>
      <View
        // colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.frameBanner}>
        {/* <View>
          <View>
            <Text style={styles.headerBanner}>Xin chào</Text>
            <Text style={styles.textBanner}>
              Chào mừng bạn đến với ACT Office.
            </Text>
          </View>
          <View>
            <Image style={styles.imgBanner} source={images.StudentHome} />
          </View>
        </View> */}
        <Image style={styles.banner} source={images.BannerTeacher} />
      </View>
      <View>
        <View style={styles.textComponent}>
          <Text style={styles.component}>Tiện ích</Text>
        </View>
        <View>
          <View style={styles.items}>
            <TouchableOpacity onPress={() => navigation.navigate('SearchInfo')}>
              <View style={styles.item}>
                <Image style={styles.itemImage} source={images.SearchInfo} />
                <Text style={styles.textItem}>Tra cứu thông tin</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterProject')}>
              <View style={styles.item}>
                <Image
                  style={styles.itemImage}
                  source={images.RegisterProject}
                />
                <Text style={styles.textItem}>Đề tài đồ án</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterTopic')}>
              <View style={styles.item}>
                <Image style={styles.itemImage} source={images.RegisterTopic} />
                <Text style={styles.textItem}>Đề tài chuyên đề</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.item}>
              <Image style={styles.itemImage} source={images.Utilities} />
              <Text style={styles.textItem}>Tiện ích</Text>
            </View>
          </View>
          <View style={styles.items}>
            <View style={styles.item}>
              <Image style={styles.itemImage} source={images.FormOnline} />
              <Text style={styles.textItem}>Biểu mẫu online</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Questions')}>
              <View style={styles.item}>
                <Image style={styles.itemImage} source={images.Questions} />
                <Text style={styles.textItem}>Câu hỏi</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.item}>
              <Image style={styles.itemImage} source={images.IconWhite} />   
            </View>
            <View style={styles.item}>
              <Image style={styles.itemImage} source={images.IconWhite} />   
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
