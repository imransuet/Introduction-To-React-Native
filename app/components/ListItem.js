import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from './AppText/Apptext.js';

function ListItem({title, subTitle, image}) {
    return (
       <View style={styles.container}>
        <Image source={image} style={styles.image}/>
        <View>
    <AppText style={styles.title}>{title}</AppText>
            <AppText>{subTitle}</AppText>
        </View>
           
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
          
        flexDirection:'row'

    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10
    },
    title:{
        color:'red',
           fontWeight:'bold',
           fontSize:20
    }
})
export default ListItem;