import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

export default function ProductDetail({ route }) {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Price: ${product.price}</Text>
          <Text style={styles.discount}>Discount: {product.discountPercentage}% off</Text>
          <Text>Rating: {product.rating}</Text>
          <Text>Stock: {product.stock}</Text>
          <Text>Brand: {product.brand}</Text>
          <Text>Category: {product.category}</Text>
        </Card.Content>
        <Card.Actions style={styles.buttonContainer}>
          <Button mode="contained" onPress={() => {}}>Delete</Button>
          <Button mode="contained" onPress={() => {}}>Cancel</Button>

        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '90%',
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
  card: {
    width: '90%',
    borderRadius: 10,
    elevation: 4,
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  discount: {
    fontSize: 14,
    color: 'green',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
});
