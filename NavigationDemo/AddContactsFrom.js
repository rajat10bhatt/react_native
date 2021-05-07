import React from 'react'
import { SafeAreaView, ImageBackground, KeyboardAvoidingView, StyleSheet, Button, TextInput } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        height: 40,
        marginVertical: 10,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})

const image = { uri: "https://reactjs.org/logo-og.png" }

export default class AddContactForm extends React.Component {
    state = {
        name: '',
        phone: '',
        isValidForm: false,
    }

    // Generic way of calling the textinput handler
    gethandler = key => val => {
        this.setState({ [key]: val })
    }

    handleNameChange = this.gethandler('name') // this is going to return val => { this.setState({['name']: value}} which further updates text input
    /*
    handleNameChange = name => {
        this.setState({ name })
    }
    */

    handlePhoneChange = phone => {
        if (+phone >= 0 && phone.length <= 10) {
            this.setState({ phone })
        }
    }

    handleSubmit = () => {
        this.props.navigationProps.navigation.navigate('Home', { contact: {...this.state} })
    }

    validateForm = () => {
        if (+this.state.phone >= 0 && +this.state.phone.length === 10 && this.state.name.length >= 3) {
            this.setState({ isValidForm: true })
        } else {
            this.setState({ isValidForm: false })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
            this.validateForm()
        }
    }

    render() {
        // Ways to get error, gives big red screen/ red errors
        // console.error('This is a error')
        // throw new Error('This is also a error')
        // Ways to get yellow errors, does not appear in production mode
        // console.warn('This is a yellow error')
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.containerView}>
                <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={this.handleNameChange}
                    placeholder='Name'
                />
                <TextInput
                    style={styles.input}
                    value={this.state.phone}
                    onChangeText={this.handlePhoneChange}
                    keyboardType='numeric'
                    placeholder='Number'
                />
                <Button title='Add Contact' onPress={this.handleSubmit} disabled={!this.state.isValidForm} />
            </KeyboardAvoidingView>
        )
    }
}