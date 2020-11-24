import React,{useState} from 'react';
import { Text, TextInput, View} from 'react-native';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Screen from './app/components/Screen'

export default function App() {
const[firstName, setFirstname]=useState('');

  return(

   <Screen>
 <Text>{firstName}</Text>
     <TextInput 
     secureTextEntry={true}
     placeholder="First Name"
     onChangeText={text=>setFirstname(text)}
     style={{

      borderBottomColor:"#ccc",
      borderBottomWidth:1
     }}/>
   </Screen>

  );
 
  }
