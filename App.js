import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import * as Keychain from 'react-native-keychain';
import Login from './src/components/Login.js';
import Signup from './src/components/Signup.js';
import BudgetLists from './src/components/BudgetLists.js'

export default function App() {

  const [text, setText] = useState('*** TEXT ***')

  // useEffect(() => {
  //   setText('Hello World')
  //   Keychain.setGenericPassword('text', 'password')
  // }, [])

  // async function handlePress() {
  //   let password = await Keychain.getGenericPassword().then(credentials => credentials.password)
  //   setText(password)
  // }

  return (
    <View style={styles.container}>
      {/* <Button onPress = { handlePress } title = '*** PRESS ME ***' />
      <Text style = { styles.text }>{ text }</Text> */}
      <BudgetLists />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'skyblue'
  }
});
