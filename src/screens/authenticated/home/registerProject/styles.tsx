import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containers: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 20,
  },
  iconHeader: {
    width: 25,
    height: 25,
  },
  textHeaders: {
    flexDirection: 'row',
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444444',
  },
  informationClass: {
    backgroundColor: '#DC868A',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  infoGeneral: {
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFFFFF',
  },
  class: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  subsystems: {
    flexDirection: 'row',
    marginTop: 3,
  },
  textSubsystem: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  infoSubsystems: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  infoPersonal: {
    marginLeft: 15,
    marginRight: 15,
  },
  classMonitor: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  textMonitor: {
    fontSize: 13,
    width: 130,
    color: '#FFFFFF',
  },
  infoMonitor: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  classSecretary: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  textSecretary: {
    fontSize: 13,
    width: 130,
    color: '#FFFFFF',
  },
  infoSecretary: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  classManage: {
    flexDirection: 'row',
  },
  textManage: {
    fontSize: 13,
    width: 130,
    color: '#FFFFFF',
  },
  infoManage: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  title: {
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    flexDirection: 'row',
  },
  textTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  numberStudent: {
    fontSize: 15,
    fontWeight: '600',
  },
  avatarStudent: {
    width: 40,
    height: 40,
  },
  infoListStudent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 12,
    paddingTop: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#D8D8D8',
  },
  infoListS: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoTextS: {
    marginLeft: 10,
  },
  nameStudent: {
    fontSize: 15,
    fontWeight: '500',
    color: '#444444',
  },
  msvStudent: {
    fontSize: 14,
    color: '#444444',
    paddingTop: 3,
  },
  frameButton: {
    borderWidth: 1,
    borderColor: '#CF0016',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 8,
    paddingTop: 8,
    borderRadius: 5,
  },
  buttonDetail: {
    fontSize: 13,
    color: '#CF0016',
  },

  container: {
    paddingBottom: 5,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: '#000000',
  },
  dropdown: {
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 15,
  },
  selectedTextStyle: {
    fontSize: 15,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 1,
  },
  projectTopic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 0.5,
  },
  informationTopic: {
    // flexDirection: 'row',
  },
  timeRegister: {
    fontSize: 10,
    color: '#CF0016',
  },
  nameTopic: {
    fontSize: 15,
    color: '#444444',
    fontWeight: 'bold',
    paddingTop: 6,
    paddingBottom: 6,
    width: 260,
  },
  instructors: {
    fontSize: 12,
    color: '#000000',
  },
  buttonRegister: {
    padding: 10,
    backgroundColor: '#CF0016',
    borderRadius: 10,
  },
  buttonDK: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  modal: {
    // alignItems: 'center',
    backgroundColor: '#00ff00',
    // padding: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: 'rgba(0 0 0 / 0.4)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,

    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  frameInfo: {
    // padding: 20,
  },
  information: {
    // marginTop: 10,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#D1D1D1',
  },

  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 5,
  },
  titleModal: {
    fontSize: 18,
    fontWeight: '700',
  },
  iconClose: {
    width: 24,
    height: 24,
  },
  iconWhite: {
    width: 24,
    height: 24,
  },

  item: {
    // backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 5,
  },
  headerItem: {
    fontSize: 15,
    backgroundColor: '#fff',
  },
  detail: {
    fontSize: 12,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  // item: {
  //   padding: 10,
  //   fontSize: 18,
  //   height: 44,
  // },
  time: {
    flexDirection: 'row',
  },
  headerTime: {
    fontSize: 10,
    color: '#CF0016',
  },
  timeRegisters: {
    fontSize: 10,
    color: '#CF0016',
  },
  nameProject: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
  },

  describeItem: {
    fontSize: 13,
    padding: 5,
    fontWeight: '500',
  },
  contentDescribe: {
    fontSize: 12,
    paddingLeft: 10,
    lineHeight: 22,
  },
  headerRequest: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  contentRequest: {
    fontSize: 12,
    paddingLeft: 10,
    lineHeight: 22,
  },
  Student: {
    flexDirection: 'row',
  },
  Lecture: {
    flexDirection: 'row',
  },
  infoLeture: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 3,
  },
  headerInfo: {
    fontSize: 12,
  },
  contents: {
    fontSize: 12,
  },

  numberStu: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingVertical: 3,
    color: '#555555',
  },

  numberLeture: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingVertical: 3,
    color: '#555555',
  },

  headerItemPopup: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingVertical: 3,
    color: '#555555',
  },
});

export default styles;
