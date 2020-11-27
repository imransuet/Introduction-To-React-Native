import React from 'react';
import { View, StyleSheet, Image,  TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons'


function ListItem({title, subTitle, image, ImageComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={colors.light}
        onPress={onPress}>
       <View style={styles.container}>
           {ImageComponent}
        {image && <Image source={image} style={styles.image}/>}
        <View style={styles.detailsContainer}>
    <AppText style={styles.title} numberofLines={1}>{title}</AppText>
            {subTitle && <AppText numberofLines={2}>{subTitle}</AppText>}
        </View>
           <MaterialCommunityIcons
           color={colors.medium}
            name="chevron-right" 
            size={25} />
       </View>
       </TouchableHighlight>
       </Swipeable>
    );
}
const styles = StyleSheet.create({
    container:{
          
        flexDirection:'row',
        paddingRight:15,
        backgroundColor:colors.white

    },
    detailsContainer:{
        alignItems="center",
        flex:1,
     marginLeft:10,
     justifyContent:'center'
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