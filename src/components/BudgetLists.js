import React, { useState, useEffect } from 'react';
import { Content, Picker, Icon, Header, Title, Body, Right, Left, Button, Form, Item, Label, Input, DatePicker } from 'native-base';
import { StyleSheet, SafeAreaView, View, Text, TextInput, ScrollView } from 'react-native';
import { v4 as uuid4 } from 'uuid';
import Dashboard from './Dashboard.js';
import BudgetItems from './BudgetItems.js';

export default function BudgetLists() {

  const [items, setItems] = useState([])
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

  // useEffect(() => {
  //   getItems()
  // }, [])

  // async function getItems() {
  //   let headers = new Headers()
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('Accept', 'application/json');
  //   headers.append('Origin', 'http://127.0.0.1:3000');

  //   let response = await fetch('http://127.0.0.1:5000/user/budget', {
  //     mode: 'cors',
  //     method: 'GET',
  //     headers: headers,
  //     credentials: 'include'
  //   })



  //   let data = await response.json()
  //   setItems(data.budget_items)
  //   setTotal(data.total_cost)
  //   setSubscriptions(data.category_costs['subscriptions'])
  //   setFood(data.category_costs['food'])
  //   setHousing(data.category_costs['housing'])
  //   setEntertainment(data.category_costs['entertainment'])
  //   setMedical(data.category_costs['medical'])
  //   setOther(data.category_costs['other'])
  //   setGreatest(data.greatest_category)
  // }



  function addItem(e) {
    e.preventDefault()
    // console.log('asdfjkl;')
    // console.log(item)
    // console.log(cost)
    // console.log(inputCategory)
    // console.log(date)
    let itemArray = [...items];
    const key = Date.now();
    if (item !== "" && cost !== "" && cost > 0.00 && inputCategory !== "" && date !== "") {
      console.log("creapt nateve")
      itemArray.unshift({
        name: item,
        cost: cost,
        category: inputCategory,
        date: date,
        key: key
      });

      setItems(itemArray);
      setCosts(itemArray);

      // addItemToDB(key)
      setItem('');
      setCost('');
      setInputCategory('');
      setDate('');

    }
  }

  // async function addItemToDB(key) {

  //   const data = {
  //     name: item,
  //     cost: cost,
  //     date: Date.now(),
  //     category: inputCategory,
  //     key: key
  //   }


  //   let headers = new Headers()
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('Accept', 'application/json');
  //   headers.append('Origin', 'http://127.0.0.1:3000');

  //   let response = await fetch('http://127.0.0.1:5000/user/budget/new', {
  //     mode: 'cors',
  //     method: 'POST',
  //     headers: headers,
  //     credentials: 'include',
  //     body: JSON.stringify(data)
  //   })

  //   return response.status
  // }

  function setCosts(items) {
    let totalCost = 0.0;
    let subTotal = 0.0;
    let foodTotal = 0.0;
    let housingTotal = 0.0;
    let entertainmentTotal = 0.0;
    let medicalTotal = 0.0;
    let otherTotal = 0.0;
    items.forEach(item => {
      totalCost = parseFloat(totalCost) + parseFloat(item.cost)
      switch (item.category) {
        case "subscriptions":
          subTotal = parseFloat(subTotal) + parseFloat(item.cost)
          break;
        case "food":
          foodTotal = parseFloat(foodTotal) + parseFloat(item.cost)
          break;
        case "housing":
          housingTotal = parseFloat(housingTotal) + parseFloat(item.cost)
          break;
        case "entertainment":
          entertainmentTotal = parseFloat(entertainmentTotal) + parseFloat(item.cost)
          break;
        case "medical":
          medicalTotal = parseFloat(medicalTotal) + parseFloat(item.cost)
          break;
        case "other":
          otherTotal = parseFloat(otherTotal) + parseFloat(item.cost)
          break;
        default:
          break;
      }
    })
    setTotal(totalCost)
    setSubscriptions(subTotal)
    setFood(foodTotal)
    setHousing(housingTotal)
    setEntertainment(entertainmentTotal)
    setMedical(medicalTotal)
    setOther(otherTotal)

    let currentMax = 0;
    let maxCategory = "none";
    if (subTotal > currentMax) {
      currentMax = subTotal;
      maxCategory = "subscriptions";
    }
    if (foodTotal > currentMax) {
      currentMax = foodTotal;
      maxCategory = "food";
    }
    if (housingTotal > currentMax) {
      currentMax = housingTotal;
      maxCategory = "housing";
    }
    if (entertainmentTotal > currentMax) {
      currentMax = entertainmentTotal;
      maxCategory = "entertainment";
    }
    if (medicalTotal > currentMax) {
      currentMax = medicalTotal;
      maxCategory = "medical";
    }
    if (otherTotal > currentMax) {
      currentMax = otherTotal;
      maxCategory = "other";
    }
    setGreatest(maxCategory);
  }

  function deleteItem(key) {
    let filteredItems = [...items];

    filteredItems = items.filter(item => key !== item.key
    );
    setItems(filteredItems)
    setCosts(filteredItems);

    // const data = {
    //   key: key
    // };

    // let headers = new Headers()
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append('Origin', 'http://127.0.0.1:3000');

    // fetch('http://127.0.0.1:5000/user/budget/delete', {
    //   mode: 'cors',
    //   method: 'DELETE',
    //   credentials: 'include',
    //   body: JSON.stringify(data),
    //   headers: headers
    // })
    //   .then(response => {
    //     if (response.status === 401) {
    //       return Promise.reject();
    //     }
    //     else return response.json()
    //   })
    //   .then(data => console.log(data))
  }

  return (
    <Content style={styles.container}>
      <SafeAreaView style={{ backgroundColor: '#F8F8F8' }}></SafeAreaView>


      <Form style={styles.form}>


        <Header style={styles.title}><Title>Start by adding items below</Title></Header>

        <Label style={styles.formLabel}>Item</Label>
        <TextInput style={styles.formInput} onChangeText={item => { console.log(item); setItem(item) }} />


        <Label style={styles.formLabel}>Cost</Label>
        <TextInput style={styles.formInput} value={cost} onChangeText={cost => setCost(cost)} />






        <DatePicker
          defaultDate={new Date(2018, 4, 4)}
          minimumDate={new Date(2018, 1, 1)}
          maximumDate={new Date(2018, 12, 31)}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          value={date}
          animationType={"fade"}
          androidMode={"default"}
          placeHolderText="Select date"
          textStyle={{ color: "black" }}
          placeHolderTextStyle={{ color: "#d3d3d3" }}
          onDateChange={(value, index) => setDate(value)}
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
          value={inputCategory}
          placeholder="Select a category"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          iosIcon={<Icon name="arrow-down" />}
          selectedValue={inputCategory}
          onValueChange={(value, index) => setInputCategory(value)}
        >
          <Picker.Item label="Subscriptions and Recurring Expenses" value="subscriptions"></Picker.Item>
          <Picker.Item label="Food and Dining" value="food"></Picker.Item>
          <Picker.Item label="Housing and Utilities" value="housing"></Picker.Item>
          <Picker.Item label="Entertainment and Recreation" value="recreation"></Picker.Item>
          <Picker.Item label="Medical and Healthcare" value="medical"></Picker.Item>
          <Picker.Item label="Other" value="other"></Picker.Item>
        </Picker>

        <Button primary style={styles.submitButton} onPress={addItem}>
          <Title style={styles.submitText}>Submit</Title>
        </Button>
      </Form>


      <Dashboard
        total={total}
        subscriptions={subscriptions}
        greatest={greatest} />

      <BudgetItems
        items={items}
        deleteItem={deleteItem}
        subscriptions={subscriptions}
        food={food}
        housing={housing}
        entertainment={entertainment}
        medical={medical}
        other={other}
      />

    </Content>
  );
}


const styles = StyleSheet.create({
  title: {
    marginTop: '5%'
  },
  container: {
    flex: 1
  },
  formLabel: {
    marginTop: '2%',
    marginLeft: '5%'
  },
  formInput: {
    paddingTop: '2%',
    paddingBottom: '2%',
    marginTop: '2%',
    marginBottom: '2%',
    backgroundColor: 'lightgrey'
  },
  form: {
    justifyContent: 'center',
  },
  submitButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    justifyContent: 'center',
    marginTop: '5%'
  }

});