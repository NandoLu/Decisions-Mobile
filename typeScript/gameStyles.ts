import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 100, // Aumenta a altura da barra superior
    backgroundColor: '#333', // Fundo cinza para a barra superior
    width: '100%', // Ocupa totalmente o canto superior da tela
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  topBarItem: {
    flexDirection: 'column',
    alignItems: 'center',
    left: 10,
  },
  topBarItemInline: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    right: 40,
  },
  imgCountry: {
    width: 50,
    height: 30,
    marginBottom: 5,
  },
  textCountry: {
    color: '#FFF',
    fontSize: 14, // Mesmo tamanho da barra inferior
  },
  imgCharacter: {
    width: 50,
    height: 70,
    marginBottom: 5,
  },
  textCharacter: {
    color: '#FFF',
    fontSize: 14, // Mesmo tamanho da barra inferior
    marginLeft: 10,
  },
  advanceButton: {
    backgroundColor: '#222',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  advanceButtonText: {
    color: '#FFF',
    fontSize: 14, // Mesmo tamanho da barra inferior
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 120, // Distancia os ícones centrais da barra superior
  },
  iconContainer: {
    alignItems: 'center',
    width: '30%',
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  iconLabel: {
    color: '#FFF',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: 10,
    marginBottom: 11,
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
  },
  bottomBarText: {
    color: '#FFF',
    fontSize: 14, // Mesmo tamanho da barra superior
    textAlign: 'center',
    flex: 1,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    paddingVertical: 10,
  },
  menuButton: {
    alignItems: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  menuButtonText: {
    color: '#FFF',
  },
  gameOverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  gameOverContent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'darkgray',
    borderRadius: 10,
  },
  gameOverImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  gameOverText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
