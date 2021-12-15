import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons2 from './Icons2.js';
import Bar  from './Bar.js';
import LoginButton from "./TheLoginButton";

const Login = () => {
  return (
    <View >
      <Bar style={styles.bar}/>
      <Card style={styles.card}>
        <Image source={require('./image/Profile.png')}></Image>
      </Card>

      
      <LoginButton />
    </View>
  )
     
  }
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

