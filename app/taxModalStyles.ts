import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    height: '80%', // Aumenta a altura da modal
    backgroundColor: '#333', // Fundo cinza escuro para a modal
    borderRadius: 10,
    padding: 20,
  },
  textModal:{
    color: '#fff',
    marginBottom: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFF',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  sliderColumn: {
    flex: 1,
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  closeButton: {
    backgroundColor: '#FF0000', // Botão vermelho
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  decreeButton: {
    backgroundColor: '#008000', // Botão verde
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  decreeButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  decreeButtonDisabled: {
    backgroundColor: '#d1d1d1',
  },
  powerCostText:{
    fontSize: 5,
    color: '#fff'
  },
});

export default styles;
