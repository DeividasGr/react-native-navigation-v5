import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Context} from '../context/AuthContext';

function SignupScreen() {
  const {state, signup} = useContext(Context);
  console.log(state);
  return (
    <View>
      <Text>This is a signup screen!</Text>
      <Button onPress={() => signup('asff')} title="Sign Up" />
    </View>
  );
}

export default SignupScreen;
