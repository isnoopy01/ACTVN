import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '../../../assets/icons/icon';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../../../assets/images/image';
// import styles from './styles';

const NewsScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={styles.header}>
        <Image style={styles.iconHeader} source={Icon.FilterWhite} />
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Tin tức</Text>
        </View>
        <Image style={styles.iconHeader} source={Icon.FilterWhite} />
      </View>
      <ScrollView>
        <TouchableOpacity
          style={styles.createNews}
          onPress={() => navigation.navigate('CreateNews')}>
          <View style={styles.newsStart}>
            <Image style={styles.avt} source={images.Avatar} />
            <Text style={styles.textNews}>Bạn đang nghĩ gì?</Text>
          </View>
          <Image style={styles.imageNews} source={images.ImageNews} />
        </TouchableOpacity>
        <View>
          <View style={styles.posts}>
            <View style={styles.informationCreate}>
              <View style={styles.infoCreator}>
                <Image style={styles.avaStatus} source={images.ACT} />
                <View style={styles.textInfo}>
                  <Text style={styles.nameCreator}>
                    Học viện Kỹ thuật mật mã
                  </Text>
                  <Text style={styles.timeCreate}>17 giờ</Text>
                </View>
              </View>
              <Image
                style={styles.buttonFunction}
                source={Icon.MenuHorizontal}
              />
            </View>
            <View style={styles.Status}>
              <Text style={styles.contentStatus}>Hello ca nha</Text>
            </View>
            <Image source={images.Tin_tuc} />
            <View style={styles.interact}>
              <View style={styles.like}>
                <Image style={styles.iconLike} source={Icon.Like} />
                <Text style={styles.numberLike}>Thích</Text>
              </View>
              <View style={styles.comment}>
                <Image style={styles.iconComment} source={Icon.Comment} />
                <Text style={styles.numberComment}>Bình luận</Text>
              </View>
              <View style={styles.share}>
                <Image style={styles.iconShare} source={Icon.Share} />
                <Text style={styles.numberShare}>Chia sẻ</Text>
              </View>
            </View>
          </View>
          <View style={styles.posts}>
            <View style={styles.informationCreate}>
              <View style={styles.infoCreator}>
                <Image style={styles.avaStatus} source={images.ACT} />
                <View style={styles.textInfo}>
                  <Text style={styles.nameCreator}>
                    Học viện Kỹ thuật mật mã
                  </Text>
                  <Text style={styles.timeCreate}>17 giờ</Text>
                </View>
              </View>
              <Image
                style={styles.buttonFunction}
                source={Icon.MenuHorizontal}
              />
            </View>
            <View style={styles.Status}>
              <Text style={styles.contentStatus}>Hello ca nha</Text>
            </View>
            <Image source={images.Tin_tuc} />
            <View style={styles.interact}>
              <View style={styles.like}>
                <Image style={styles.iconLike} source={Icon.Like} />
                <Text style={styles.numberLike}>Thích</Text>
              </View>
              <View style={styles.comment}>
                <Image style={styles.iconComment} source={Icon.Comment} />
                <Text style={styles.numberComment}>Bình luận</Text>
              </View>
              <View style={styles.share}>
                <Image style={styles.iconShare} source={Icon.Share} />
                <Text style={styles.numberShare}>Chia sẻ</Text>
              </View>
            </View>
          </View>
          <View style={styles.posts}>
            <View style={styles.informationCreate}>
              <View style={styles.infoCreator}>
                <Image style={styles.avaStatus} source={images.ACT} />
                <View style={styles.textInfo}>
                  <Text style={styles.nameCreator}>
                    Học viện Kỹ thuật mật mã
                  </Text>
                  <Text style={styles.timeCreate}>17 giờ</Text>
                </View>
              </View>
              <Image
                style={styles.buttonFunction}
                source={Icon.MenuHorizontal}
              />
            </View>
            <View style={styles.Status}>
              <Text style={styles.contentStatus}>Hello ca nha</Text>
            </View>
            <Image source={images.Tin_tuc} />
            <View style={styles.interact}>
              <View style={styles.like}>
                <Image style={styles.iconLike} source={Icon.Like} />
                <Text style={styles.numberLike}>Thích</Text>
              </View>
              <View style={styles.comment}>
                <Image style={styles.iconComment} source={Icon.Comment} />
                <Text style={styles.numberComment}>Bình luận</Text>
              </View>
              <View style={styles.share}>
                <Image style={styles.iconShare} source={Icon.Share} />
                <Text style={styles.numberShare}>Chia sẻ</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsScreen;
