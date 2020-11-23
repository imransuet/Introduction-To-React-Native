import React from 'react';
import { View} from 'react-native';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem';
export default function App() {
  return(
 
   <Screen>

     <ListItem
     title="My Title"
     subTitle="My Sub"
    ImageComponent={<Icon name="email"/>}
     />
   </Screen>

  );
 
  }
