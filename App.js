import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View,Image,Alert, SafeAreaView, Button } from 'react-native';

export default function App() {


  
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color="orange"
      title="Click Me"
      onPress={()=>Alert.alert("Button tapped","My message",[{text:"Yes", onPress:()=>console.log("Yes Pressed")},
      {text:"No", onPress:()=>console.log("No Pressed")}])}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
