import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProductList() {
  const [data, setData] = useState([]);
  const navigation = useNavigation(); // Access navigation

  const filePath = 'https://dummyjson.com/products/';

  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((d) => {
        setData(d.products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.title}>Title: {item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>Price: ${item.price}</Text>
        <Text style={styles.discount}>Discount: {item.discountPercentage}% off</Text>
        <Text>Rating: {item.rating}</Text>
        <Text>Stock: {item.stock}</Text>
        <Text>Brand: {item.brand}</Text>
        <Text>Category: {item.category}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="DETAIL"
            onPress={() => navigation.navigate('Detail', { product: item })}
            color="#4285F4"
          />
          <Button title="ADD" onPress={() => {}} color="#4285F4" />
          <Button title="DELETE" onPress={() => {}} color="#4285F4" />
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  productCard: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: '#555',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  discount: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
