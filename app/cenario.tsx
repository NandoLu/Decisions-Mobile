import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import styles from '../typeScript/styles';
import { Scenario } from '../typeScript/interfaces'; // Importe a interface

const scenarios: Scenario[] = [
  { id: 1, image: require('@/assets/images/balanca.png'), text: 'Brasil, 1940', population: '100 M' },
  { id: 2, image: require('@/assets/images/balanca.png'), text: 'Estados Unidos, 1950', population: '150 M' },
  { id: 3, image: require('@/assets/images/balanca.png'), text: 'Japão, 1960', population: '90 M' },
];

const ScenarioComponent = () => {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);

  const renderItem = ({ item }: { item: Scenario }) => (
    <TouchableOpacity
      style={[
        styles.scenarioBox,
        { borderColor: selectedScenario === item.id ? '#008000' : '#FFF' },
      ]}
      onPress={() => setSelectedScenario(item.id)}
    >
      <Image source={item.image} style={styles.scenarioImage} />
      <Text style={styles.scenarioText}>{item.text}</Text>
      <Text style={styles.scenarioDetails}>População: {item.population}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Text style={styles.title}>Cenários</Text>
      <FlatList
        data={scenarios}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={selectedScenario}
      />
      <Link
        href="/game"
        style={[styles.readyButton, { opacity: selectedScenario ? 1 : 0.5 }]}
        disabled={!selectedScenario}
      >
        <Text style={styles.readyButtonText}>Pronto</Text>
      </Link>
    </View>
  );
};

export default ScenarioComponent;
