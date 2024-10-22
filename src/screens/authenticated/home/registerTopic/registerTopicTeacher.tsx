import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {Icon} from '../../../../assets/icons/icon';
import {Dropdown} from 'react-native-element-dropdown';
import {
  specializedTopic,
  registerSpecialized,
} from '../../../../repositories/topic';
import {ALERT_TYPE, Dialog, Toast} from 'react-native-alert-notification';
// import {images} from '../../../../assets/images/image';
// import SearchBar from 'react-native-search-bar';

const data = [{label: 'Trần Anh Tú', value: '18f669574360000000002184999'}];

const RegisterTopicTeacher = ({navigation}: {navigation: any}) => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [topics, setTopics] = useState([]);
  const [modalRegister, setModalRegister] = useState(false);
  // const [teacher, setTeacher] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectTopic, setSelectTopic] = useState('');

  const getTopics = async () => {
    const response = await specializedTopic();
    setTopics(response.data);
  };
  // const getTeacher = async () => {
  //   const response = await listTeacher();
  //   setTeacher(response.data);
  // };
  useEffect(() => {
    // getTeacher();
    getTopics();
  }, []);
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
  const registerTopic = async (id: any) => {
    var response = await registerSpecialized({id: id});
    console.log(response);
    if (response.alert) {
      Toast.show({
        autoClose: 1500,
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Đăng ký thành công',
      });
      setModalRegister(!modalRegister);
      getTopics();
    } else {
      Toast.show({
        autoClose: 1500,
        type: ALERT_TYPE.DANGER,
        textBody: response.message,
      });
      setModalRegister(!modalRegister);
    }
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
      <View style={styles.container}></View>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Danh sách đề tài</Text>
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
              <Image style={styles.iconWhite} source={Icon.FilterWhite} />
              <Text style={styles.titleModal}>Chi tiết đề tài</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Image style={styles.iconClose} source={Icon.Close} />
              </Pressable>
            </View>
            <View>
              <View style={styles.frameInfo}>
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
                          {'\n'}- Thăm dò, lấy ý kiến người học {'\n'}- Đăng ký
                          Đồ án, thực tập, chuyên đề {'\n'}- Theo dõi lịch học,
                          lịch thi {'\n'}- Trao đổi nhóm lớp, nhóm sinh viên{' '}
                          {'\n'}- Chia sẻ tài liệu
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
                        /<Text style={styles.headerInfo}>- Khoa: </Text>
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
              </View>
            </View>
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
        <View style={styles.centeredView2}>
          <View style={styles.modalView1}>
            <View style={styles.headerModal2}>
              <Image style={styles.iconClose} source={Icon.CloseWhite} />
              <Pressable onPress={() => setModalRegister(!modalRegister)}>
                <Image style={styles.iconClose} source={Icon.Close} />
              </Pressable>
            </View>
            <View style={styles.headerModal3}>
              <Image style={styles.iconClose} source={Icon.CloseWhite} />
              <Text style={styles.titleModal}>Thông báo</Text>
              <Image style={styles.iconClose} source={Icon.CloseWhite} />
            </View>
            <View style={styles.framecontentNoti}>
              <Text style={styles.contentNoti}>
                Bạn có chắc chắn muốn đăng ký đề tài này?
              </Text>
            </View>
            <View style={styles.buttonLogout}>
              <TouchableOpacity style={styles.buttonCancel}>
                <Text style={styles.textButtonCancel}>Huỷ</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonConfirm}
                onPress={() => {
                  registerTopic(selectTopic);
                }}>
                <Text style={styles.textButtonConfirm}>Đồng ý</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View>
        {topics.map((item, index) => (
          <>
            <View style={styles.projectTopic}>
              <View style={styles.informationTopic}>
                <Text style={styles.timeRegister}>{item.date}</Text>
                <Text style={styles.nameTopic}>{item.name}</Text>
                <Text style={styles.instructors}>{item.teacherName}</Text>
              </View>
            </View>
          </>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default RegisterTopicTeacher;
