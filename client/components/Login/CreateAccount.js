import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import { connect, Provider } from 'react-redux'
import { getUser } from '../../store/allCourts';


export default class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handlePress = this.handlePress.bind(this)
    }

    handlePress() {
        // const user = {
        //     email: this.state.email,
        //     password: this.state.password
        // }
        // this.props.getUser(user)
        this.props.navigation.navigate('Map')
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to CourtDude!</Text>
                <Text style={styles.subtext}>Please provide a valid username, email and password to get started</Text>
                <TextInput
                    placeholder="username"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={styles.input}
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                />
                <TextInput
                    placeholder="email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    keyboardType="email-address"
                    style={styles.input}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    secureTextEntry
                    style={styles.input}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <TouchableOpacity style={styles.createaccountContainer} onPress={this.handlePress}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
        padding: 20
    },
    text: {
        color: 'white',
        fontFamily: 'AppleSDGothicNeo-Bold',
        fontSize: 40,
        textAlign: 'center',
        paddingVertical: 65
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    createaccountContainer: {
        backgroundColor: '#34495e',
        paddingVertical: 15,
        borderRadius: 100
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    },
    subtext: {
        color: 'white',
        fontFamily: 'AppleSDGothicNeo-Regular',
        fontSize: 20,
        paddingVertical: 2
    }
})



// const mapDTP = dispatch => {
//     return {
//         getUser: () => dispatch(getUser())
//     };
// };

// export default connect(
//     null,
//     mapDTP
// )(CreateAccount);