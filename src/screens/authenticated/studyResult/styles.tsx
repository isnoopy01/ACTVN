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
  textSchedule: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444444',
  },
  title: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    paddingTop: 15,
  },
  textTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  allStudy: {
    marginLeft: 20,
    marginRight: 20,
  },
  framePoint: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFF1F1',
    borderRadius: 10,
    marginBottom: 10,
  },
  nameStudy: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2A2A37',
  },
  TC: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
  },
  textTC: {
    fontSize: 11,
    color: '#818181',
  },
  numberTC: {
    fontSize: 11,
    color: '#818181',
  },
  codeClass: {
    flexDirection: 'row',
  },
  textCode: {
    fontSize: 11,
    color: '#818181',
  },
  infoCode: {
    fontSize: 11,
    color: '#818181',
  },
  subjectScores: {
    flexDirection: 'row',
    color: '#818181',
  },
  testScore: {
    color: '#818181',
  },
  pointProcess: {
    color: '#818181',
  },
});

export default styles;
