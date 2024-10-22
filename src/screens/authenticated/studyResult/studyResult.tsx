import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Icon} from '../../../assets/icons/icon';
// import SearchBar from 'react-native-search-bar';
import {listScore} from '../../../repositories/score';

const StudyResult = ({navigation}: {navigation: any}) => {
  const [result, setResult] = useState([]);
  const getScore = async () => {
    const response = await listScore();
    setResult(response.data);
  };
  useEffect(() => {
    getScore();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Icon.ArrowLeft} />
        </TouchableOpacity>
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Kết quả học tập </Text>
          <Text style={styles.textSchedule}></Text>
        </View>
        <Image style={styles.iconHeader} source={Icon.Filter} />
      </View>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Kết quả môn học</Text>
      </View>
      <View style={styles.allStudy}>
        {result.map((item, index) => (
          <View style={styles.framePoint}>
            <View>
              <Text style={styles.nameStudy}>{item.name}</Text>
              <View style={styles.TC}>
                <Text style={styles.textTC}>Số TC: </Text>
                <Text style={styles.numberTC}>{item.credit}</Text>
              </View>
              <View style={styles.codeClass}>
                <Text style={styles.textCode}>Mã môn: </Text>
                <Text style={styles.infoCode}>{item.code}</Text>
              </View>
            </View>
            <View style={styles.subjectScores}>
              <Text style={styles.testScore}>{item.score}</Text>
              <Text>/</Text>
              <Text style={styles.pointProcess}>{item.score}</Text>
            </View>
            <View />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default StudyResult;
