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
  titleQuestion: {
    marginTop: 15,
  },
  infoQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageQuestion: {
    width: 65,
    height: 65,
  },
  textQuestion: {
    fontSize: 14,
    color: '#444444',
    fontWeight: '600',
    marginLeft: 20,
    width: 181,
  },
  iconRight: {
    width: 24,
    height: 24,
  },
  questions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
  },
});

export default styles;
