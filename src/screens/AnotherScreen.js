import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

function AnotherScreen({navigation, route}) {
  const [title, setTitle] = useState('');

  const {name, age, id} = route.params;
  return (
    <View>
      <Text>Another Screen</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Id: {id}</Text>
      <TextInput
        placeholder="Enter Title"
        value={title}
        onChangeText={setTitle}
      />
      <Button
        title="To another screen"
        onPress={() => navigation.push('Another')}
      />
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: {title},
            merge: true,
          });
        }}
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
