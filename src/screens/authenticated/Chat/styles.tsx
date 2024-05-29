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
  search: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 5,
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
    color: '#555555',
    paddingLeft: 15,
  },
  item: {
    width: 50,
    marginRight: 25,
    height: 100,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    alignItems: 'center',
  },
  listChat: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  chat: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  chatPerson: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avt: {
    width: 55,
    height: 55,
  },
  infoPerson: {
    marginLeft: 15,
  },
  namePerson: {
    fontSize: 15,
    fontWeight: '600',
  },
  content: {
    flexDirection: 'row',
    marginTop: 5,
  },
  onloff: {
    width: 10,
    height: 10,
  },
  contentChat: {
    fontSize: 14,
  },
  timeChat: {
    marginLeft: 15,
  },
});

export default styles;
