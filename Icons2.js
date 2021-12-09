import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';

const Icons = () => {
  return (
    
    
      <Card style={styles.card}>
        <Image source={require('./image/Profile.png')}></Image>
      </Card>
    
    
  );
};

export default Icons;

const styles = StyleSheet.create({

  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    margin: '12em',
  },

});