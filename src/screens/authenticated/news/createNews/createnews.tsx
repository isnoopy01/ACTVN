import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import {Icon} from '../../../../assets/icons/icon';
import {images} from '../../../../assets/images/image';

const CreateNews = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.containers}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Icon.ArrowLeft} />
        </TouchableOpacity>
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Tạo bài viết</Text>
        </View>
        <TouchableOpacity style={styles.buttonCreate}>
          <Text style={styles.textCreate}>Đăng bài</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.createNews}>
        <View style={styles.infoUser}>
          <Image style={styles.avatar} source={images.Avatar} />
          <Text style={styles.nameUser}>Mai Quỳnh</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Bạn đang nghĩ gì?"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.textfooter}>Thêm vào bài viết</Text>
        </View>
        <View style={styles.addMultimedia}>
          <TouchableOpacity style={styles.frameImage}>
            <Image style={styles.addImage} source={Icon.AddImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.addEmotion} source={Icon.Emotion} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateNews;
