import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function AnotherScreen({navigation}) {
  return (
    <View>
      <Text>Another Screen</Text>
      <Button
        title="To another screen"
        onPress={() => navigation.push('Another')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default AnotherScreen;
