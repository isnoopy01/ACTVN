import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '../../../assets/icons/icon';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../../../assets/images/image';
// import styles from './styles';
// import DetailStatus from './detailStatus/detailStatus';

const NewsScreen = ({navigation}: {navigation: any}) => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      avatar: 'https://via.placeholder.com/50',
      name: 'Học viện Kỹ thuật Mật mã',
      time: '17 giờ',
      content: 'Hello cả nhà',
      image: 'https://via.placeholder.com/300',
      likes: 16800,
      comments: [
        { id: '1', user: 'Người A', content: 'Hài hước ghê!' },
        { id: '2', user: 'Người B', content: 'Đúng quá!' },
      ],
    },
    {
      id: '2',
      avatar: 'https://via.placeholder.com/50',
      name: 'Học viện Kỹ thuật Mật mã',
      time: '1 ngày',
      content: 'Chào buổi sáng!',
      image: 'https://via.placeholder.com/300',
      likes: 16800,
      comments: [
        { id: '1', user: 'Người A', content: 'Hài hước ghê!' },
        { id: '2', user: 'Người B', content: 'Đúng quá!' },
      ],
    },
  ]);
  const renderPost = ({item}) => (
    <View style={styles.posts}>
      <View style={styles.informationCreate}>
        <View style={styles.infoCreator}>
          <Image style={styles.avaStatus} source={{ uri: item.avatar }} />
          <View style={styles.textInfo}>
            <Text style={styles.nameCreator}>{item.name}</Text>
            <Text style={styles.timeCreate}>{item.time}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image style={styles.buttonFunction} source={Icon.MenuHorizontal} />
        </TouchableOpacity>
      </View>
      <View style={styles.Status}>
        <Text style={styles.contentStatus}>{item.content}</Text>
      </View>
      {item.image && <Image source={{ uri: item.image }} style={styles.postImage} />}
      {/* <Image style={styles.postImage} source={{ uri: item.image }} /> */}
      <View style={styles.interact}>
        <View style={styles.like}>
          <Image style={styles.iconLike} source={Icon.Like} />
          <Text style={styles.numberLike}> {item.likes} Thích</Text>
        </View>
        <TouchableOpacity style={styles.comment} onPress={() => navigation.navigate('DetailStatus', { post: item })} >
          <Image style={styles.iconComment} source={Icon.Comment} />
          <Text style={styles.numberComment}>Bình luận</Text>
        </TouchableOpacity>
        <View style={styles.share}>
          <Image style={styles.iconShare} source={Icon.Share} />
          <Text style={styles.numberShare}>Chia sẻ</Text>
        </View>
      </View>
    </View>
  );

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
        <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsScreen;
