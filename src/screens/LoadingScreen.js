import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

function LoadingScreen() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default LoadingScreen;