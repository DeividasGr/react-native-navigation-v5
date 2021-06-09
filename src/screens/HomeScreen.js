import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function HomeScreen({navigation, route}) {
  console.log(route);
  useEffect(() => {
    if (route.params?.title) {
      console.log('received params');
    }
  }, [route.params?.title]);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="To another screen"
        onPress={() =>
          navigation.navigate('Another', {name: 'John', age: 26, id: 76})
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
