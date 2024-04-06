import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header1}>
            <Image style={{ width: 37, height: 37 }} source = {require('../../img/avatar.png')}/>
            <View style={styles.info}>
                <View style={styles.names}>
                    <Text style={styles.name}>Mai Thị Quỳnh</Text>
                    <Text style={styles.codeStudent}>AT170341</Text>
                </View>
                <Text style={styles.major}>An toàn thông tin</Text>
            </View>
        </View>
        <View>
            <Image style={{ width: 30, height: 30 }}  source = {require('../../img/bell.png')}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
