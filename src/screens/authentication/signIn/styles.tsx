import {StyleSheet} from 'react-native';
import {sizes} from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 34,
    paddingTop: 90,
  },
  logoAct: {
    alignItems: 'center',
    padding: 34,
    paddingTop: 90,
  },
  top: {
    alignItems: 'center',
  },
  textTop: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#CF0016',
    padding: 10,
  },
  content1: {
    fontSize: 17,
    fontWeight: '600',
    color: '#CF0016',
  },
  content2: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4A515E',
  },
  dataContainer: {
    marginTop: 20,
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
  btnSignin: {
    marginTop: 35,
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
  btnForgot: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  textForgot: {
    width: sizes.width - 60,
    color: '#CF0016',
    fontSize: 13,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'right',
  },
  frameLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  line1: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  textLine: {
    width: 150,
    textAlign: 'center',
    fontSize: 14,
    color: '#7D7D7D',
  },
  btnOffice: {
    marginTop: 20,
  },
  textBottom: {
    color: '#4A515E',
    fontSize: 15,
    fontWeight: 'normal',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default styles;
