import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import AnotherScreen from './src/screens/AnotherScreen';
import LogoTitle from './src/components/LogoTitle';
import ModalScreen from './src/screens/ModalScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Tabs = createBottomTabNavigator();
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AnotherStack = createStackNavigator();

const screenOptions = {
  headerStyle: {backgroundColor: '#fd3fa8'},
  headerTintColor: '#9f35e6fb',
  headerTitleStyle: {
    fontWeight: 'bold',
    letterSpacing: 10,
  },
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={({route}) => ({title: route.params.title})}
      />
    </HomeStack.Navigator>
  );
}

function AnotherStackScreen() {
  return (
    <AnotherStack.Navigator>
      <AnotherStack.Screen name="Another" component={AnotherScreen} />
    </AnotherStack.Navigator>
  );
}

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Signin"
        component={SigninScreen}
        options={{title: 'Login'}}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{title: 'Register'}}
      />
    </AuthStack.Navigator>
  );
}

function MainStackScreen() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Another" component={AnotherStackScreen} />
    </Tabs.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Modal"
        component={ModalScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default App;
