import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function App() {
  return(
 
    <View
    style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }}>
 
     <MaterialCommunityIcons name="email" size={60} color="blue"/>
    </View>

  );
 


}


