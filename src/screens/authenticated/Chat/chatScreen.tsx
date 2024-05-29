import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

import styles from './styles';
import {Icon} from '../../../assets/icons/icon';
import {images} from '../../../assets/images/image';

const DATA = [
  {
    id: '1',
    image: images.Avatar_online,
    title: 'Hường',
  },
  {
    id: '2',
    image: images.Avatar_online,
    title: 'Quỳnh',
  },
  {
    id: '3',
    image: images.Avatar_online,
    title: 'Toàn',
  },
  {
    id: '4',
    image: images.Avatar_online,
    title: 'Hường',
  },
  {
    id: '5',
    image: images.Avatar_online,
    title: 'Hường',
  },
  {
    id: '6',
    image: images.Avatar_online,
    title: 'Hường',
  },
  {
    id: '7',
    image: images.Avatar_online,
    title: 'Hường',
  },
];

const Item = ({title, image, id}) => (
  <View key={id} style={styles.item}>
    <ImageBackground style={styles.image} source={image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const SettingScreen = ({navigation}: {navigation: any}) => {
  const initialText = '';
  const [text, setText] = useState(initialText);
  const renderItem = ({item}) => (
    <Item id={item.id} image={item.image} title={item.title} />
  );
  // const scrollToIndex = () => {
  //   console.log('scroll to index called !');
  //   let index = 3;
  //   ref.current.scrollToIndex({animated: true, index: index});
  // };

  // useFocusEffect(
  //   useCallback(() => {
  //     scrollToIndex();
  //   }, []),
  // );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Đoạn chat</Text>
        </View>
        <TouchableOpacity>
          <Image style={styles.iconHeader} source={Icon.AddGroup} />
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <View style={styles.searchBar}>
          <Image style={styles.iconSearch} source={Icon.Search} />
          <TextInput
            style={styles.textSearch}
            onChangeText={setText}
            value={text}
            placeholder={'Tìm kiếm'}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            paddingTop: 20,
            paddingRight: 20,
          }}
        />
      </View>
      <View style={styles.listChat}>
        <TouchableOpacity
          style={styles.chat}
          onPress={() => navigation.navigate('DetailChat')}>
          <View style={styles.chatPerson}>
            <Image style={styles.avt} source={images.Avatar_online} />
            <View style={styles.infoPerson}>
              <Text style={styles.namePerson}>Nguyễn Văn An</Text>
              <View style={styles.content}>
                <Text style={styles.contentChat}>Xin chào</Text>
                <Text style={styles.timeChat}>07:00</Text>
              </View>
            </View>
          </View>
          <Image style={styles.onloff} source={images.Avatar} />
        </TouchableOpacity>
        <View style={styles.chat}>
          <View style={styles.chatPerson}>
            <Image style={styles.avt} source={images.Avatar_online} />
            <View style={styles.infoPerson}>
              <Text style={styles.namePerson}>Nguyễn Văn An</Text>
              <View style={styles.content}>
                <Text style={styles.contentChat}>Xin chào</Text>
                <Text style={styles.timeChat}>07:00</Text>
              </View>
            </View>
          </View>
          <Image style={styles.onloff} source={images.Avatar} />
        </View>
        <View style={styles.chat}>
          <View style={styles.chatPerson}>
            <Image style={styles.avt} source={images.Avatar_online} />
            <View style={styles.infoPerson}>
              <Text style={styles.namePerson}>Nguyễn Văn An</Text>
              <View style={styles.content}>
                <Text style={styles.contentChat}>Xin chào</Text>
                <Text style={styles.timeChat}>07:00</Text>
              </View>
            </View>
          </View>
          <Image style={styles.onloff} source={images.Avatar} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
