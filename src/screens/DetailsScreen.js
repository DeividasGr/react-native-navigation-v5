import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DetailsScreen({route}) {
  return (
    <View>
      <Text>{route.params.title} screen</Text>
      {route.params.count && (
        <Text>
          {route.params.count} times header at home screen was pressed!
        </Text>
      )}
    </View>
  );
}

export default DetailsScreen;
