import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    marginVertical: 20,
  },
  startButton: {
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  startButtonText: {
    color: '#000',
  },
  settingsIcon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  scenarioBox: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  scenarioImage: {
    width: 100,
    height: 100,
  },
  scenarioText: {
    color: '#FFF',
    marginTop: 10,
  },
  scenarioDetails: {
    color: '#FFF',
    marginTop: 5,
  },
  readyButton: {
    backgroundColor: '#008000', // Verde
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  readyButtonText: {
    color: '#FFF',
    textAlign: 'center',
  },
});

export default styles;