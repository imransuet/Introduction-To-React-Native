import React,{useEffect, useState} from 'react';
import * as ImagePicker from 'expo-image-picker';

import Screen from './app/components/Screen'



export default function App() {
  const requestPermission =async()=>{
    const {granted} = await ImagePicker.requestCameraRollPermissionsAsync();
    if(!granted)
      alert('You need to enable Permission');
  };

  useEffect(()=>{

    requestPermission();
  },[]);

  return(

 <Screen></Screen>

  );
 
  }
