import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/components/Apptext'

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
  
     <AppText
    
     >I hate this. i dont know why i am doing this</AppText>
  
    </View>

  );
 


}


