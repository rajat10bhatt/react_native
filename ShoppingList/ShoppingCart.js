import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './containers/HomeScreen'
import ElectronicsScreen from './containers/ElectronicsScreen'
import BooksScreen from './containers/BooksScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'
import Cart from './containers/Cart'

const Stack = createStackNavigator()

const ShoppingCart = () => {
  return (
    < NavigationContainer>
      <Stack.Navigator screenOptions={props => ({
        headerBackTitleVisible: false, 
        headerTintColor: 'black', 
        headerRight: () => (<ShoppingCartIcon {...props}/>),
        })}>
        <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Shopping App'}} />
        <Stack.Screen name='Electornics' component={ElectronicsScreen} />
        <Stack.Screen name='Books' component={BooksScreen} />
        <Stack.Screen name='Cart' component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default ShoppingCart;