import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native'
import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('./player-logo.png')}
                    />
                    <Text style={styles.title}>CourtDude</Text>
                    <Text style={styles.subtext}>Sign up or Login!</Text>
                </View>
                    <View style={styles.formContainer}>
                        <LoginForm />
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 250,
        height: 400
    },
    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
        width: 300,
        textAlign: 'center',
        opacity: 0.9
    },
    subtext: {
        color: 'white',
        fontSize: 20,
        opacity: 0.9
    }
})