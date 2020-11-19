import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View,Image, SafeAreaView, Button } from 'react-native';

export default function App() {


  
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color="orange"
      title="Click Me"
      onPress={()=>alert("Button tapped")}/>
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
