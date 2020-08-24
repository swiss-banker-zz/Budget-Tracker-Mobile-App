import React, { useState, useEffect } from 'react';
import { Content, Picker, Icon, Header, Title, Body, Right, Left, Button, Form, Item, Label, Input, DatePicker } from 'native-base';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';


export default function BudgetLists() {

  const [items, setItems] = useState([])
  const [isAuthorized, setAuthorized] = useState(true)
  const [total, setTotal] = useState(0)
  const [subscriptions, setSubscriptions] = useState(0)
  const [food, setFood] = useState(0)
  const [housing, setHousing] = useState(0)
  const [entertainment, setEntertainment] = useState(0)
  const [medical, setMedical] = useState(0)
  const [other, setOther] = useState(0)
  const [greatest, setGreatest] = useState("None")

  const [inputCategory, setInputCategory] = useState('')
  const [date, setDate] = useState('')
  const [cost, setCost] = useState('')
  const [item, setItem] = useState('')

  function addItem(event) {
    event.preventDefault()
    // TODO
  }

  return (
    <View style = {styles.container}>
    <SafeAreaView style = {{backgroundColor : '#F8F8F8'}}></SafeAreaView>
    <Content>
    <Form>
          <Item floatingLabel>
            <Label>Item</Label>
            <Input style = {styles.formInput} value={item} onChange={e => setItem(e.target.value)}/>
          </Item>
          <Item floatingLabel>
            <Label>Cost</Label>
            <Input style = {styles.formInput} value={cost} onChange={e => setCost(e.target.value)} />
          </Item>
        
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "black" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={e => setDate(e.target.value)}
            disabled={false}
            />
 
<Picker
    renderHeader={backAction =>
      <Header style={{ backgroundColor: "skyblue" }}>
        <Left>
          <Button transparent onPress={backAction}>
            <Icon name="arrow-back" style={{ color: "#fff" }} />
          </Button>
        </Left>
        <Body style={{ flex: 3 }}>
          <Title style={{ color: "#fff" }}>Categories</Title>
        </Body>
        <Right />
      </Header>}
    mode="dropdown"
    placeholder="Select a category"
    placeholderStyle={{color: "#bfc6ea"}}
    placeholderIconColor="#007aff"
    iosIcon={<Icon name="arrow-down" />}
    selectedValue={inputCategory}
    onValueChange={e => setInputCategory(e.target.value)}
  >
    <Picker.Item label="Subscriptions and Recurring Expenses" value="subscriptions"></Picker.Item>
    <Picker.Item label="Food and Dining" value="food"></Picker.Item>
    <Picker.Item label="Housing and Utilities" value="housing"></Picker.Item>
    <Picker.Item label="Entertainment and Recreation" value="recreation"></Picker.Item>
    <Picker.Item label="Medical and Healthcare" value="medical"></Picker.Item>
    <Picker.Item label="Other" value="other"></Picker.Item>

    </Picker>

    <Button primary style={styles.submitButton} onPress={addItem}>
          <Title style = {styles.submitText}>Submit</Title>
        </Button>
</Form>
      </Content>
    </View>
  );
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center'
  }
});