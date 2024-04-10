import {StyleSheet} from 'react-native';
import {sizes} from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    alignItems: 'center',
  },
  top: {
    paddingLeft: 34,
    paddingRight: 34,
  },
  textTop: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444444',
    padding: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#CF0016',
    padding: 10,
  },
  textPsw: {
    textAlign: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    marginTop: 0,
  },
  textInput: {
    color: '#90A6BB',
    backgroundColor: '#F3F4FA',
    fontSize: 15,
    padding: 17,
    width: sizes.width - 60,
    marginTop: 15,
    borderRadius: 10,
  },
  content2: {
    fontSize: 15,
    color: '#4A515E',
    textAlign: 'left',
  },
  btnSignAnother: {
    marginTop: 50,
    padding: 17,
    backgroundColor: '#CF0016',
    width: sizes.width - 60,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnAnother: {
    flexDirection: 'row',
  },
});

export default styles;
