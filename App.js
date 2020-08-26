import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Keychain from 'react-native-keychain';

export default function App() {

  const [text, setText] = useState('*** TEXT ***')

  useEffect(() => {
    setText('Hello World')
    Keychain.setGenericPassword('text', 'password')
  }, [])

  async function handlePress() {
    let password = await Keychain.getGenericPassword().then(credentials => credentials.password)
    setText(password)
  }

  return (
    <View style = {styles.container}>
      <Button onPress = { handelPress }>*** PRESS ME ***</Button>
      <Text style = { styles.text }>{ text }</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center'
  },
  text : {
    textAlign : 'center',
    color : 'skyblue'
  }
});
