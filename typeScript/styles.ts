import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 0,
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 40,
  },
  startButton: {
    backgroundColor: '#FFF',
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 20,
    height: 75,
    width: 140,
  },
  startButtonText: {
    color: '#000',
    fontSize: 20,
  },
  settingsIcon: {
    width: 70,
    height: 70,
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