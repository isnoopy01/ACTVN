import {View, Text, Image, TouchableOpacity, ScrollView, Modal, Pressable, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Icon} from '../../../../assets/icons/icon';
import { images } from '../../../../assets/images/image';
import {Dropdown} from 'react-native-element-dropdown';
// import {images} from '../../../../assets/images/image';
// import SearchBar from 'react-native-search-bar';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const RegisterTopic = ({navigation}: {navigation: any}) => {
  const [value, setValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const initialText = '';
  const [text, setText] = useState(initialText);

  const renderLabel = () => {
    // if (value || isFocus) {
    //   return (
    //     <Text style={[styles.label, isFocus && {color: '#CF0016'}]}>
    //       Chọn giảng viên
    //     </Text>
    //   );
    // }
    return null;
  };
  return (
    <SafeAreaView style={styles.containers}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.iconHeader} source={Icon.ArrowLeft} />
        </TouchableOpacity>
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Đăng ký chuyên đề</Text>
        </View>
        <Image style={styles.iconHeader} source={Icon.FilterWhite} />
      </View>
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: '#CF0016'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={250}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Chọn giảng viên' : '...'}
          searchPlaceholder="Tìm kiếm..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          //   renderLeftIcon={() => (
          //     <AntDesign
          //       style={styles.icon}
          //       color={isFocus ? 'blue' : 'black'}
          //       name="Safety"
          //       size={20}
          //     />
          //   )}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Danh sách đề tài</Text>
      </View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerModal}>
              <Image style={styles.iconWhite} source={Icon.FilterWhite} />
              <Text style={styles.titleModal}>Chi tiết đề tài</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.iconClose} source={Icon.Close} />
              </Pressable>
            </View>

            <ScrollView style={styles.frameInfo}>
              <View style={styles.information}>
                <View style={styles.time}>
                  <Text style={styles.headerTime}>Thời gian đăng ký: </Text>
                  <Text style={styles.timeRegisters}>
                    00:00 12/06/2024 - 23:59 14/06/2024
                  </Text>
                </View>
                <View style={styles.name}>
                  <Text style={styles.nameProject}>
                    Xây dựng ứng dụng mạng xã hội an toàn phục vụ cho công tác
                    kết nối, tương tác giữa sinh viên, giảng viên tại Học viện
                    Kỹ thuật mật mã
                  </Text>
                </View>
                <View>
                  <Text style={styles.headerItemPopup}>Mô tả</Text>
                  <View>
                    <Text style={styles.describeItem}>Chức năng</Text>
                    <View>
                      <Text style={styles.contentDescribe}>
                        - Gửi nhận thông báo {'\n'}- Trò chuyện trực tuyến{' '}
                        {'\n'}- Thăm dò, lấy ý kiến người học {'\n'}- Đăng ký Đồ
                        án, thực tập, chuyên đề {'\n'}- Theo dõi lịch học, lịch
                        thi {'\n'}- Trao đổi nhóm lớp, nhóm sinh viên {'\n'}-
                        Chia sẻ tài liệu
                      </Text>
                    </View>
                    <Text style={styles.describeItem}>
                      Đảm bảo các chức năng an toàn về xác thực, phân quyền,
                      chống lại các tấn công cơ bản
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.headerItemPopup}>Yêu cầu</Text>
                  <Text style={styles.contentRequest}>
                    - Gửi nhận thông báo {'\n'}- Trò chuyện trực tuyến {'\n'}-
                    Thăm dò, lấy ý kiến người học {'\n'}- Đăng ký Đồ án, thực
                    tập, chuyên đề {'\n'}- Theo dõi lịch học, lịch thi {'\n'}-
                    Trao đổi nhóm lớp, nhóm sinh viên {'\n'}- Chia sẻ tài liệu
                  </Text>
                </View>
                <View style={styles.Student}>
                  <Text style={styles.headerItemPopup}>
                    Số lượng sinh viên tham gia:
                  </Text>
                  <Text style={styles.numberStu}> 2</Text>
                </View>
                <View style={styles.Lecture}>
                  <Text style={styles.headerItemPopup}>
                    Giảng viên hướng dẫn:
                  </Text>
                  <Text style={styles.numberLeture}> Trần Anh Tú</Text>
                </View>
                <View>
                  <Text style={styles.headerItemPopup}>
                    Thông tin giảng viên
                  </Text>
                  <View>
                    <View style={styles.infoLeture}>
                      <Text style={styles.headerInfo}>- Khoa: </Text>
                      <Text style={styles.contents}>An Toàn thông tin</Text>
                    </View>
                    <View style={styles.infoLeture}>
                      <Text style={styles.headerInfo}>- Số điện thoại: </Text>
                      <Text style={styles.contents}>0367139457</Text>
                    </View>
                    <View style={styles.infoLeture}>
                      <Text style={styles.headerInfo}>- Email: </Text>
                      <Text style={styles.contents}>tutran@actvn.edu.vn</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalRegister}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalRegister(!modalRegister);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerModal}>
              <Image style={styles.iconWhite} source={Icon.FilterWhite} />
              <Text style={styles.titleModal}>Chọn sinh viên</Text>
              <Pressable onPress={() => setModalRegister(!modalRegister)}>
                <Image style={styles.iconClose} source={Icon.Close} />
              </Pressable>
            </View>
            <View style={styles.searchBar}>
              <Image style={styles.iconSearch} source={Icon.Search} />
              <TextInput
                style={styles.textSearch}
                onChangeText={setText}
                value={text}
                placeholder={'Tìm kiếm'}
              />
            </View>
            <ScrollView>
              <View style={styles.header1}>
                <Image style={{width: 40, height: 40}} source={images.Avatar} />
                <View style={styles.info}>
                  <View style={styles.names}>
                    <Text style={styles.nameS}>Trần Anh Tú</Text>
                    <Text style={styles.line}>|</Text>
                    <Text style={styles.codeStudent}>GVAT01</Text>
                  </View>
                </View>
              </View>
              <View style={styles.header1}>
                <Image style={{width: 40, height: 40}} source={images.Avatar} />
                <View style={styles.info}>
                  <View style={styles.names}>
                    <Text style={styles.nameS}>Trần Anh Tú</Text>
                    <Text style={styles.line}>|</Text>
                    <Text style={styles.codeStudent}>GVAT01</Text>
                  </View>
                </View>
              </View>
              <View style={styles.header1}>
                <Image style={{width: 40, height: 40}} source={images.Avatar} />
                <View style={styles.info}>
                  <View style={styles.names}>
                    <Text style={styles.nameS}>Trần Anh Tú</Text>
                    <Text style={styles.line}>|</Text>
                    <Text style={styles.codeStudent}>GVAT01</Text>
                  </View>
                </View>
              </View>
              <View style={styles.header1}>
                <Image style={{width: 40, height: 40}} source={images.Avatar} />
                <View style={styles.info}>
                  <View style={styles.names}>
                    <Text style={styles.nameS}>Trần Anh Tú</Text>
                    <Text style={styles.line}>|</Text>
                    <Text style={styles.codeStudent}>GVAT01</Text>
                  </View>
                </View>
              </View>
              <View style={styles.header1}>
                <Image style={{width: 40, height: 40}} source={images.Avatar} />
                <View style={styles.info}>
                  <View style={styles.names}>
                    <Text style={styles.nameS}>Trần Anh Tú</Text>
                    <Text style={styles.line}>|</Text>
                    <Text style={styles.codeStudent}>GVAT01</Text>
                  </View>
                </View>
              </View>
              <View style={styles.header1}>
                <Image style={{width: 40, height: 40}} source={images.Avatar} />
                <View style={styles.info}>
                  <View style={styles.names}>
                    <Text style={styles.nameS}>Trần Anh Tú</Text>
                    <Text style={styles.line}>|</Text>
                    <Text style={styles.codeStudent}>GVAT01</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
            <TouchableOpacity style={styles.buttonAddStudent}>
              <Text style={styles.textButtonAddStudent}>Thêm sinh viên</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View>
        <View style={styles.projectTopic}>
          <Pressable style={styles.informationTopic} onPress={() => setModalVisible(true)}>
            <Text style={styles.timeRegister}>
              00:00 12/06/2024 - 23:59 14/06/2024
            </Text>
            <Text style={styles.nameTopic}>
              Xây dựng hệ thống mạng xã hội KMA
            </Text>
            <Text style={styles.instructors}>Trần Anh Tú</Text>
          </Pressable>
          <View style={styles.buttonRegister}>
            <TouchableOpacity
              onPress={() => {
                console.log('sdsdsd');
                setModalRegister(true);
              }}>
              <Text style={styles.buttonDK}>Thêm sinh viên</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterTopic;
