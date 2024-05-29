import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from '../../../../assets/icons/icon';
import {images} from '../../../../assets/images/image';

const Notification = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Icon.ArrowLeft} />
        </TouchableOpacity>
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Thông báo</Text>
        </View>
        <Image style={styles.iconHeader} source={Icon.FilterWhite} />
      </View>
      <ScrollView>
        <View style={styles.itemNoti}>
          <Image style={styles.avatarUser} source={images.Logo} />
          <View style={styles.content}>
            <Text style={styles.title}>Môn kiến trúc máy tính và hợp ngữ</Text>
            <Text style={styles.description}>
              Đã có điểm môn Kiến trúc máy tính và hợp ngữ
            </Text>
            <Text style={styles.timeNoti}>12:05 09/05/2024</Text>
          </View>
          <Image style={styles.iconShowNoti} source={Icon.ListRed} />
        </View>
        <View style={styles.itemNoti}>
          <Image style={styles.avatarUser} source={images.Logo} />
          <View style={styles.content}>
            <Text style={styles.title}>Môn kiến trúc máy tính và hợp ngữ</Text>
            <Text style={styles.description}>
              Đã có điểm môn Kiến trúc máy tính và hợp ngữ
            </Text>
            <Text style={styles.timeNoti}>12:05 09/05/2024</Text>
          </View>
          <Image style={styles.iconShowNoti} source={Icon.ListRed} />
        </View>
        <View style={styles.itemNoti}>
          <Image style={styles.avatarUser} source={images.Logo} />
          <View style={styles.content}>
            <Text style={styles.title}>Môn kiến trúc máy tính và hợp ngữ</Text>
            <Text style={styles.description}>
              Đã có điểm môn Kiến trúc máy tính và hợp ngữ
            </Text>
            <Text style={styles.timeNoti}>12:05 09/05/2024</Text>
          </View>
          <Image style={styles.iconShowNoti} source={Icon.ListRed} />
        </View>
        <View style={styles.itemNoti}>
          <Image style={styles.avatarUser} source={images.Logo} />
          <View style={styles.content}>
            <Text style={styles.title}>Môn kiến trúc máy tính và hợp ngữ</Text>
            <Text style={styles.description}>
              Đã có điểm môn Kiến trúc máy tính và hợp ngữ
            </Text>
            <Text style={styles.timeNoti}>12:05 09/05/2024</Text>
          </View>
          <Image style={styles.iconShowNoti} source={Icon.ListRed} />
        </View>
        <View style={styles.itemNoti}>
          <Image style={styles.avatarUser} source={images.Logo} />
          <View style={styles.content}>
            <Text style={styles.title}>Môn kiến trúc máy tính và hợp ngữ</Text>
            <Text style={styles.description}>
              Đã có điểm môn Kiến trúc máy tính và hợp ngữ
            </Text>
            <Text style={styles.timeNoti}>12:05 09/05/2024</Text>
          </View>
          <Image style={styles.iconShowNoti} source={Icon.ListRed} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
