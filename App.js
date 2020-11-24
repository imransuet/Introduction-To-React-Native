import React,{useState} from 'react';

import Screen from './app/components/Screen'
import AppTextInput from './app/components/AppTextInput';
import { Switch } from 'react-native';
import AppPicker from './app/components/AppPicker';

export default function App() {
const[isNew, setIsNew]=useState(false);
  return(

   <Screen>
 
<AppPicker icon="icon" placeholder="Category"/>
<AppTextInput icon="email"  placeholder="email"/>
   </Screen>

  );
 
  }
