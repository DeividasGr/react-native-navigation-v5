import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function SignupScreen({navigation}) {
  return (
    <View>
      <Text>This is a signup screen!</Text>
      <Button onPress={() => navigation.goBack()} title="Sign Up" />
    </View>
  );
}

export default SignupScreen;
