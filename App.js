import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  SafeAreaView, Button, View, Dimensions } from 'react-native';
import { useDeviceOrientation} from '@react-native-community/hooks'

export default function App() {

const {landscape}= useDeviceOrientation();
  
  return (
   <View style ={{
     backgroundColor:"red",

     flex:1,
     flexDirection:"row-reverse"
   }}>
     <View  style ={{
     backgroundColor:"blue",

    width:200,
    height:100,
   }}>
     
    
     </View>
     <View  style ={{
     backgroundColor:"tomato",

     width:100,
    height:300,
   }}>
    
     </View>
    
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
   
  },
});
