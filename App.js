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
   }}>
     <View  style ={{
     backgroundColor:"blue",

     flex:.5,
   }}>
     <View  style ={{
     backgroundColor:"tomato",

     flex:.5,
   }}>
    
     </View>
    
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
