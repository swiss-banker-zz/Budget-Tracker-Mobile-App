import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Container } from 'native-base';

export default function App() {
  return (
    <View style={styles.container}>
      <Container style={{ marginTop: '30%' }}>
        <Text>Open up App.js to start working on your app!Hehe</Text>
      </Container>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
