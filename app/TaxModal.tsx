import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './taxModalStyles';

interface TaxModalProps {
  visible: boolean;
  onClose: () => void;
  onDecree: () => void;
}

const TaxModal: React.FC<TaxModalProps> = ({ visible, onClose, onDecree }) => {
  const [lowIncome, setLowIncome] = useState(0);
  const [middleIncome, setMiddleIncome] = useState(0);
  const [highIncome, setHighIncome] = useState(0);
  const [salesTax, setSalesTax] = useState(0);
  const [inheritanceTax, setInheritanceTax] = useState(0);
  const [corporateTax, setCorporateTax] = useState(0);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Impostos</Text>
          <ScrollView>
            <View style={styles.sliderContainer}>
              <View style={styles.sliderColumn}>
                <Text style={styles.textModal}>Baixa Renda</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={lowIncome}
                  onValueChange={setLowIncome}
                />
                <Text style={styles.textModal}>Média Renda</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={middleIncome}
                  onValueChange={setMiddleIncome}
                />
                <Text style={styles.textModal}>Alta Renda</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={highIncome}
                  onValueChange={setHighIncome}
                />
                <Text style={styles.textModal}>Impostos sobre Vendas</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={salesTax}
                  onValueChange={setSalesTax}
                />
                <Text style={styles.textModal}>Impostos sobre Herança</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={inheritanceTax}
                  onValueChange={setInheritanceTax}
                />
                <Text style={styles.textModal}>Impostos sobre Faturamento</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={corporateTax}
                  onValueChange={setCorporateTax}
                />
              </View>
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.decreeButton} onPress={onDecree}>
              <Text style={styles.decreeButtonText}>Decretar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaxModal;
