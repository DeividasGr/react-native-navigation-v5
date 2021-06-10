import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

function AnotherScreen({navigation}) {
  const [title, setTitle] = useState('');

  return (
    <View>
      <Text>Another Screen</Text>
      <TextInput
        placeholder="Enter Title"
        value={title}
        onChangeText={setTitle}
      />
      <Button
        title="To another screen"
        onPress={() => navigation.push('Another')}
      />
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
