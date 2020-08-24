import React from 'react';
import { View } from 'react-native';
import { Text, Container } from 'native-base';

export default function Dashboard() {
  return (
    <View>
      <Container style={{ marginTop: '30%' }}>
        <Text style = {{fontSize: 48}}>Dashboard</Text>
      </Container>
    </View>
  );
}


