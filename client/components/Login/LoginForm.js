import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { createStackNavigator} from 'react-navigation';
import { connect, Provider } from 'react-redux'
import { getUser } from '../../store/allCourts';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleCreateAccount = this.handleCreateAccount.bind(this)
    }

    handleLogin() {
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.getUser(user)
        this.props.nav.navigation.navigate('Map')
    }

    handleCreateAccount() {
        this.props.nav.navigation.navigate('CreateAccount')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    keyboardType="email-address"
                    style={styles.input}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    placeholder="password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    secureTextEntry
                    style={styles.input}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <TouchableOpacity style={styles.loginContainer} onPress={this.handleLogin}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.createaccountContainer} onPress={this.handleCreateAccount}>
                    <Text style={styles.buttonText}>Create Account</Text>
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
        backgroundColor: '#f39c12',
        paddingVertical: 15,
        marginBottom: 20,
        borderRadius: 100
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
    }
})


  
  const mapDTP = dispatch => {
    return {
      getUser: (userBod) => dispatch(getUser(userBod))
    };
  };
  
  export default connect(
    null,
    mapDTP
  )(LoginForm);