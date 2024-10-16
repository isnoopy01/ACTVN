import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444444',
  },
  avatarSetting: {
    width: 97,
    height: 97,
  },
  info: {
    flexDirection: 'row',
    backgroundColor: '#DC868A',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 18,
    paddingTop: 18,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  textInfo: {
    paddingLeft: 15,
  },
  nameSetting: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  phone: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 3,
  },
  textNumber: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  number: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textEmail: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  addEmail: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  featureSetting: {
    marginTop: 10,
  },
  feature: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  infoFeature: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconstart: {
    width: 30,
    height: 30,
  },
  textFeature: {
    color: '#444444',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  iconend: {
    width: 24,
    height: 24,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0 0 0 / 0.4)',
  },
  modalView: {
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
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
    paddingLeft: 15,
    paddingRight: 15
  },
  headerModal1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  titleModal: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconClose: {
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
    
});

export default styles;
