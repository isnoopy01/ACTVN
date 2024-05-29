import {StyleSheet} from 'react-native';

const notification = StyleSheet.create({
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444444',
  },
  itemNoti: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#F9DFDF',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
  },
  avatarUser: {
    width: 50,
    height: 50,
  },
  content: {
    marginLeft: 15,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 13,
    width: 274,
    marginVertical: 3,
  },
  timeNoti: {
    fontSize: 12,
    color: '#848484',
  },
  iconShowNoti: {
    width: 8,
    height: 8,
  },
});

export default notification;
