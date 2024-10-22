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
import {searchUser, detailUser} from '../../../repositories/user';
// import SearchBar from 'react-native-search-bar';

const SearchInfo = ({navigation}: {navigation: any}) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const [selectId, setSelectedId] = useState('');
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
  // const data = [{id: '1', name: 'Mai Thị Quỳnh', code: 'AT170341', type: 'GV'}];
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const initialText = '';
  const [text, setText] = useState(initialText);
  const [dataInfo, setDataInfo] = useState({});
  const handleClientIDInput = async (text: string) => {
    setText(text);
    if (text.length > 0) {
      const response = await searchUser({text: text});
      setData(response.data);
    } else {
      setData([]);
    }
  };

  const onPressDetailUser = async (id: string) => {
    const response = await detailUser({id: id});
    setDataInfo(response.data);
  };
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
            onChangeText={handleClientIDInput}
            value={text}
            placeholder={'Tìm kiếm'}
          />
        </View>
        {/* <View style={styles.optionButton}>
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
        </View> */}
      </View>
      <View style={styles.title}>
        <Text style={styles.textTitle}>{data.length} </Text>
        <Text style={styles.numberStudent}>kết quả</Text>
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
                    <Text style={styles.fullname}>{dataInfo.name}</Text>
                  </View>
                  <View style={styles.msv}>
                    <Text style={styles.textMsv}>Mã sinh viên</Text>
                    <Text style={styles.codeStudent}>{dataInfo.code}</Text>
                  </View>
                  <View style={styles.personalEmail}>
                    <Text style={styles.textPersonal}>Email cá nhân</Text>
                    <Text
                      ellipsizeMode="tail"
                      numberOfLines={1}
                      style={styles.infoPersonal}></Text>
                  </View>
                  <View style={styles.phones}>
                    <Text style={styles.textPhones}>Số điện thoại</Text>
                    <Text style={styles.infoPhone}>{dataInfo.phone}</Text>
                  </View>
                  <View style={styles.majors}>
                    <Text style={styles.textMajors}>Phòng/Khoa</Text>
                    <Text style={styles.infoMajors}>{dataInfo.major}</Text>
                  </View>
                  <View style={styles.subsys}>
                    <Text style={styles.textSubsys}>Hệ</Text>
                    <Text style={styles.infoSubsys}>Kỹ sư chính quy</Text>
                  </View>
                  <View style={styles.class_end}>
                    <Text style={styles.textClass}>Lớp</Text>
                    <Text style={styles.infoClass}>{dataInfo.class}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.infoListStudent}>
            <View style={styles.infoListS}>
              <Image style={styles.avatarStudent} source={images.Avatar} />
              <View style={styles.infoTextS}>
                <Text style={styles.nameStudent}>{item.name || ''}</Text>
                <Text style={styles.msvStudent}>{item.code || ''}</Text>
              </View>
            </View>
            <Pressable
              style={styles.frameButton}
              onPress={() => {
                onPressDetailUser(item.id);
                setModalVisible(true);
              }}>
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
