import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from '../../../assets/icons/icon';
// import SearchBar from 'react-native-search-bar';

const StudyResult = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Icon.ArrowLeft} />
        </TouchableOpacity>
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Thời khoá biểu </Text>
          <Text style={styles.textSchedule}>- 2023/2</Text>
        </View>
        <Image style={styles.iconHeader} source={Icon.Filter} />
      </View>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Các lớp trong học kỳ</Text>
      </View>
      <View style={styles.allStudy}>
        <View style={styles.framePoint}>
          <View>
            <Text style={styles.nameStudy}>
              Mật mã ứng dụng trong An toàn thông tin
            </Text>
            <View style={styles.TC}>
              <Text style={styles.textTC}>Số TC: </Text>
              <Text style={styles.numberTC}>3 (30-0-30)</Text>
            </View>
            <View style={styles.codeClass}>
              <Text style={styles.textCode}>Mã lớp: </Text>
              <Text style={styles.infoCode}>
                ATATKH4_AT3CN-2-23 (AT17 - Công nghệ01)
              </Text>
            </View>
          </View>
          <View style={styles.subjectScores}>
            <Text style={styles.testScore}>--</Text>
            <Text>/</Text>
            <Text style={styles.pointProcess}>--</Text>
          </View>
          <View />
        </View>
        <View style={styles.framePoint}>
          <View>
            <Text style={styles.nameStudy}>
              Mật mã ứng dụng trong An toàn thông tin
            </Text>
            <View style={styles.TC}>
              <Text style={styles.textTC}>Số TC: </Text>
              <Text style={styles.numberTC}>3 (30-0-30)</Text>
            </View>
            <View style={styles.codeClass}>
              <Text style={styles.textCode}>Mã lớp: </Text>
              <Text style={styles.infoCode}>
                ATATKH4_AT3CN-2-23 (AT17 - Công nghệ01)
              </Text>
            </View>
          </View>
          <View style={styles.subjectScores}>
            <Text style={styles.testScore}>--</Text>
            <Text>/</Text>
            <Text style={styles.pointProcess}>--</Text>
          </View>
          <View />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StudyResult;
