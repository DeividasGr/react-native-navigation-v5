import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function ModalScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default ModalScreen;
