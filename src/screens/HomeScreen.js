import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

function HomeScreen({navigation, route}) {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (route.params?.title) {
      console.log('received params');
    }
  }, [route.params?.title]);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{count}</Text>
      <Button
        title="To another screen"
        onPress={() =>
          navigation.navigate('Another', {name: 'Mike', age: 26, id: 76})
        }
      />
      <Button
        title="Update the title"
        onPress={() =>
          navigation.setOptions({
            headerTitle: props => (
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://berenyisoft.eu/wp-content/uploads/2020/04/BSys-Smile.jpg',
                }}
              />
            ),
          })
        }
      />
      <Button onPress={() => navigation.navigate('Modal')} title="Open Modal" />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58,
  },
});

export default HomeScreen;
