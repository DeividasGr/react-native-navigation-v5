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
      <Button
        title="Go to Another 2 Screen"
        onPress={() => navigation.navigate('Another2')}
      />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Details',
            params: {title},
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default AnotherScreen;
