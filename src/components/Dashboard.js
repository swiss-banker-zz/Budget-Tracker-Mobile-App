import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Container, ListItem, Icon, Left, Body, Right } from 'native-base';

export default function Dashboard({ total, subscriptions, greatest }) {
  let categoriesMap = new Map()
  categoriesMap.set('subscriptions', 'Subscriptions and Recurring Expenses')
  categoriesMap.set('food', 'Food and Dining')
  categoriesMap.set('housing', 'Housing and Utilities')
  categoriesMap.set('entertainment', 'Entertainment and Recreation')
  categoriesMap.set('medical', 'Medical and Healthcare')
  categoriesMap.set('other', 'Other')
  categoriesMap.set('none', 'None')
  let category = categoriesMap.get(greatest)

  return (


    <View style={styles.dashboard}>
      <ListItem icon>
        <Left>
          <Icon type="Foundation" name="dollar-bill" />
        </Left>
        <Body>
          <Text>Total Monthly Spending</Text>
        </Body>
        <Right>
          <Text>${total}</Text>
        </Right>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon type="Fontisto" name="calculator" />
        </Left>
        <Body>
          <Text>Subscriptions Monthly Total</Text>
        </Body>
        <Right>
          <Text>${subscriptions}</Text>
        </Right>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon type="Foundation" name="graph-bar" />
        </Left>
        <Body>
          <Text>Greatest Category</Text>
        </Body>
        <Body>
          <Text>Subscriptions and recurring expenses</Text>
        </Body>
      </ListItem>
    </View>


  );
}

const styles = StyleSheet.create({
  dashboard: {
    marginTop: '15%',
    marginBottom: '15%',

  }



})

