import React,{useState} from 'react';

import Screen from './app/components/Screen'
import AppTextInput from './app/components/AppTextInput';
import { Switch } from 'react-native';
import AppPicker from './app/components/AppPicker';

export default function App() {
const[isNew, setIsNew]=useState(false);

const categories=[
  {
    label:"Furniture", value:1
  },
  {
    label:"Clothing", value:2
  },
  {
    label:"Camera", value:3
  },
];
  return(

   <Screen>
 
<AppPicker items={categories} icon="apps" placeholder="Category"/>
<AppTextInput icon="email"  placeholder="email"/>
   </Screen>

  );
 
  }
