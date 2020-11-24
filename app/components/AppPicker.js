import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableNativeFeedback, Button, Modal, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import defaultStyles from '../config/styles'
import AppText from './AppText';
import Screen from './Screen'
import PickerItem from './PickerItem';

function AppPicker({icon, placeholder, items}) {

    const [modalVisible, setModalVisible]=useState(false);

    return (
        <React.Fragment>
            {/* instead of writing <React.Fragment></React.Fragment> we can also write <></> */}
        <TouchableNativeFeedback onPress={()=>setModalVisible(true)}>
        <View style={styles.container}>
          {icon &&  <MaterialCommunityIcons name={icon  } 
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
           />}
           <AppText style={styles.text}>{placeholder}</AppText>
           <MaterialCommunityIcons name="chevron-down"
          size={20}
          color={defaultStyles.colors.medium}
         
           />
        </View>
        </TouchableNativeFeedback>
        <Modal 
        visible={modalVisible}
        animationType="slide"
        >
           <Screen>
           <Button
            title="close"
            onPress={()=>setModalVisible(false)}
            />
            <FlatList
              data={items}
              keyExtractor={item=>item.value.toString()}
              renderItem={({item})=><PickerItem
              label={item.label}
              onPress={()=>console.log(item)}
              />}
            />
           </Screen>
           
        </Modal>
        </React.Fragment>
       
    );
}

const styles = StyleSheet.create({
    container:{
            
        backgroundColor:defaultStyles.colors.light,
        borderRadius:25,
        flexDirection:"row",
        width:'100%',
        padding :15,
        marginVertical:10
    },

   
    icon:
    {
      marginRight:10 
    },
    text:{
        flex:1
    }
    
})
export default AppPicker;