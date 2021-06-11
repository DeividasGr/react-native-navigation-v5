import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import AnotherScreen from '../screens/AnotherScreen';
import LogoTitle from '../components/LogoTitle';
import ModalScreen from '../screens/ModalScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AnotherSecondScreen from '../screens/AnotherSecondScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoadingScreen from '../screens/LoadingScreen';
import {Context} from '../context/AuthContext';
import {Provider as AuthProvider} from '../context/AuthContext';

const Tabs = createBottomTabNavigator();
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AnotherStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
      <AnotherStack.Screen name="Another2" component={AnotherSecondScreen} />
    </AnotherStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
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

function TabsNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Another" component={AnotherStackScreen} />
    </Tabs.Navigator>
  );
}

function MainStackScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabsNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    </Drawer.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
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
  const {
    state: {isLoading, token},
    changeLoadingStatus,
  } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      changeLoadingStatus();
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {token ? <RootStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

export default App;
