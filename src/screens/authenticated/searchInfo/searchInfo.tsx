import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import React, {useState, useMemo} from 'react';
import styles from './styles';
import {Icon} from '../../../assets/icons/icon';
import {images} from '../../../assets/images/image';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

// import SearchBar from 'react-native-search-bar';

const SearchInfo = ({navigation}: {navigation: any}) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const [searchQuery, setSearchQuery] = React.useState;
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1',
        label: 'GV',
        value: 'GV',
        borderColor: '#CF0016',
        color: '#CF0016',
      },
      {
        id: '2',
        label: 'SV',
        value: 'SV',
        borderColor: '#CF0016',
        color: '#CF0016',
      },
      {
        id: '3',
        label: 'Học phần',
        value: 'Học phần',
        borderColor: '#CF0016',
        color: '#CF0016',
      },
      {
        id: '4',
        label: 'Lớp',
        value: 'Lớp',
        borderColor: '#CF0016',
        color: '#CF0016',
      },
    ],
    [],
  );
  const data = [{id: '1', name: 'Mai Thị Quỳnh', code: 'AT170341', type: 'GV'}];

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const initialText = '';
  const [text, setText] = useState(initialText);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Icon.ArrowLeft} />
        </TouchableOpacity>
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Tra cứu thông tin</Text>
        </View>
        <Image style={styles.iconHeader} source={Icon.FilterWhite} />
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
        <View style={styles.optionButton}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
            // circleStyle={{fillColor: 'pink', borderColor: 'cyan'}}
            labelStyle={{
              fontWeight: '600',
            }}
          />
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.textTitle}>1 </Text>
        <Text style={styles.numberStudent}>kết quả</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({}) => (
          <View style={styles.infoListStudent}>
            <View style={styles.infoListS}>
              <Image style={styles.avatarStudent} source={images.Avatar} />
              <View style={styles.infoTextS}>
                <Text style={styles.nameStudent}>Nguyễn Hồng Đức</Text>
                <Text style={styles.msvStudent}>AT170310</Text>
              </View>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.headerModal}>
                    <Text style={styles.titleModal}>Thông tin</Text>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <Image style={styles.iconClose} source={Icon.Close} />
                    </Pressable>
                  </View>
                  <View>
                    <View style={styles.frameInfo}>
                      <View style={styles.information}>
                        <View style={styles.name}>
                          <Text style={styles.headerName}>Họ và tên</Text>
                          <Text style={styles.fullname}>Mai Thị Quỳnh</Text>
                        </View>
                        <View style={styles.msv}>
                          <Text style={styles.textMsv}>Mã sinh viên</Text>
                          <Text style={styles.codeStudent}>AT170341</Text>
                        </View>
                        <View style={styles.personalEmail}>
                          <Text style={styles.textPersonal}>Email cá nhân</Text>
                          <Text
                            ellipsizeMode="tail"
                            numberOfLines={1}
                            style={styles.infoPersonal}>
                            maiquynhanhhh1302@gmail.com
                          </Text>
                        </View>
                        <View style={styles.phones}>
                          <Text style={styles.textPhones}>Số điện thoại</Text>
                          <Text style={styles.infoPhone}>0337645566</Text>
                        </View>
                        <View style={styles.majors}>
                          <Text style={styles.textMajors}>Phòng/Khoa</Text>
                          <Text style={styles.infoMajors}>
                            An toàn thông tin
                          </Text>
                        </View>
                        <View style={styles.subsys}>
                          <Text style={styles.textSubsys}>Hệ</Text>
                          <Text style={styles.infoSubsys}>Kỹ sư chính quy</Text>
                        </View>
                        <View style={styles.class_end}>
                          <Text style={styles.textClass}>Lớp</Text>
                          <Text style={styles.infoClass}>AT17C</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
            <Pressable
              style={styles.frameButton}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonDetail}>Chi tiết</Text>
            </Pressable>
            {/* <View>
              <TouchableOpacity style={styles.frameButton}>
                <Text style={styles.buttonDetail}>Chi tiết</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default SearchInfo;
