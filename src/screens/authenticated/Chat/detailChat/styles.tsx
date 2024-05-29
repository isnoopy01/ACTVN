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
    paddingBottom: 15,
  },
  headerStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHeader: {
    width: 25,
    height: 25,
  },
  textHeaders: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444444',
    paddingLeft: 5,
  },
  avatarHeader: {
    width: 40,
    height: 40,
  },
  infoUsers: {
    marginLeft: 10,
  },
  nameUser: {
    fontSize: 15,
    fontWeight: '600',
  },
  status: {
    fontSize: 12,
    color: '#555555',
  },
  timeSend: {
    fontSize: 11,
    color: '#7E7E7E',
    width: '50%',
  },
  textTime: {
    padding: 10,
    backgroundColor: '#F7F8FA',
    alignContent: 'center',
  },
  messageContainer: {
    flex: 1,
    padding: 20,
    borderRadius: 15,
  },
  userMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F1F1',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 10,
    marginVertical: 5,
    maxWidth: '70%',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#E1525B',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 10,
    marginVertical: 5,
    maxWidth: '70%',
  },
  userMessageText: {
    color: '#000',
    fontSize: 15,
  },
  myMessageText: {
    color: '#fff',
    fontSize: 15,
  },
  frameInputContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F7',
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    borderRadius: 25,
  },
  attachmentButton: {
    padding: 5,
  },
  attachmentIcon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    color: '#888888',
  },
  sendButton: {
    // backgroundColor: '#f50057',
  },
  sendIcon: {
    width: 24,
    height: 24,
  },
});

export default notification;
