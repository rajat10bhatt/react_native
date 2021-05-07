
// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView, Image, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = (props) => {
  // Navigate to details with other parameters
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'Any thing can be here!',
        })}
      />
    </View>
  );
}

function DetailsScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{props.route.params.itemId}</Text>
      <Text>{props.route.params.otherParam}</Text>
      <Button
        title="Update the title"
        onPress={() => props.navigation.setOptions({ title: 'Updated!' })}
      />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={{ uri: 'https://reactjs.org/logo-og.png' }}
    />
  );
}

const Stack = createStackNavigator();

function NavigationDemo() {
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
          component={HomeScreen}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
          }} />
        <Stack.Screen name='Details' component={DetailsScreen} options={ props => ({ 
          title: 'DetailsScreen',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
          headerBackTitleVisible: false,
        })} initialParams={{ itemId: 42 }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationDemo;