import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Icon} from '../../../../assets/icons/icon';
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
  const [isFocus, setIsFocus] = useState(false);

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
      <View>
        <View style={styles.projectTopic}>
          <View style={styles.informationTopic}>
            <Text style={styles.timeRegister}>
              00:00 12/06/2024 - 23:59 14/06/2024
            </Text>
            <Text style={styles.nameTopic}>
              Xây dựng hệ thống mạng xã hội KMA
            </Text>
            <Text style={styles.instructors}>Trần Anh Tú</Text>
          </View>
          <View style={styles.buttonRegister}>
            <TouchableOpacity>
              <Text style={styles.buttonDK}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.projectTopic}>
          <View style={styles.informationTopic}>
            <Text style={styles.timeRegister}>
              00:00 12/06/2024 - 23:59 14/06/2024
            </Text>
            <Text style={styles.nameTopic}>
              Xây dựng hệ thống mạng xã hội KMA
            </Text>
            <Text style={styles.instructors}>Trần Anh Tú</Text>
          </View>
          <View style={styles.buttonRegister}>
            <TouchableOpacity>
              <Text style={styles.buttonDK}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.projectTopic}>
          <View style={styles.informationTopic}>
            <Text style={styles.timeRegister}>
              00:00 12/06/2024 - 23:59 14/06/2024
            </Text>
            <Text style={styles.nameTopic}>
              Xây dựng hệ thống mạng xã hội KMA
            </Text>
            <Text style={styles.instructors}>Trần Anh Tú</Text>
          </View>
          <View style={styles.buttonRegister}>
            <TouchableOpacity>
              <Text style={styles.buttonDK}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterTopic;
