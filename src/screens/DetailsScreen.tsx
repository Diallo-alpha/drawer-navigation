import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function DetailsScreen() {
  const [quantity, setQuantity] = useState(1);
  
  // Simuler des données de produit
  const product = {
    id: 1,
    name: 'Smartphone Galaxy S23',
    price: 399000,
    oldPrice: 450000,
    discount: 11,
    rating: 4.5,
    reviews: 127,
    stock: 15,
    description: 'Le dernier smartphone Galaxy avec un écran AMOLED 6.1", processeur Exynos 2200, triple caméra arrière 50MP et batterie 4000mAh pour une autonomie toute la journée.',
    specs: [
      '6.1" Dynamic AMOLED 2X',
      'RAM 8GB, Stockage 128GB',
      'Caméra principale 50MP',
      'Batterie 4000mAh',
      'Android 13'
    ],
    images: [
      { id: 1, uri: 'https://placeholder.com/400x400' },
      { id: 2, uri: 'https://placeholder.com/400x400' },
      { id: 3, uri: 'https://placeholder.com/400x400' }
    ]
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* Placeholder pour image du produit */}
        <View style={styles.imageContainer}>
          <View style={styles.productImage} />
          {product.discount > 0 && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>-{product.discount}%</Text>
            </View>
          )}
        </View>
        
        {/* Thumbnails des images */}
        <View style={styles.thumbnailContainer}>
          {[1, 2, 3].map(id => (
            <View key={id} style={[styles.thumbnail, id === 1 ? styles.activeThumbnail : null]} />
          ))}
        </View>
        
        {/* Informations du produit */}
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.price.toLocaleString()} FCFA</Text>
            {product.oldPrice && (
              <Text style={styles.oldPrice}>{product.oldPrice.toLocaleString()} FCFA</Text>
            )}
          </View>
          
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>★★★★☆ {product.rating}</Text>
            <Text style={styles.reviews}>({product.reviews} avis)</Text>
          </View>
          
          <View style={styles.stockInfo}>
            <Text style={styles.inStock}>En stock: {product.stock} unités</Text>
          </View>
          
          {/* Sélecteur de quantité */}
          <View style={styles.quantitySelector}>
            <Text style={styles.quantityLabel}>Quantité:</Text>
            <View style={styles.quantityControls}>
              <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityValue}>{quantity}</Text>
              <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Boutons d'action */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.addToCartButton} onPress={() => console.log('Ajouté au panier')}>
              <Text style={styles.addToCartButtonText}>Ajouter au panier</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyNowButton} onPress={() => console.log('Acheter maintenant')}>
              <Text style={styles.buyNowButtonText}>Acheter maintenant</Text>
            </TouchableOpacity>
          </View>
          
          {/* Description */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
          </View>
          
          {/* Spécifications */}
          <View style={styles.specsContainer}>
            <Text style={styles.sectionTitle}>Spécifications</Text>
            {product.specs.map((spec, index) => (
              <View key={index} style={styles.specItem}>
                <Text style={styles.specText}>• {spec}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
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
  },
  imageContainer: {
    position: 'relative',
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#e31b23',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: 'white',
    fontWeight: 'bold',
  },
  thumbnailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 5,
  },
  activeThumbnail: {
    borderWidth: 2,
    borderColor: '#006847',
  },
  infoContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006847',
    marginRight: 10,
  },
  oldPrice: {
    fontSize: 18,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    color: '#f8b500',
    marginRight: 5,
    fontSize: 16,
  },
  reviews: {
    color: '#666',
    fontSize: 14,
  },
  stockInfo: {
    marginBottom: 15,
  },
  inStock: {
    color: '#006847',
    fontWeight: '500',
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 36,
    height: 36,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityValue: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#006847',
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#006847',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#006847',
    padding: 12,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  buyNowButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  descriptionText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  specsContainer: {
    marginBottom: 20,
  },
  specItem: {
    marginBottom: 6,
  },
  specText: {
    fontSize: 15,
    color: '#555',
  },
});

export default DetailsScreen;