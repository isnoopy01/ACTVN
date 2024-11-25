import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  calendar: {
    // height: 350,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  eventItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  eventTime: {
    fontSize: 14,
    color: '#333',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  eventLocation: {
    fontSize: 14,
    color: '#888',
  },
  noEventsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
  scheduleItem: {
    backgroundColor: '#f0f0f0',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 15
  },
  selectedScheduleItem: {
    backgroundColor: '#FFEAEB',
  },
  scheduleTime: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scheduleDetails: {
    flex: 1,
  },
  subjectText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
