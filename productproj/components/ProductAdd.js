import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';

export default function ProductAdd({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      title,
      description,
      price: parseFloat(price),
      discountPercentage: parseFloat(discount),
      rating: parseFloat(rating),
      stock: parseInt(stock),
      brand,
      category,
    };

    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        Alert.alert('Success', 'Product added successfully');
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('Error', 'Failed to add product');
        console.error('Error adding product:', error);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Discount</Text>
      <TextInput
        style={styles.input}
        value={discount}
        onChangeText={setDiscount}
        placeholder="Discount percentage"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Rating</Text>
      <TextInput
        style={styles.input}
        value={rating}
        onChangeText={setRating}
        placeholder="Rating"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Stock</Text>
      <TextInput
        style={styles.input}
        value={stock}
        onChangeText={setStock}
        placeholder="Stock quantity"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Brand</Text>
      <TextInput
        style={styles.input}
        value={brand}
        onChangeText={setBrand}
        placeholder="Brand"
      />

      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Category"
      />

      <Button title="Add Product" onPress={handleAddProduct} color="#4285F4" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 8,
    fontSize: 14,
    marginBottom: 10,
  },
});