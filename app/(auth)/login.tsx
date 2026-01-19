import { router } from 'expo-router'
import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login() {


    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#121a8cf6', 
            flex: 1, 
            height: '100%', 
            justifyContent: 'center',  
            padding: 20
        },

        title: {
            color: 'white',
            fontSize: 32,
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: "center",
            textTransform: "uppercase"
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
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 5,
            padding: 15,
            marginBottom: 15,
            fontSize: 16
        },

        button: {
            backgroundColor: "#128C7E",
            padding: 10,
            borderRadius: 5,
            marginBottom: 5,
        },
        
        buttonText: {
            textAlign: "center",
            color: "white",
            fontSize: 14,
        },

        link: {
            color: "blue",
            textDecorationLine: "underline",
            textAlign: "center"
        }
    })


  return (
    <KeyboardAvoidingView
        style={styles.container}
    >
        <Text style={styles.title}>
            Login
        </Text>

        <View
            style={styles.form}
        >
            <TextInput
                style={styles.input}
                placeholder='email'
            />

            <TextInput
                style={styles.input}
                placeholder='password'
            />

            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Logn In
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => router.push("/(auth)/register") }
            >
                <Text style={styles.link}>
                    Don't have an account? Sign Up
                </Text>
            </TouchableOpacity>

            <Text onPress={() => router.push("/shop")}>
                Shop
            </Text>
        </View>
    </KeyboardAvoidingView>
  )
}