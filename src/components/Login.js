import React, { useState } from 'react';
import { Button, Content, Header, Container, Title, Form, Input, Item, Label } from 'native-base';
import { StyleSheet, SafeAreaView, View } from 'react-native';

export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isValidLogin, setValidLogin] = useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    // TODO
  }

  function handleChange() {
    // TODO
  }
  
  return (
    <View style = {styles.container}>
    <SafeAreaView style = {{backgroundColor : '#F8F8F8'}}></SafeAreaView>
    <Content>
      <Form >
      <Header style={styles.title}><Title>Sign in to your account</Title></Header>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input style = {styles.formInput}/>
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input secureTextEntry={true} style = {styles.formInput} />
          </Item>
        <Button primary style={styles.submitButton} onPress={handleSubmit}>
          <Title style = {styles.submitText}>Submit</Title>
        </Button>
      </Form>
      </Content>
      </View>
  );
}


const styles = StyleSheet.create({
  submitButton : {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    justifyContent: 'center',
    marginTop: '5%'
  },
  submitText : {
    color: 'white'
  },
  formInput : {
    marginBottom: 0
  },
  title : {
    marginTop : '5%',
    backgroundColor: '#F8F8F8'
  },
  container : {
    flex: 1,
    justifyContent: 'center'
  }
});