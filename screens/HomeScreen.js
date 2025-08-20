import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const seasons = [
    { id: 'spring', name: '春', color: '#ff9999', emoji: '🌸' },
    { id: 'summer', name: '夏', color: '#87ceeb', emoji: '🌻' },
    { id: 'autumn', name: '秋', color: '#ff8c00', emoji: '🍁' },
    { id: 'winter', name: '冬', color: '#4682b4', emoji: '❄️' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>きせつをえらんでね！</Text>
        <Text style={styles.subtitle}>それぞれのきせつに見える星ざをしらべよう</Text>
        
        <View style={styles.seasonsContainer}>
          {seasons.map((season) => (
            <TouchableOpacity
              key={season.id}
              style={[styles.seasonCard, { backgroundColor: season.color }]}
              onPress={() => navigation.navigate('Season', { 
                seasonId: season.id, 
                season: season.name 
              })}
              activeOpacity={0.8}
            >
              <Text style={styles.seasonEmoji}>{season.emoji}</Text>
              <Text style={styles.seasonName}>{season.name}</Text>
              <Text style={styles.seasonSubtext}>のそら</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>🌟 星ざのひみつ 🌟</Text>
          <Text style={styles.infoText}>
            むかしのひとたちは、よぞらの星をつないで、
            どうぶつやひとのかたちをそうぞうしました。
            それが「星ざ」です！
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  seasonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  seasonCard: {
    width: '45%',
    height: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  seasonEmoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  seasonName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  seasonSubtext: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a237e',
    textAlign: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default HomeScreen;