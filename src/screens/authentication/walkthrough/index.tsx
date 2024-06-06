import React from 'react';
import {View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {images} from '../../../assets/images/image';
import {sizes, COLORS} from '../../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '../../../router/ScreensName';
const slides = [
  {
    id: 1,
    title: 'Kết nối tri thức, Tra cứu thuận tiện',
    description:
      'Tìm kiếm thông tin giảng viên, sinh viên một cách nhanh chóng và hiệu quả!',
    image: images.Slide1,
  },
  {
    id: 2,
    title: 'Đồng hành học vụ, liên tục hiệu quả',
    description:
      'Quản lý, thông báo lịch dạy, lịch học giúp bạn chủ động về thời gian mang lại trải nghiệm học tập hiệu quả!',
    image: images.Slide2,
  },
  {
    id: 3,
    title: 'Thắp sáng ý tưởng, trò chuyện nhanh chóng',
    description: 'Gửi tin nhắn trực tuyến, kết nối sinh viên và giảng viên.',
    image: images.Slide3,
  },
  {
    id: 4,
    title: 'Nắm bắt thông tin, mở rộng kiến thức',
    description:
      'Dễ dàng nắm bắt tin tức, thông tin nổi bật của Học viện, tạo môi trường học tập trở nên đa dạng và thú vị.',
    image: images.Slide4,
  },
];

export const Walkthrough = () => {
  const navigation = useNavigation();
  return (
    <AppIntroSlider
      data={slides}
      renderItem={({item}) => {
        return (
          <View
            style={{
              flex: 1,
              padding: 34,
              paddingTop: 70,
            }}>
            <Image
              source={item.image}
              style={{
                width: sizes.width - 80,
                height: 400,
                alignItems: 'center',
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                textAlign: 'left',
                fontWeight: 'bold',
                color: COLORS.title,
                fontSize: sizes.h1,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                textAlign: 'left',
                paddingTop: 15,
                color: COLORS.title,
              }}>
              {item.description}
            </Text>
          </View>
        );
      }}
      activeDotStyle={{
        backgroundColor: COLORS.primary,
        width: 30,
        alignItems: 'stretch',
      }}
      showSkipButton
      renderNextButton={() => buttonLabel('Tiếp theo')}
      renderSkipButton={() => buttonLabel('Trở lại')}
      renderDoneButton={() => buttonLabel('Bắt đầu')}
      onDone={() => {
        navigation.navigate(Screens.SignIn as never);
      }}
    />
  );
};

const buttonLabel = (label: String) => {
  return (
    <View
      style={{
        padding: 12,
      }}>
      <Text
        style={{
          color: COLORS.title,
          fontWeight: '500',
          fontSize: sizes.h4,
        }}>
        {label}
      </Text>
    </View>
  );
};
