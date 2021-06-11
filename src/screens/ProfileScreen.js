import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {Context} from '../context/AuthContext';

function ProfileScreen({navigation}) {
  const {signout} = useContext(Context);
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Show Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Logout" onPress={() => signout()} />
    </View>
  );
}

export default ProfileScreen;
