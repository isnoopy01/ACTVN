import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from '../../../../assets/icons/icon';
// import {Dropdown} from 'react-native-element-dropdown';
import {images} from '../../../../assets/images/image';
// import SearchBar from 'react-native-search-bar';

const Questions = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.containers}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Icon.ArrowLeft} />
        </TouchableOpacity>
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Câu hỏi</Text>
        </View>
        <Image style={styles.iconHeader} source={Icon.FilterWhite} />
      </View>
      <View style={styles.titleQuestion}>
        <View style={styles.questions}>
          <View style={styles.infoQuestion}>
            <Image style={styles.imageQuestion} source={images.Tuyen_sinh} />
            <Text style={styles.textQuestion}>Tuyển sinh</Text>
          </View>
          <Image style={styles.iconRight} source={Icon.ChevronRight} />
        </View>
        <View style={styles.questions}>
          <View style={styles.infoQuestion}>
            <Image style={styles.imageQuestion} source={images.Tuyen_sinh} />
            <Text style={styles.textQuestion}>Chương trình đào tạo</Text>
          </View>
          <Image style={styles.iconRight} source={Icon.ChevronRight} />
        </View>
        <View style={styles.questions}>
          <View style={styles.infoQuestion}>
            <Image style={styles.imageQuestion} source={images.Quy_che} />
            <Text style={styles.textQuestion}>
              Quy chế, tổ chức đào tạo, đánh giá và xếp hạn loại học lực
            </Text>
          </View>
          <Image style={styles.iconRight} source={Icon.ChevronRight} />
        </View>
        <View style={styles.questions}>
          <View style={styles.infoQuestion}>
            <Image style={styles.imageQuestion} source={images.Hoc_phi} />
            <Text style={styles.textQuestion}>
              Học phí và chế độ chính sách
            </Text>
          </View>
          <Image style={styles.iconRight} source={Icon.ChevronRight} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Questions;
