import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import styles from '../typeScript/gameStyles';
import TaxModal from './TaxModal';

const Game = () => {
  const [isTaxModalVisible, setTaxModalVisible] = useState(false);

  const openTaxModal = () => {
    setTaxModalVisible(true);
  };

  const closeTaxModal = () => {
    setTaxModalVisible(false);
  };

  const handleDecree = () => {
    // Lógica para decretar os impostos
    setTaxModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {/* Barra Superior */}
      <View style={styles.topBar}>
        <View style={styles.topBarItem}>
          <Image source={require('@/assets/images/brasil.jpg')} style={styles.imgCountry} />
          <Text style={styles.textCountry}>Brasil</Text>
        </View>
        <View style={styles.topBarItemInline}>
          <Image source={require('@/assets/images/getulio.jpg')} style={styles.imgCharacter} />
          <Text style={styles.textCharacter}>Getúlio Vargas</Text>
        </View>
        <TouchableOpacity style={styles.advanceButton}>
          <Text style={styles.advanceButtonText}>Avançar</Text>
        </TouchableOpacity>
      </View>

      {/* Ícones Centrais */}
      <View style={styles.iconGrid}>
        {[
          { label: 'Imposto', onPress: openTaxModal },
          { label: 'Economia' },
          { label: 'Trabalho' },
          { label: 'Educação' },
          { label: 'Saúde' },
          { label: 'Segurança' },
          { label: 'Política Externa' },
          { label: 'Infraestrutura' },
          { label: 'Meio Ambiente' },
          { label: 'Agricultura' },
          { label: 'Indústria e Energia' },
          { label: 'Social' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.iconContainer} onPress={item.onPress}>
            <Image source={require('@/assets/images/balanca.png')} style={styles.icon} />
            <Text style={styles.iconLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Barra Inferior */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomBarText}>100 M</Text>
        <Text style={styles.bottomBarText}>51%</Text>
        <Text style={styles.bottomBarText}>O ano, mês</Text>
      </View>

      {/* Botões Inferiores */}
      <View style={styles.bottomMenu}>
        {[
          { label: 'Estatísticas' },
          { label: 'Decisões' },
          { label: 'Conselho' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuButton}>
            <Image source={require('@/assets/images/balanca.png')} style={styles.menuIcon} />
            <Text style={styles.menuButtonText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal de Impostos */}
      <TaxModal visible={isTaxModalVisible} onClose={closeTaxModal} onDecree={handleDecree} />
    </View>
  );
};

export default Game;