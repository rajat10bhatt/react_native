import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Screen1 from './Screens/Screen1'
import Screen2 from './Screens/Screen2'
import Home from './Screens/Home'
import Settings from './Screens/Settings'
import Details from './Screens/Details'

const mainScreens = {
  screen1: Screen1,
  screen2: Screen2
};

const commonScreens = {
  home: Home,
  settings: Settings,
  details: Details,
};

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackTitleVisible: false,
}

// Implement Drawer content for navigation to settings in tab
function DrawerComponent() {
  return (
    <Drawer.Navigator initialRouteName='Tab'>
        <Drawer.Screen name='Tab' component = {Dashboard} options={{title: 'Home'}}/>
        {/* <Drawer.Screen name='Settings' component = {commonScreens.settings} options={{ headerShown: true, title: 'Settings' }} /> */}
    </Drawer.Navigator>
  )
}

function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeNavigator} />
      <Tab.Screen name='Settings' component={SettingsNavigator} />
    </Tab.Navigator>
  )
}

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name='Home' component={commonScreens.home} />
      <HomeStack.Screen name='Details' component={commonScreens.details} />
    </HomeStack.Navigator>
  )
}

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator screenOptions={screenOptions}>
      <SettingsStack.Screen name='Settings' component={commonScreens.settings} />
    </SettingsStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={screenOptions}>
        <MainStack.Screen name="Screen1" component={mainScreens.screen1} />
        <MainStack.Screen name="Screen2" component={mainScreens.screen2} options={props => ({
          title: 'Screen2',
        })} />
        <MainStack.Screen name="Drawer" component={DrawerComponent} options={{ headerShown: false }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}