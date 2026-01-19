import SearchBar from '@/src/components/SearchBar';
import { Stack } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function Shop() {

  const products = [
    { id: '1', name: 'Apple', price: 1.0 },
    { id: '2', name: 'Banana', price: 0.5 },
    { id: '3', name: 'Orange', price: 0.8 },
    { id: '4', name: 'Mango', price: 1.5 },
    { id: '5', name: 'Pineapple', price: 2.0 },
    { id: '6', name: 'Strawberry', price: 3.0 },
    { id: '7', name: 'Blueberry', price: 2.5 },
    { id: '8', name: 'Watermelon', price: 4.0 },
    { id: '9', name: 'Grapes', price: 1.8 },
    { id: '10', name: 'Papaya', price: 1.2 },
    { id: '11', name: 'Papaya', price: 1.2 },
    { id: '12', name: 'Papaya', price: 1.2 },
    { id: '13', name: 'Papaya', price: 1.2 },
    { id: '14', name: 'Papaya', price: 1.2 },
    { id: '15', name: 'Papaya', price: 1.2 },
    { id: '16', name: 'Papaya', price: 1.2 },
    { id: '17', name: 'Papaya', price: 1.2 },
    { id: '18', name: 'Papaya', price: 1.2 },
    { id: '19', name: 'Papaya', price: 1.2 },
    { id: '20', name: 'Papaya', price: 1.2 },
  ];


  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={styles.container}
      >
        <SearchBar />
        
        <FlatList 
          data={products} // this is yout list of Items
          keyExtractor={item => item.id} // each item must have it's own unique Identifier
          numColumns={3} // This makes 2 Items per row
          // horizontal={true} // makes it scroll horizontally
          renderItem={({ item }) => ( // this tell react Native how to show each item
            <View 
              style={styles.product}
            >
              <Text style={styles.productText}>Name: {item.name}</Text>

              <Text style={styles.productText}>Price: {item.price}</Text>

            </View>
          )}
          
          style={styles.productContainer}
        />
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2b1e3b",
    flex: 1,
    height: "100%",
    paddingTop: 50,
    padding: 10
  },

  productContainer: {
    padding: 5,
    marginTop: 5,
  },

  productText: {
    color: "white"
  },

  product: {
    padding: 10,
    backgroundColor: "#394444",
    marginLeft: 3,
    marginBottom: 3,
    height: 120,
    width: 110,
    alignItems: "center",
    justifyContent: "center"
  }
})