import React, { useState } from 'react';
import { Button, Content, Header, Container, Title, Form, Input, Item, Label, View } from 'native-base';
import { StyleSheet, SafeAreaView } from 'react-native';

export default function Signup({ handleSignUp, pageChange }) {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isValidNewUser, setValidNewUser] = useState(false)

  function handleSignUpPress() {
    handleSignUp()
  }

  function handlePageChangePress() {
    pageChange('signup')
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO
  }

  function handleChange() {
    // TODO
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: '#F8F8F8' }}></SafeAreaView>
      <Content>
        <Form style={styles.form}>
          <Header style={styles.title}><Title>Sign up to use Budget Tracker for free</Title></Header>
          <Item floatingLabel>
            <Label>First Name</Label>
            <Input style={styles.formInput} />
          </Item>
          <Item floatingLabel>
            <Label>Last Name</Label>
            <Input style={styles.formInput} />
          </Item>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input style={styles.formInput} />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input style={styles.formInput} />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input secureTextEntry={true} placeholder="Password" style={styles.formInput} />
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


