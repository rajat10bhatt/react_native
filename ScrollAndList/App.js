import 'react-native-gesture-handler';
import React from 'react';
import { Button, Platform, ScrollView, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import SectionListComponent from './SectionListComponent'
import AddContactForm from './AddContactsFrom'

import contacts, { compareNames } from './contacts'

export default class App extends React.Component {
  state = {
    showContacts: false,
    showAddContact: false,
    contacts: contacts
  }

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }))
  }

  toggleContactForm = () => {
    this.setState(prevState => ({ showAddContact: !prevState.showAddContact }))
  }

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }))
  }

  submitForm = (newContact) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      showAddContact: !prevState.showAddContact,
    }))
  }

  render() {
    if (this.state.showAddContact) return <AddContactForm onSubmit={this.submitForm} />
    return (
      // <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Button title="Toggle Contacts" onPress={this.toggleContacts} />
        <Button title='Add Contact' onPress={this.toggleContactForm} />
        {this.state.showContacts && (
          <SectionListComponent list={this.state.contacts} />
        )}
      </SafeAreaView>
      // </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});