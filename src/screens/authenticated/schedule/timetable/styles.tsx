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
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  selectedScheduleItem: {
    backgroundColor: '#E6F7FF',
    borderColor: '#1890FF',
    borderWidth: 2,
  },
  scheduleTime: {
    marginRight: 15,
    justifyContent: 'center',
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
