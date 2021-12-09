import React, { useCallback } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "./Home";

function LoginButton() {
    return(
      <View>
      <Button
      title="Log In"
      onPress={() => Alert.alert('Simple Button pressed')}
      
    />
      </View>
    )
  }

export default LoginButton;