import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>SenMarket</Text>
        
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Offres Spéciales - Jusqu'à -50%</Text>
          <Button title="Voir les offres" onPress={() => console.log('Voir les offres')} />
        </View>
        
        <Text style={styles.sectionTitle}>Catégories populaires</Text>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryItem}>
            <View style={styles.categoryIcon} />
            <Text style={styles.categoryText}>Électronique</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryIcon} />
            <Text style={styles.categoryText}>Mode</Text>
          </View>
          <View style={styles.categoryItem}>
            <View style={styles.categoryIcon} />
            <Text style={styles.categoryText}>Alimentation</Text>
          </View>
        </View>
        
        <Text style={styles.sectionTitle}>Produits tendance</Text>
        <View style={styles.productsContainer}>
          <View style={styles.productCard}>
            <View style={styles.productImage} />
            <Text style={styles.productName}>Smartphone XYZ</Text>
            <Text style={styles.productPrice}>325 000 FCFA</Text>
            <Button title="Ajouter au panier" onPress={() => console.log('Ajouté au panier')} />
          </View>
          <View style={styles.productCard}>
            <View style={styles.productImage} />
            <Text style={styles.productName}>Écouteurs sans fil</Text>
            <Text style={styles.productPrice}>58 000 FCFA</Text>
            <Button title="Ajouter au panier" onPress={() => console.log('Ajouté au panier')} />
          </View>
        </View>
        
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#006847', // Changed to green (one of Senegal's national colors)
  },
  banner: {
    backgroundColor: '#e31b23', // Changed to red (one of Senegal's national colors)
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
    color: '#333',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  categoryItem: {
    alignItems: 'center',
    width: '30%',
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
    marginBottom: 8,
  },
  categoryText: {
    textAlign: 'center',
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  productCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#eee',
    borderRadius: 6,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006847', // Changed to green
    marginBottom: 10,
  },
});

export default HomeScreen;