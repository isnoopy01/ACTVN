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
    width: '100%'
  },
  informationTopic: {
    // flexDirection: 'row',
    width: '60%'
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
    width: '90%',
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
    height: '60%',
    backgroundColor: 'rgba(0 0 0 / 0.4)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    height: '60%',
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
    fontSize: 20,
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

  modal2: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredView2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0 0 0 / 0.4)',
  },
  modalView1: {
    backgroundColor: 'white',
    width: '90%',
    height: '29%',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center'
  },
  headerModal2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
    paddingLeft: 15,
    paddingRight: 15
  },
  headerModal3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  titleModal1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconClose1: {
    width: 24,
    height: 24,
  },
  framecontentNoti: {
    width: '100%',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentNoti: {
    fontSize: 16,
    color: '#444444',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  buttonLogout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    
  },
  buttonCancel: {
    width: 140,
    borderColor: '#CF0016',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10
  },
  textButtonCancel: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#CF0016'
  },
  buttonConfirm: {
    width: 140,
    borderColor: '#CF0016',
    backgroundColor: '#CF0016',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10
  },
  textButtonConfirm: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },


  searchBar: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#F2F2F2',
    borderRadius: 25,
  },
  iconSearch: {
    width: 25,
    height: 25,
  },
  textSearch: {
    fontSize: 15,
    color: '#969696',
    paddingLeft: 10,
  },
  header1: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#D8D8D8'
  },
  names: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameS: {
    // borderRightColor: "black",
    // borderStyle: "solid",
    borderRightColor: 'black',
    borderRightWidth: 1,
    fontSize: 18,
    color: '#444444',
  },
  line: {
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
  },
  codeStudent: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#444444',
  },
  info: {
    marginLeft: 15,
  },
  buttonAddStudent: {
    marginTop: 10,
    borderColor: '#CF0016',
    backgroundColor: '#CF0016',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10
  },
  textButtonAddStudent: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
});

export default styles;
