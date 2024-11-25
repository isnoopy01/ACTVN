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
    height: 80,
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

  // containers: { flex: 1, justifyContent: "center", alignItems: "center" },
  headerCreate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    alignItems: 'center',
  },
  modal: {justifyContent: 'flex-end', margin: 0},
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
    height: '92%',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  titleClose: {
    fontSize: 16,
    color: '#E2021A',
  },
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444444',
  },
  titleCreate: {
    fontSize: 16,
    color: '#E2021A',
  },
  searchBarModal: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    borderRadius: 25,
    // padding: 15,
    // marginBottom: 10,
    color: '#000',
  },
  inputGroup: {
    padding: 10,
    marginBottom: 10,
    color: '#000',
    fontSize: 15,
  },
  input: {
    marginLeft: 10,
    color: '#969696',
    fontSize: 15,
  },
  titleList: {
    padding: 10,
  },
  textTitle: {
    fontSize: 15,
    color: '#444444',
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#EDEDED',
  },
  avatar: {
    width: 45, 
    height: 45, 
    borderRadius: 100, 
    marginRight: 10
  },
  friendName: {flex: 1},
  selectedMembers: {
    flexDirection: 'row'
  },
  selectedMember: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  avatarSelect: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 55,
  },
  selectedAvatar: {width: 50, height: 50, borderRadius: 100, marginBottom: 8},
  removeText: {
    width: 20,
    height: 20,
    marginTop: -5,
    marginLeft: -20,
  },
  nameSelect: {
    textAlign: 'center',
    width: 70,
    fontSize: 12,
  },
});

export default styles;
