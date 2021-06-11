import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Context} from '../context/AuthContext';

function SigninScreen({navigation}) {
  const {signin} = useContext(Context);
  return (
    <View>
      <Text>This is a signin screen!</Text>
      <Button onPress={() => signin('asdads')} title="Signin" />
      <Button
        onPress={() => navigation.navigate('Signup')}
        title="Dont have an account yet? Sign up here!"
      />
    </View>
  );
}

export default SigninScreen;
