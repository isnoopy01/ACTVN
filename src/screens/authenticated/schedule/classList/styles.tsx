import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  schedule: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  titles: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444444',
  },
  textTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  infoSchedule: {
    width: '95%',
    display: 'flex',
  },
  Location: {
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
  },
  listRed: {
    width: 6,
    height: 6,
    marginRight: 10,
  },
  infoLocation: {
    fontSize: 13,
    color: '#818181',
  },
  listYellow: {
    width: 6,
    height: 6,
    marginRight: 10,
  },
  scheduleItem: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#FFF1F1',
    borderRadius: 10,
    marginBottom: 10,
  },
  timeSchedule: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateRangesContainer: {
    marginTop: 10,
  },
  dateRangeHeader: {
    fontSize: 13,
    fontWeight: '500',
    color: '#818181',
    marginBottom: 2,
  },
  dateRangeText: {
    fontSize: 13,
    color: '#818181',
    paddingVertical: 2,
  },
  chevronRight: {
    width: 24,
    height: 24,
    padding: 10,
  },
});

export default styles;
