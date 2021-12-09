import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons2 from './Icons2.js';
import Bar  from './Bar.js';
import LoginButton from "./TheLoginButton";
import {TextInput} from "react-native";

const Login = () => {
  return (
    <View >
      <Bar style={styles.bar}/>
      <Card style={styles.card}>
        <Image source={require('./image/Profile.png')}></Image>
      </Card>

      <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <LoginButton />
     
     
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({

    Login: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        height: '100%',
        alignItems: 'center',
        
      },
      bar: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        backgroundColor: '#66FF66',
        height: '15%',
        alignItems: 'center',
        
      },
})

