import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons2 from './Icons2.js';
import Bar  from './Bar.js';

const Login = () => {
  return (
    <View >
      <Bar style={styles.bar}/>
      <Icons2 />
     
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        height: '100%',
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
})
