import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Button, Platform, ScrollView, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SectionListComponent from './SectionListComponent'
import AddContactForm from './AddContactsFrom'
import contacts, { compareNames } from './contacts'
import fetchUsers from './Api';

const Stack = createStackNavigator()

function Home(props) {
  const [contacts, setContacts] = useState(props.route.params.contacts)

  useEffect(() => {
    getContacts()
  }, [])

  useEffect(() => {
    // getContacts()
    if (props.route.params?.contact) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      setContacts([...contacts, props.route.params?.contact])
    }
  }, [props.route.params?.contact]);

  getContacts = async () => {
    const results = await fetchUsers()
    setContacts(results)
  }

  return (
    <SafeAreaView style={styles.container}>
      <SectionListComponent list={contacts} />
    </SafeAreaView>
  )
}

function Add(props) {
  return (
    <AddContactForm navigationProps={props} />
  )
}

export default class App extends React.Component {
  state = {
    contacts: [],
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={props => ({
              title: 'Home',
              headerRight: () => (
                <Button
                  onPress={() => props.navigation.navigate('Add')}
                  title="Add"
                  color="#fff"
                />
              ),
            })} initialParams={{ contacts: this.state.contacts }} />
          <Stack.Screen name='Add' component={Add} options={props => ({
            title: 'AddContacts',
            headerBackTitleVisible: false,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});