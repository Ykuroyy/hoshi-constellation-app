import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const ConstellationDetailScreen = ({ route }) => {
  const { constellation, seasonColor } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.header, { backgroundColor: seasonColor }]}>
          <Text style={styles.emoji}>{constellation.emoji}</Text>
          <Text style={styles.name}>{constellation.name}</Text>
          <Text style={styles.description}>{constellation.description}</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>📖 星ざのものがたり</Text>
          <View style={styles.contentCard}>
            <Text style={styles.contentText}>{constellation.story}</Text>
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>⭐ とくちょうてきな星</Text>
          <View style={styles.contentCard}>
            <Text style={styles.contentText}>{constellation.stars}</Text>
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>🔭 かんさつのポイント</Text>
          <View style={styles.observationCard}>
            <View style={styles.observationRow}>
              <Text style={styles.observationLabel}>いちばん見やすいじかん：</Text>
              <Text style={styles.observationValue}>{constellation.bestTime}</Text>
            </View>
            <View style={styles.observationRow}>
              <Text style={styles.observationLabel}>見るほうこう：</Text>
              <Text style={styles.observationValue}>{constellation.direction}</Text>
            </View>
          </View>
        </View>

        <View style={styles.funFactCard}>
          <Text style={styles.funFactTitle}>✨ まめちしき ✨</Text>
          <Text style={styles.funFactText}>
            星ざは、やく3000年まえから人びとにしたしまれてきました。
            むかしの人は、星ざを見て、きせつをしったり、
            ほうがくをたしかめたりしていたんだよ！
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
    paddingBottom: 50,
  },
  header: {
    padding: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.95,
  },
  infoSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 10,
  },
  contentCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  contentText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
  },
  observationCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  observationRow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  observationLabel: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  observationValue: {
    fontSize: 14,
    color: '#1a237e',
    fontWeight: 'bold',
    flex: 1,
  },
  funFactCard: {
    backgroundColor: '#e8f5e9',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#4caf50',
  },
  funFactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: 10,
  },
  funFactText: {
    fontSize: 14,
    color: '#1b5e20',
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default ConstellationDetailScreen;