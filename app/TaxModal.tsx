import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StatusBar, ScrollView, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './taxModalStyles';

interface TaxModalProps {
  visible: boolean;
  onClose: () => void;
  onDecree: (revenue: number, powerCost: number, popularityChange: number) => void;
  powerPoints: number; // Adicionando pontos de poder como prop
}

const TaxModal: React.FC<TaxModalProps> = ({ visible, onClose, onDecree, powerPoints }) => {
  const [lowIncome, setLowIncome] = useState(0);
  const [middleIncome, setMiddleIncome] = useState(0);
  const [highIncome, setHighIncome] = useState(0);
  const [sellIncome, setSellIncome] = useState(0);
  const [previousValues, setPreviousValues] = useState({ lowIncome: 0, middleIncome: 0, highIncome: 0 , sellIncome: 0 });
  const [changedSlider, setChangedSlider] = useState<string | null>(null);
  const [decreeEnabled, setDecreeEnabled] = useState(false);
  const [powerCost, setPowerCost] = useState(0);

  useEffect(() => {
    if (!visible) {
      // Resetar valores ao fechar o modal
      setLowIncome(previousValues.lowIncome);
      setMiddleIncome(previousValues.middleIncome);
      setHighIncome(previousValues.highIncome);
      setSellIncome(previousValues.sellIncome);
      setChangedSlider(null);
      setDecreeEnabled(false);
      setPowerCost(0);
    }
  }, [visible]);

  const handleSliderChange = (value: number, slider: string) => {
    setChangedSlider(slider);
    setDecreeEnabled(true);

    let cost = 0;
    if (slider === 'lowIncome') {
      cost = Math.abs(value - previousValues.lowIncome);
      setLowIncome(value);
    }
    if (slider === 'middleIncome') {
      cost = Math.abs(value - previousValues.middleIncome);
      setMiddleIncome(value);
    }
    if (slider === 'highIncome') {
      cost = Math.abs(value - previousValues.highIncome);
      setHighIncome(value);
    }
    if (slider === 'sellIncome') {
      cost = Math.abs(value - previousValues.sellIncome);
      setSellIncome(value);
    }

    setPowerCost(cost);
    setDecreeEnabled(cost <= powerPoints);
  };



  const handleDecree = () => {
    if (powerCost > powerPoints) {
      Alert.alert("Poder insuficiente para decretar");
      return;
    }

    let revenue = 0;
    revenue += lowIncome * 1;
    revenue += middleIncome * 3;
    revenue += highIncome * 6;
    revenue += sellIncome * 5;

    let popularityChange = 0;

    if (lowIncome === 0) {
      popularityChange += 4;
    } else {
      popularityChange -= lowIncome * 0.5;
    }
    if (middleIncome === 0) {
      popularityChange += 3;
    } else {
      popularityChange -= middleIncome * 0.3;
    }
    if (highIncome === 0) {
      popularityChange += 2;
    } else {
      popularityChange -= highIncome * 0.2;
    }

  
    setPreviousValues({ lowIncome, middleIncome, highIncome, sellIncome });
    onDecree(revenue, powerCost, popularityChange);
    setChangedSlider(null);
    setDecreeEnabled(false);
  };

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
                  onValueChange={(value) => handleSliderChange(value, 'lowIncome')}
                  disabled={changedSlider !== null && changedSlider !== 'lowIncome'}
                />
                <Text style={styles.textModal}>Média Renda</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={middleIncome}
                  onValueChange={(value) => handleSliderChange(value, 'middleIncome')}
                  disabled={changedSlider !== null && changedSlider !== 'middleIncome'}
                />
                <Text style={styles.textModal}>Alta Renda</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={highIncome}
                  onValueChange={(value) => handleSliderChange(value, 'highIncome')}
                  disabled={changedSlider !== null && changedSlider !== 'highIncome'}
                />
                <Text style={styles.textModal}>Imposto sobre Vendas</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0}
                  maximumValue={10}
                  step={1}
                  value={sellIncome}
                  onValueChange={(value) => handleSliderChange(value, 'sellIncome')}
                  disabled={changedSlider !== null && changedSlider !== 'sellIncome'}
                />
              </View>
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.decreeButton, !decreeEnabled && styles.decreeButtonDisabled]}
              onPress={handleDecree}
              disabled={!decreeEnabled}
            >
              <Text style={styles.decreeButtonText}>Decretar</Text>
            </TouchableOpacity>
            <Text style={styles.powerCostText}>Custo de Poder: {powerCost}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaxModal;
