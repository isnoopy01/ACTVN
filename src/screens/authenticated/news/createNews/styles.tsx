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
    marginLeft: 40,
  },
  buttonCreate: {
    backgroundColor: '#CF0016',
    borderRadius: 10,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 5,
    paddingLeft: 5,
  },
  textCreate: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  createNews: {
    padding: 20,
  },
  infoUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  nameUser: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#444444',
  },
  input: {
    fontSize: 15,
    color: '#444444',
    marginTop: 15,
  },
  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textfooter: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444444',
  },
  addMultimedia: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  frameImage: {
    paddingRight: 20,
  },
  addImage: {
    width: 30,
    height: 27,
  },
  addEmotion: {
    height: 27,
    width: 27,
  },
});

export default styles;
