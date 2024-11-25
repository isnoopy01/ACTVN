import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 4,
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
  textSchedule: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444444',
  },
  createNews: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    paddingTop: 15,
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 4,
  },
  newsStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avt: {
    width: 40,
    height: 40,
  },
  textNews: {
    fontSize: 15,
    color: '#444444',
    marginLeft: 15,
  },
  imageNews: {
    width: 24,
    height: 24,
  },
  posts: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 4,
  },
  informationCreate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 5,
  },
  infoCreator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avaStatus: {
    width: 45,
    height: 45,
    borderRadius: 100
  },
  textInfo: {
    marginLeft: 10,
  },
  nameCreator: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '600',
  },
  timeCreate: {
    fontSize: 12,
    color: '#797979',
    marginTop: 4,
  },
  buttonFunction: {
    width: 20,
    height: 20,
  },
  Status: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  contentStatus: {
    fontSize: 14,
    color: '#000000',
  },
  interact: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLike: {
    width: 24,
    height: 24,
  },
  numberLike: {
    fontSize: 13,
    color: '#444444',
    marginLeft: 5,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconComment: {
    width: 24,
    height: 24,
  },
  numberComment: {
    fontSize: 13,
    color: '#444444',
    marginLeft: 5,
  },
  share: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconShare: {
    width: 24,
    height: 24,
  },
  numberShare: {
    fontSize: 13,
    color: '#444444',
    marginLeft: 5,
  },

  postImage: {
    width: '100%',
    height: 200,
    // borderRadius: 8,
    marginBottom: 8,
  },
});

export default styles;
