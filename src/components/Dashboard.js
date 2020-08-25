import React from 'react';
import { View } from 'react-native';
import { Text, Container } from 'native-base';

export default function Dashboard({total, subscriptions, greatest}) {
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
    
    <Container>
      <Container>
        {console.log('DASHBOARD')}
        <Text>Total monthly spending: ${total}</Text>
      </Container>
      <Container>
        <Text>
        Subscriptions monthly total: ${subscriptions}
        </Text>
      </Container>
      <Container>
        <Text>
        Greatest Category: {category}
        </Text>
      </Container>
    </Container>
  );
}

