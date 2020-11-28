import React, { useEffect } from 'react';
import { Alert, BackHandler, StyleSheet, View, Image } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


function ImageInput({imageUri, onChangeImage}) {

    useEffect(()=>{
        requestPermission();
    }, [])

    const requestPermission =async()=>{
        const {granted} = await ImagePicker.requestCameraRollPermissionsAsync();
        if(!granted)
          alert('You need to enable Permission');
      };

    const handlePress=()=>{
        if(!imageUri)selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete your image', [
        {text:'YES',onPress:()=>onChangeImage(null)},
         {text:'No'}

        ])
    }
    
    const selectImage=async()=>
{
  try {
    const result= await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        // Here, 0.5 means Image quality, 1 is highest and 0 is lowest quality
        quality:0.5    

    });

    if(!result.cancelled)
    onChangeImage(result.uri)
  } catch (error) {
    console.log('Error reading an image', error)
  }

}

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        <View
        style={styles.container}
        >

            {!imageUri && <MaterialCommunityIcons style={styles.image} color={colors.medium} name="camera" size={40}/>}
            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height:100,
        width:100,
        overflow:'hidden'


    },
    image:{
        width:'100%',
        height:'100%'

    }
})
export default ImageInput;