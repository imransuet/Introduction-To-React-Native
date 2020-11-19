import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View,Image, SafeAreaView } from 'react-native';

export default function App() {


  
  return (
    <SafeAreaView style={styles.container}>
      <Text >Open up App.</Text>
      <TouchableHighlight onPress={()=>console.log("Image Tapped")}>
      <Image 
    
    source={{
      
      width:200,
      height:300,
      uri:"https://picsum.photos/200/300"}}/>

      </TouchableHighlight>
      
      <StatusBar style="auto" />
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
