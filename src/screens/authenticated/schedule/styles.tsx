import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  textSchedule: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444444',
  },



  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: 'rgba(0 0 0 / 0.4)',
  },
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    height: '40%',
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
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#CF0016',
  },
  titleModal: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  iconClose: {
    width: 30,
    height: 30,
  },
  frameSemester: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 20,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#A7A7A7'
  },
  semester: {
    fontSize: 15,
    fontWeight: '600'
  },
  
  
});

export default styles;
