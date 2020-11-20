import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  SafeAreaView, Button, View, Dimensions } from 'react-native';
import { useDeviceOrientation} from '@react-native-community/hooks'

export default function App() {

const {landscape}= useDeviceOrientation();
  
  return (
   <View style ={{
     backgroundColor:"#ffe",

     flex:1,
     flexDirection:"row",
     justifyContent:"center",
     alignItems:"center",
     flexWrap:"nowrap"

   }}>
     <View  style ={{
     backgroundColor:"blue",

    width:100,
    height:100,
   }}>
     
    
     </View>
     <View  style ={{
     backgroundColor:"magenta",

    width:100,
    height:100,
   }}>
     
    
     </View>
     <View  style ={{
     backgroundColor:"tomato",

     width:100,
    height:100,
    top:100,
    left:200,
    position:"absolute"
   }}>
    
     </View>
     <View  style ={{
     backgroundColor:"grey",

     width:100,
    height:100,
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
