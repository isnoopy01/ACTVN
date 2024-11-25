import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Alert,
  Button,
  Pressable,
} from 'react-native';
import {StatusBar} from 'react-native';
import React, {useState, useRef, useMemo, useCallback} from 'react';
// import 'react-native-gesture-handler';
// import 'react-native-reanimated';
import styles from './styles';
import {Icon} from '../../../assets/icons/icon';
import {images} from '../../../assets/images/image';
import RBSheet from 'react-native-raw-bottom-sheet';
// import BottomSheet from './createGroup/bottomSheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

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
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Danh sách bạn bè giả lập
  const friends = [
    {id: '1', name: 'Nguyễn Răm', avatar: 'https://via.placeholder.com/50'},
    {id: '2', name: 'Phạm Thu Thảo', avatar: 'https://via.placeholder.com/50'},
    {id: '3', name: 'Bùi Minh Toàn', avatar: 'https://via.placeholder.com/50'},
    {
      id: '4',
      name: 'Nguyễn Thu Hương',
      avatar: 'https://via.placeholder.com/50',
    },
    {id: '5', name: 'Vũ Công Thỏa', avatar: 'https://via.placeholder.com/50'},
    {id: '6', name: 'Mai Thị Giang', avatar: 'https://via.placeholder.com/50'},
    {
      id: '7',
      name: 'Phan Thuận Phát',
      avatar: 'https://via.placeholder.com/50',
    },
  ];

  // Hàm toggle modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Chọn hoặc bỏ chọn thành viên
  const toggleSelectMember = member => {
    if (selectedMembers.find(m => m.id === member.id)) {
      setSelectedMembers(selectedMembers.filter(m => m.id !== member.id));
    } else {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  // Lọc danh sách theo tìm kiếm
  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  // const [selectedContacts, setSelectedContacts] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  // const bottomSheetRef = useRef(null);

  // Snap points của Bottom Sheet
  // const snapPoints = useMemo(() => ["50%", "90%"], []);

  // Hàm mở Bottom Sheet
  // const handleOpenSheet = useCallback(() => {
  //   bottomSheetRef.current?.expand();
  // }, []);

  // Hàm đóng Bottom Sheet
  // const handleCloseSheet = useCallback(() => {
  //   bottomSheetRef.current?.close();
  // }, []);

  // Dữ liệu gợi ý
  // const [suggestions, setSuggestions] = useState([
  //   { id: "1", name: "Nguyễn Thu Hương", image: "https://via.placeholder.com/50", selected: false },
  //   { id: "2", name: "Phạm Thu Thảo", image: "https://via.placeholder.com/50", selected: false },
  //   { id: "3", name: "Nguyễn Răm", image: "https://via.placeholder.com/50", selected: false },
  //   { id: "4", name: "Duyệt", image: "https://via.placeholder.com/50", selected: false },
  //   { id: "5", name: "Mai Thị Giang", image: "https://via.placeholder.com/50", selected: false },
  //   { id: "6", name: "Phán Thuận Phát", image: "https://via.placeholder.com/50", selected: false },
  //   { id: "7", name: "Vũ Công Thỏa", image: "https://via.placeholder.com/50", selected: false },
  //   { id: "8", name: "Bùi Minh Toàn", image: "https://via.placeholder.com/50", selected: false },
  // ]);

  // Trạng thái tìm kiếm
  // const [searchText, setSearchText] = useState("");

  // Hàm lọc dữ liệu dựa trên tìm kiếm
  // const filteredSuggestions = suggestions.filter((item) =>
  //   item.name.toLowerCase().includes(searchText.toLowerCase())
  // );

  // Hàm chọn hoặc bỏ chọn người dùng
  // const toggleSelect = (id) => {
  //   setSuggestions((prevSuggestions) =>
  //     prevSuggestions.map((item) =>
  //       item.id === id ? { ...item, selected: !item.selected } : item
  //     )
  //   );
  // };

  // Hàm tạo nhóm
  // const createGroup = () => {
  //   const selectedUsers = suggestions.filter((item) => item.selected);
  //   if (selectedUsers.length === 0) {
  //     Alert.alert("Thông báo", "Bạn chưa chọn thành viên nào!");
  //     return;
  //   }

  //   const groupNames = selectedUsers.map((user) => user.name).join(", ");
  //   Alert.alert("Nhóm đã được tạo!", `Thành viên: ${groupNames}`);
  // };

  // Hàm render từng item trong danh sách
  // const renderContact = ({ user }) => (
  //   <TouchableOpacity
  //     style={styles.itemContainer}
  //     onPress={() => toggleSelect(user.id)}
  //   >
  //     <Image source={{ uri: user.image }} style={styles.avatar} />
  //     <Text style={styles.name}>{user.name}</Text>
  //     <View
  //       style={[
  //         styles.radioButton,
  //         user.selected ? styles.radioButtonSelected : null,
  //       ]}
  //     />
  //   </TouchableOpacity>
  // );

  // const handleOpenBottomSheet = () => {
  //   console.log("Expanding BottomSheet...");
  //   bottomSheetRef.current?.expand();
  // };
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
  // const refRBSheet = useRef();

  // const [status, setStatus] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textHeaders}>
          <Text style={styles.textHeader}>Đoạn chat</Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
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

      {/* <View style={styles.containers}> */}
      {/* Nút mở Bottom Sheet */}
      {/* <TouchableOpacity
        style={styles.openButton}
        onPress={() => bottomSheetRef.current?.expand()}
      >
        <Text style={styles.buttonText}>Tạo nhóm mới</Text>
      </TouchableOpacity> */}

      {/* Bottom Sheet */}
      {/* <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} backgroundStyle={{ backgroundColor: 'white' }} style={{ zIndex: 10 }}> */}
      {/* Header */}
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Bottom Sheet Content</Text> */}
      {/* </View>
        <View style={styles.headers}>
        <TouchableOpacity onPress={createGroup}>
            <Text style={styles.back}>Huỷ</Text>
          </TouchableOpacity>
          <Text style={styles.titles}>Nhóm mới</Text>
          <TouchableOpacity onPress={createGroup}>
            <Text style={styles.createText}>Tạo</Text>
          </TouchableOpacity>
        </View> */}

      {/* Input Tên Nhóm */}
      {/* <TextInput
          placeholder="Tên nhóm (không bắt buộc)"
          style={styles.input}
        /> */}

      {/* Input tìm kiếm */}
      {/* <TextInput
          placeholder="Tìm kiếm"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        /> */}

      {/* Danh sách gợi ý */}
      {/* <FlatList
          data={filteredSuggestions}
          keyExtractor={(user) => user.id}
          renderItem={({ item: user }) => renderContact({ user })}
        />
      </BottomSheet>
    </View> */}

      {/* <View style={{flex: 1}}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
            height: 300,
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
      </RBSheet> */}
      {/* { status && <BottomSheet setStatus={ setStatus } /> }
       */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerCreate}>
              <Pressable onPress={() => setModalVisible(!isModalVisible)}>
                <Text style={styles.titleClose}>Huỷ</Text>
              </Pressable>
              <Text style={styles.titles}>Nhóm mới</Text>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.titleCreate}>Tạo</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.inputGroup}
              placeholder="Tên nhóm (không bắt buộc)"
              placeholderTextColor="#aaa"
            />
            <View style={styles.searchBarModal}>
              <Image style={styles.iconSearch} source={Icon.Search} />
              <TextInput
                style={styles.input}
                placeholder="Tìm kiếm"
                placeholderTextColor="#aaa"
                value={searchText}
                onChangeText={setSearchText}
              />
            </View>
            <FlatList
              data={selectedMembers}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{}}
              renderItem={({item}) => (
                <View style={styles.selectedMember}>
                  <View style={styles.avatarSelect}>
                    <Image
                      source={{uri: item.avatar}}
                      style={styles.selectedAvatar}
                    />
                    <TouchableOpacity
                      onPress={() => toggleSelectMember(item)} // Xử lý bỏ chọn
                    >
                      <Image
                        style={styles.removeText}
                        source={Icon.ClosePerson}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.nameSelect}>{item.name}</Text>
                </View>
              )}
            />
            {/* <View style={styles.selectedMembers}>
              {selectedMembers.map(member => (
                <View key={member.id} style={styles.selectedMember}>
                  <View style={styles.avatarSelect}>
                    <Image
                      source={{uri: member.avatar}}
                      style={styles.selectedAvatar}
                    />
                    <TouchableOpacity
                      onPress={() => toggleSelectMember(member)}>
                      <Image
                        style={styles.removeText}
                        source={Icon.ClosePerson}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.nameSelect}>{member.name}</Text>
                </View>
              ))}
            </View> */}
            <View style={styles.titleList}>
              <Text style={styles.textTitle}>Gợi ý</Text>
            </View>
            <FlatList
              data={filteredFriends}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.friendItem}
                  onPress={() => toggleSelectMember(item)}>
                  <Image source={{uri: item.avatar}} style={styles.avatar} />
                  <Text style={styles.friendName}>{item.name}</Text>
                  <Image
                    style={{width: 20, height: 20}}
                    source={
                      selectedMembers.find(m => m.id === item.id)
                        ? images.Checkbox
                        : images.Checkout
                    }
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default SettingScreen;
