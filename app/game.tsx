import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar, Modal } from 'react-native';
import { Link } from 'expo-router';
import styles from '../typeScript/gameStyles';
import TaxModal from './TaxModal';
import { initialState, advanceTurn } from '../typeScript/GameLogic';

const Game = () => {
  const [state, setState] = useState(initialState);
  const [isTaxModalVisible, setTaxModalVisible] = useState(false);

  const openTaxModal = () => {
    setTaxModalVisible(true);
  };

  const closeTaxModal = () => {
    setTaxModalVisible(false);
  };

  const handleDecree = (revenue: any, powerCost: number, popularityChange: any) => {
    setState((prevState) => {
      const newState = { ...prevState, revenue: revenue, 
        powerPoints: prevState.powerPoints - powerCost,
        popularityChange: popularityChange,};
      // console.log('New state after decree:', newState);
      
      
      return newState;
    });
    handleAdvanceTurn();
  };

  const handleAdvanceTurn = () => {
    setState((prevState) => {
      const newState = advanceTurn(prevState);
      // console.log('State after advancing turn:', newState);
      return newState;
    });
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
          <Text style={styles.textCharacter}>Getúlio Vargas {'\n'}Poder: {state.powerPoints}</Text>
        </View>
        <TouchableOpacity style={styles.advanceButton} onPress={handleAdvanceTurn}>
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
        <Text style={styles.bottomBarText}>{state.economy.toLocaleString('pt-BR')} M</Text>
        <Text style={styles.bottomBarText}>{state.popularity.toFixed(0)}%</Text>
        <Text style={styles.bottomBarText}>{`${state.year}, ${['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'][state.month]}`}</Text>
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
      <TaxModal visible={isTaxModalVisible} onClose={closeTaxModal} onDecree={handleDecree} powerPoints={state.powerPoints} />

      {/* Modal de Fim de Jogo */}
      <Modal
        visible={state.gameOver}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {}}
      >
        <View style={styles.gameOverContainer}>
          <View style={styles.gameOverContent}>
            <Image source={require('@/assets/images/balanca.png')} style={styles.gameOverImage} />
            <Text style={styles.gameOverText}>{state.gameOverMessage}</Text>
            {state.popularity > 50 ? (
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setState((prevState) => ({ ...prevState, gameOver: false }))}
              >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            ) : (
              <Link href="/cenario" asChild>
                <TouchableOpacity style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </Link>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Game;
