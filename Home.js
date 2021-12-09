import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';

function HomeBar() {
  return(
      <View style={styles.bar}>
          <AppName />
          <LoginButton />  

      </View>
  )
}

const styles = StyleSheet.create({
  bar: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      backgroundColor: '#66FF66',
      height: '15%',
      alignItems: 'center',
      
    },
})

const Home = () => {
  return (
    <View>
      <HomeBar />
      <Icons />
    </View>
  );
};

export default Home;
