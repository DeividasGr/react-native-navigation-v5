import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="To another screen"
        onPress={() => navigation.navigate('Another')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
