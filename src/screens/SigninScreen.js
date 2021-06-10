import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function SigninScreen({navigation}) {
  return (
    <View>
      <Text>This is a signin screen!</Text>
      <Button onPress={() => navigation.navigate('Main')} title="Signin" />
      <Button
        onPress={() => navigation.navigate('Signup')}
        title="Dont have an account yet? Sign up here!"
      />
    </View>
  );
}

export default SigninScreen;
