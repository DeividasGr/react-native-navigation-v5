import React, {useState, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

function HomeScreen({navigation}) {
  const [count, setCount] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{count}</Text>
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
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {count, title: 'Counter Details'})
        }
      />
      <Button
        title="Go to Details 2"
        onPress={() =>
          navigation.navigate('Details', {title: 'Different Details'})
        }
      />
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
