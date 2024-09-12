import React from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import styles from '../typeScript/styles';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Image source={require('@/assets/images/balanca.png')} style={styles.icon} />
      <Text style={styles.title}>Decisions</Text>
      <Link href="/cenario" style={styles.startButton}>
        <Text style={styles.startButtonText}>Começar</Text>
      </Link>
      <Image source={require('@/assets/images/engrenagem.png')} style={styles.settingsIcon} />
    </View>
  );
};

export default App;
