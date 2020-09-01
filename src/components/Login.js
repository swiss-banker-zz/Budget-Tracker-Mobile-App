import React, { useState } from "react";
import {
  Button,
  Content,
  Header,
  Container,
  Title,
  Form,
  Input,
  Item,
  Label,
} from "native-base";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { encode as btoa } from "base-64";
import * as SecureStore from "expo-secure-store";

export default function Login({ handleLogIn, pageChange }) {
  const fetch = require("node-fetch");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidLogin, setValidLogin] = useState(false);

  function handleLogInPress() {
    login();
    // handleLogIn()
  }

  async function login() {
    console.log("LOGIn");
    let response = await fetch("http://127.0.0.1:5000/user/login", {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(username + ":" + username),
      },
    });
    if (response.status !== 200) {
      return;
    }
    let data = await response.json();
    await SecureStore.setItemAsync("token", data.token);
    handleLogIn();
  }

  function handlePageChangePress() {
    pageChange("login");
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "#F8F8F8" }}></SafeAreaView>
      <Content>
        <Form>
          <Header style={styles.title}>
            <Title>Sign in to your account</Title>
          </Header>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input
              style={styles.formInput}
              onChangeText={(username) => setUsername(username)}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              style={styles.formInput}
              onChangeText={(password) => setPassword(password)}
            />
          </Item>
          <Button
            primary
            style={styles.submitButton}
            onPress={handleLogInPress}
          >
            <Title style={styles.submitText}>Submit</Title>
          </Button>
        </Form>
        <Button
          block
          primary
          style={styles.changePageButton}
          onPress={handlePageChangePress}
        >
          <Title style={styles.submitText}>Not registered? Sign up here</Title>
        </Button>
      </Content>
    </View>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 100,
    justifyContent: "center",
    marginTop: "5%",
  },
  changePageButton: {
    marginTop: "5%",
  },
  submitText: {
    color: "white",
  },
  formInput: {
    marginBottom: 0,
  },
  title: {
    marginTop: "5%",
    backgroundColor: "#F8F8F8",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
