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
      onPress={login2FA()}
      
    />
      </View>
    )
  }

//   function setusercode() {
//     oneTimePassword = $("#usercode").val();
//     var valid=codeRegEx.exec(oneTimePassword);
//     // if (!valid){
//     //     alert('Must be 4 digits.');
//     // }
// }

// function setphone() {
//     phoneNumber = $("#phonenumber").val();
//     var valid=phoneRegEx.exec(phoneNumber);
//     // if (!valid){
//     //     alert('Must be 6 digits.');
//     // }
// }

// function generate2FA(){
//     setphone();
//     $.ajax({
//         // type: 'GET',
//         type: 'POST',
//         url: getApiRoot() + '/twofactorlogin/' + phoneNumber,
//         contentType: "application/text",
//         dataType: 'text'
//     });

// }

// function login2FA(){
//     setusercode();
//     setphone();
//     $.ajax({
//         type: 'POST',

//         url: getApiRoot() + '/twofactorlogin',
//         data: JSON.stringify({phoneNumber, oneTimePassword}),
//         success: function(data) {
//             window.location.href = "/timer.html#"+data;//add the token to the url
//         },
//         error: console.log(JSON.stringify({phoneNumber, oneTimePassword})),
//         contentType: "application/text",
//         dataType: 'text'
//     });

// }
export default LoginButton;