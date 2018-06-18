import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    keyboardType="email-address"
                    style={styles.input}
                />
                <TextInput
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    secureTextEntry
                    style={styles.input}
                />
                <TouchableOpacity style={styles.loginContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupContainer}>
                    <Text style={styles.buttonText}>Sign Up!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    loginContainer: {
        backgroundColor: '#2990b9',
        paddingVertical: 15,
        marginBottom: 20
    },
    signupContainer: {
        backgroundColor: '#2990b9',
        paddingVertical: 15,
        width: 100
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
})