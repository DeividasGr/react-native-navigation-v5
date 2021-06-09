import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

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
