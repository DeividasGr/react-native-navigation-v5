import React from 'react';
import {View, Text, Button} from 'react-native';

function ProfileScreen({navigation}) {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Show Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

export default ProfileScreen;
