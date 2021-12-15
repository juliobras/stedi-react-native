import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons2 from './Icons2.js';
import Bar  from './Bar.js';
import LoginButton from "./TheLoginButton";

const Login = () => {
  return (
    <View style={styles.container}>
      <Bar style={styles.bar}/>
      <Card style={styles.card}>
        <Image source={require('./image/Profile.png')}></Image>
      </Card>
      <Text> Phone Number </Text>
      <TextInput style={styles.input}/>
      <Text> Texted Code </Text>
      <TextInput style={styles.input}/>
      
      <LoginButton />
    </View>
  )
     
  }

  export default Login

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },

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
      input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
      }
})

