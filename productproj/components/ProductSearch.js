import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function ProductSearch() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const searchProduct = () => {
    if (value.trim() === '') return;

    const filePath = `https://dummyjson.com/products/search?q=${value}`;
    setLoading(true);

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
      })
      .finally(() => setLoading(false));
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.thumbnail }} resizeMode="cover" style={styles.image} />
      <Card.Content>
        <Title style={styles.title}>{item.title}</Title>
        <Paragraph>{item.description}</Paragraph>
        <Paragraph>Price: ${item.price}</Paragraph>
        <Paragraph>Discount: {item.discountPercentage}% off</Paragraph>
        <Paragraph>Rating: {item.rating} stars</Paragraph>
        <Paragraph>Stock: {item.stock}</Paragraph>
        <Paragraph>Brand: {item.brand}</Paragraph>
        <Paragraph>Category: {item.category}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Products"
        value={value}
        onChangeText={setValue}
      />
      <Button title="Search" onPress={searchProduct} disabled={loading} />
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={data.length > 0 ? <Title style={styles.header}>Product Detail</Title> : null}
        contentContainerStyle={styles.list}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  card: {
    width: Dimensions.get('window').width * 0.9,
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    height: 200,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  list: {
    width: '100%',
    alignItems: 'center',
  },
});
