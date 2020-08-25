import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Container } from 'native-base';
import Signup from './src/components/Signup.js';
import Login from './src/components/Login.js';
import Dashboard from './src/components/Dashboard.js';
import BudgetLists from './src/components/BudgetLists.js';
import Test from './src/components/Test.js';

export default function App() {
  return (
    <BudgetLists />
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
