import React, { useState } from 'react';
import { Button, Content, Header, Container, Title, Form, Input, Item, Label, View } from 'native-base';
import { StyleSheet, SafeAreaView } from 'react-native';

export default function Signup({ handleLogIn, pageChange }) {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isValidNewUser, setValidNewUser] = useState(false)


  function handleSignUpPress() {
    signin()
  }

  async function signin() {
    let body = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: username,
      password: password
    }

    let response = await fetch('https://localhost:5000/user/signup', {
      method: 'POST',
      body: JSON.stringify(body)
    })

    if (response.status !== 201) return;
    let data = await response.json()

    SecureStore.setItemAsync('token', data.token)
    handleLogIn()
  }

  function handlePageChangePress() {
    pageChange('signup')
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: '#F8F8F8' }}></SafeAreaView>
      <Content>
        <Form style={styles.form}>
          <Header style={styles.title}><Title>Sign up to use Budget Tracker for free</Title></Header>
          <Item floatingLabel>
            <Label>First Name</Label>
            <Input style={styles.formInput} onChangeText={firstName => setFirstName(firstName)} />
          </Item>
          <Item floatingLabel>
            <Label>Last Name</Label>
            <Input style={styles.formInput} onChangeText={lastName => setLastName(lastName)} />
          </Item>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input style={styles.formInput} onChangeText={username => setUsername(username)} />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input style={styles.formInput} onChangeText={email => setEmail(email)} />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input secureTextEntry={true} style={styles.formInput} onChangeText={password => setPassword(password)} />
          </Item>
          <Button primary style={styles.submitButton} onPress={handleSignUpPress}>
            <Title style={styles.submitText}>Submit</Title>
          </Button>
        </Form>

        <Button block primary style={styles.changePageButton} onPress={handlePageChangePress}>
          <Title style={styles.submitText}>Already signed up? Login here</Title>
        </Button>

      </Content>
    </View>


  );
}

const styles = StyleSheet.create({
  submitButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    justifyContent: 'center',
    marginTop: '5%'
  },
  changePageButton: {
    marginTop: '5%'
  },
  submitText: {
    color: 'white'
  },
  formInput: {
    marginBottom: 0
  },
  title: {
    marginTop: '5%',
    backgroundColor: '#F8F8F8'
  },
  form: {
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});


