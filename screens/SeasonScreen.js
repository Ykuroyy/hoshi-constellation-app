import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { constellations } from '../data/constellations';

const SeasonScreen = ({ route, navigation }) => {
  const { seasonId, season } = route.params;
  const seasonConstellations = constellations[seasonId] || [];

  const getSeasonColor = (id) => {
    const colors = {
      spring: '#ff9999',
      summer: '#87ceeb',
      autumn: '#ff8c00',
      winter: '#4682b4'
    };
    return colors[id] || '#666';
  };

  const seasonColor = getSeasonColor(seasonId);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.header, { backgroundColor: seasonColor }]}>
          <Text style={styles.headerTitle}>{season}に見える星ざたち</Text>
          <Text style={styles.headerSubtitle}>タップしてくわしくみてみよう！</Text>
        </View>

        <View style={styles.constellationsContainer}>
          {seasonConstellations.map((constellation) => (
            <TouchableOpacity
              key={constellation.id}
              style={styles.constellationCard}
              onPress={() => navigation.navigate('ConstellationDetail', {
                constellation,
                name: constellation.name,
                seasonColor
              })}
              activeOpacity={0.8}
            >
              <Text style={styles.constellationEmoji}>{constellation.emoji}</Text>
              <Text style={styles.constellationName}>{constellation.name}</Text>
              <Text style={styles.constellationDescription}>
                {constellation.description}
              </Text>
              <View style={styles.directionBadge}>
                <Text style={styles.directionText}>📍 {constellation.direction}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💡 かんさつのコツ</Text>
          <Text style={styles.tipText}>
            {season}の星ざは、{seasonConstellations[0]?.bestTime}ごろが
            いちばん見やすいよ！くらいばしょで、そらをゆっくりながめてみよう。
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
    paddingBottom: 20,
  },
  header: {
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
  },
  constellationsContainer: {
    paddingHorizontal: 20,
  },
  constellationCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  constellationEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  constellationName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 8,
  },
  constellationDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 10,
  },
  directionBadge: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  directionText: {
    fontSize: 12,
    color: '#1976d2',
    fontWeight: '500',
  },
  tipCard: {
    backgroundColor: '#fff9c4',
    margin: 20,
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#f9a825',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f57f17',
    marginBottom: 8,
    textAlign: 'center',
  },
  tipText: {
    fontSize: 14,
    color: '#6d4c41',
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default SeasonScreen;