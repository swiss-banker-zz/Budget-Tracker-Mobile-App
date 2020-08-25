import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default function Test() {

    const [text, setText] = useState('Hello World')

    function handlePress() {
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json')
        headers.append('Origin', 'exp://yh-rak.hrayl.budget-tracker-mobile-app.exp.direct:80')

        fetch('http://127.0.0.1:5000/test', {
            headers : headers,
            mode : 'cors',
            method : 'GET'
        })
        .then(response => response.json())
        .then(data => setText(data.text))
        .catch(error => setText('*** ERROR ***'))
    }

    return (
        <View style = {styles.container}>
            <Button title = 'What am I doing' onPress = {handlePress} />
            <Text style = {styles.text}>{text}</Text>
        </View>
    )


}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        textAlign : 'center',
        justifyContent: 'center'
    },
    text : {
        textAlign : 'center',
        fontSize : 48
    }
})