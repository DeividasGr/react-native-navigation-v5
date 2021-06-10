import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AnotherScreen from './src/screens/AnotherScreen';
import LogoTitle from './src/components/LogoTitle';
import ModalScreen from './src/screens/ModalScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const screenOptions = {
  headerStyle: {backgroundColor: '#fd3fa8'},
  headerTintColor: '#9f35e6fb',
  headerTitleStyle: {
    fontWeight: 'bold',
    letterSpacing: 10,
  },
};

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Signin" component={SigninScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
        }}
      />
      <MainStack.Screen
        name="Another"
        component={AnotherScreen}
        options={({route}) => ({title: route.params.name})}
      />
    </MainStack.Navigator>
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
      {/* <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
          }}
        />
        <Stack.Screen
          name="Another"
          component={AnotherScreen}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator> */}
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default App;
