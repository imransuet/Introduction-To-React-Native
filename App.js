import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return(
    //margin: how much distance the element wants to keep with other elements around it?
    //padding: how much distance an element wants to keep with the elements inside it?
    <View
    style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }}>
  
      <View
      style={{
  
        backgroundColor:"dodgerblue",
        width:100, 
        height:100,
        padding:10
  


      }}
      >
<View style={{
  backgroundColor:"gold",
  height:50,
  width:50
}}>

</View>

      </View>

      <View
      style={{backgroundColor:"tomato",
      width:100,
      height:100,
      margin :20
    }}
      >

      </View>
  
    </View>

  );
 


}


