import React from 'react';
import { Text, Container, Body, Left, Right, List, ListItem, Icon, Button } from 'native-base';

export default function BudgetItems({ items, deleteItem, subscriptions, food, housing, entertainment, medical, other }) {

  function deleteEntry(key) {

    deleteItem(key);

  }


  function createTasks(item) {
    return (
      <ListItem key={Date.now()}>
        <Left>
          <Text>{item.name}</Text>
        </Left>
        <Body>
          <Text>${item.cost}</Text>
        </Body>
        <Right>
          <Button onPress={() => deleteEntry(item.key, item.category, item.cost)}>
            <Icon name='logo-apple' />
          </Button>
        </Right>
      </ListItem>
    )
  }

  let entries = items;
  let subBoxes = [];
  let foodBoxes = [];
  let housingBoxes = [];
  let entertainmentBoxes = [];
  let medicalBoxes = [];
  let otherBoxes = [];

  entries.forEach(item => {
    if (item.category === "subscriptions") {
      subBoxes.unshift(item);
    } else if (item.category === "food") {
      foodBoxes.unshift(item);
    } else if (item.category === "housing") {
      housingBoxes.unshift(item);
    } else if (item.category === "entertainment") {
      entertainmentBoxes.unshift(item);
    } else if (item.category === "medical") {
      medicalBoxes.unshift(item);
    } else if (item.category === "other") {
      otherBoxes.unshift(item);
    }
  });

  let subItems = subBoxes.map(createTasks)
  let foodItems = foodBoxes.map(createTasks)
  let housingItems = housingBoxes.map(createTasks)
  let entertainmentItems = entertainmentBoxes.map(createTasks)
  let medicalItems = medicalBoxes.map(createTasks)
  let otherItems = otherBoxes.map(createTasks)

  return (




    <List>
      <ListItem itemDivider>
        <Text>Subscriptions and Recurring Expenses: ${subscriptions}</Text>
      </ListItem>
      {subItems}

      <ListItem itemDivider>
        <Text>Food and Dining: ${food}</Text>
      </ListItem>
      {foodItems}

      <ListItem itemDivider>
        <Text>Housing and Utilities: ${housing}</Text>
      </ListItem>
      {housingItems}

      <ListItem itemDivider>
        <Text>Entertainment and Recreation: ${entertainment}</Text>
      </ListItem>
      {entertainmentItems}

      <ListItem itemDivider>
        <Text>Medical and Healthcare: ${medical}</Text>
      </ListItem>
      {medicalItems}

      <ListItem itemDivider>
        <Text>Other: ${other}</Text>
      </ListItem>
      {otherItems}
    </List>


  );
}


