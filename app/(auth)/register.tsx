import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function register() {

    //   styles
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "#128C7E",
            flex: 1,
            height: "100%",
            justifyContent: "center",
            padding: 20
        },

        title: {
            textAlign: "center",
            fontSize: 32,
            fontWeight: "bold",
            color: "white",
            textTransform: "uppercase",
            marginBottom: 10
        },

        form: {
            backgroundColor: "white",
            padding: 20,
            borderRadius: 5,
            shadowColor: "#000",
            shadowOffset: {
                width: 12,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
        },

        input: {
            padding: 15,
            borderRadius: 5,
            borderColor: "#ddd",
            borderWidth: 1,
            marginBottom: 15,
            fontSize: 16
        },

        button: {
            backgroundColor: "#002fffda",
            padding: 10,
            borderRadius: 3
        },

        buttonText: {
            textAlign: "center",
            color: "white",
            fontSize: 14,
        },

        link: {
            textAlign: "center",
            color: "blue",
            fontSize: 14,
            textDecorationLine: "underline",
            marginTop: 10
        }
    })
  
  
    return (
    <KeyboardAvoidingView
        style={styles.container}
    >
      <Text style={styles.title}>Register</Text>
      
      <View
        style={styles.form}
      >
        <TextInput
            style={styles.input}
            placeholder='username'
        />

        <TextInput
            style={styles.input}
            placeholder='password'
        />
        
        <TouchableOpacity
            style={styles.button}
        >
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => router.push("/(auth)/login") }
        >
            <Text style={styles.link}>Already have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}