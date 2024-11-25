import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '../../../../assets/icons/icon';
import {images} from '../../../../assets/images/image';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const DetailStatus = ({route}) => {
  const {post} = route.params;
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState('');
  const navigation = useNavigation();

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments(prev => [
        ...prev,
        {id: String(prev.length + 1), user: 'Bạn', content: newComment},
      ]);
      setNewComment('');
    }
  };

  const renderComment = ({item}) => (
    <View style={styles.comment}>
      <Text style={styles.user}>{item.user}</Text>
      <Text>{item.content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Nội dung bài viết */}
      <View style={styles.postDetails}>
        <View style={styles.informationCreate}>
          <View style={styles.information}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.iconHeader} source={Icon.ArrowLeft} />
            </TouchableOpacity>
            <View style={styles.infoCreator}>
              <Image style={styles.avaStatus} source={{uri: post.avatar}} />
              <View style={styles.textInfo}>
                <Text style={styles.nameCreator}>{post.name}</Text>
                <Text style={styles.timeCreate}>{post.time}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Image style={styles.buttonFunction} source={Icon.MenuHorizontal} />
          </TouchableOpacity>
        </View>
        <View style={styles.Status}>
          <Text style={styles.contentStatus}>{post.content}</Text>
        </View>
        {post.image && (
          <Image style={styles.postImage} source={{uri: post.image}} />
        )}
        {/* <Image style={styles.postImage} source={{ uri: item.image }} /> */}
        <View style={styles.interact}>
          <View style={styles.like}>
            <Image style={styles.iconLike} source={Icon.Like} />
            <Text style={styles.numberLike}> {post.likes} Thích</Text>
          </View>
          <View style={styles.comment}>
            <Image style={styles.iconComment} source={Icon.Comment} />
            <Text style={styles.numberComment}>
              {comments.length} Bình luận
            </Text>
          </View>
          <View style={styles.share}>
            <Image style={styles.iconShare} source={Icon.Share} />
            <Text style={styles.numberShare}>Chia sẻ</Text>
          </View>
        </View>
      </View>

      {/* Danh sách bình luận */}
      <FlatList
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.commentItem}>
            {post.image && (
              <Image style={styles.avaStatus} source={{uri: post.avatar}} />
            )}
            <View style={styles.infoPersonComment}>
              <Text style={styles.commentUser}>{item.user}</Text>
              <Text style={styles.commentText}>{item.content}</Text>
            </View>
          </View>
        )}
        ListHeaderComponent={() => (
          <Text style={styles.commentText}>Bình luận</Text>
        )}
      />

      {/* Ô nhập bình luận */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Viết bình luận..."
          value={newComment}
          onChangeText={setNewComment}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddComment} style={styles.button}>
          <Text>Gửi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailStatus;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  postDetails: {borderBottomWidth: 1, borderBottomColor: '#ddd'},
  content: {fontSize: 16, marginBottom: 8},
  commentList: {flex: 1, padding: 16},
  comment: {marginBottom: 8},
  user: {fontWeight: 'bold'},
  commentItem: {
    flexDirection: 'row',
    marginBottom: 12,
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
    alignItems: 'flex-start'
  },
  commentUser: {fontWeight: 'bold'},
  commentText: {fontSize: 14},
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 8,
  },
  button: {marginLeft: 8, alignItems: 'center', justifyContent: 'center'},
  posts: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 4,
  },
  informationCreate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 5,
  },
  information: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoCreator: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInfo: {
    marginLeft: 10,
  },
  nameCreator: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '600',
  },
  timeCreate: {
    fontSize: 12,
    color: '#797979',
    marginTop: 4,
  },
  buttonFunction: {
    width: 20,
    height: 20,
  },
  Status: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  contentStatus: {
    fontSize: 14,
    color: '#000000',
  },
  interact: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLike: {
    width: 24,
    height: 24,
  },
  numberLike: {
    fontSize: 13,
    color: '#444444',
    marginLeft: 5,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconComment: {
    width: 24,
    height: 24,
  },
  numberComment: {
    fontSize: 13,
    color: '#444444',
    marginLeft: 5,
  },
  share: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconShare: {
    width: 24,
    height: 24,
  },
  numberShare: {
    fontSize: 13,
    color: '#444444',
    marginLeft: 5,
  },

  postImage: {
    width: '100%',
    height: 200,
    // borderRadius: 8,
    marginBottom: 8,
  },
  iconHeader: {
    width: 25,
    height: 25,
  },
  avaStatus: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  infoPersonComment: {
    flexDirection: 'column',
    marginLeft: 10
  },
});
