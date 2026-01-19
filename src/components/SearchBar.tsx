import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function SearchBar() {
  return (
    <View
        style={styles.container}
    >
      <TextInput 
        placeholder='gamepads, robots, headphones'
        style={styles.input}
      
      />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },

    input: {
        backgroundColor: "#f1f1f1",
        padding: 12,
        borderRadius: 8,
        fontSize: 18,
        borderColor: "#ddd"
    }
})