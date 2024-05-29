import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containers: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 20,
    alignItems: 'center',
  },
  info: {
    marginLeft: 15,
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  names: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    // borderRightColor: "black",
    // borderStyle: "solid",
    borderRightColor: 'black',
    borderRightWidth: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444444',
  },
  line: {
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
  },
  codeStudent: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#444444',
  },
  major: {
    marginTop: 2,
    color: '#444444',
    fontSize: 15,
  },
  iconBell: {
    width: 30,
    height: 30,
  },
  frameBanner: {
    alignItems: 'center',
    padding: 10,
  },
  headerBanner: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  banner: {
    width: 350,
    height: 137,
  },
  textComponent: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
  },
  component: {
    fontSize: 16,
    color: '#444444',
    fontWeight: 'bold',
  },
  itemImage: {
    width: 70,
    height: 70,
  },
  items: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    padding: 10,
  },
  item: {
    alignItems: 'center',
  },
  textItem: {
    fontSize: 12,
    color: '#555555',
    fontWeight: '600',
    width: 62,
    top: 5,
    textAlign: 'center',
  },
});

export default styles;
