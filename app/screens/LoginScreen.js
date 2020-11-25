import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen'

function LoginScreen(props) {
const[email, setEmail]=useState();
const[password, setPassword]=useState();

    return (
     <Screen style={styles.container}>

         <Image 
         style={styles.logo}
         source={require("../assets/logo-red.png")}  />
         <AppTextInput
         
         autoCapitalize="none"
         autoCorrect={false}
         icon="email"
         keyboardType="email-address"
         onChangeText={text=>setEmail(text)}
         placeholder="Email"
         //   This is only works in IOS
         textContentType="emailAddress" 
        
         />
         <AppTextInput
         autoCapitalize="none"
         autoCorrect={false}
         icon="lock"
         onChangeText={text=>setPassword(text)}
         placeholder="Password"
         //   This is only works in IOS
         textContentType="password" 
         secureTextEntry
         />
         <AppButton title="Login"
         onPress={()=>console.log(email, password)}
         />
     </Screen>
    );
}

const styles = StyleSheet.create({

    container:{
       padding:10
    },
   logo:{
     width:80,
     height:80,
     alignSelf:'center',
     marginBottom:20,
     marginTop:50

   } 
})

export default LoginScreen;