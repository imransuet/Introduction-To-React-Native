import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
    <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText>{subTitle}</AppText>}
        </View>
           
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