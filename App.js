import React,{useState} from 'react';

import Screen from './app/components/Screen'
import AppTextInput from './app/components/AppTextInput';
import { Switch } from 'react-native';
import AppPicker from './app/components/AppPicker';

export default function App() {

const[category, setCategory]=useState(categories[0]);

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
 
<AppPicker 
selectedItem={category}
onSelectItem={item=>setCategory(item)}
items={categories} icon="apps" placeholder="Category"/>
<AppTextInput icon="email"  placeholder="email"/>
   </Screen>

  );
 
  }
