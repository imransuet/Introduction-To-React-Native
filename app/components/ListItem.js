import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title, subTitle, image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={colors.light}
        onPress={onPress}>
       <View style={styles.container}>
        <Image source={image} style={styles.image}/>
        <View>
    <AppText style={styles.title}>{title}</AppText>
            <AppText>{subTitle}</AppText>
        </View>
           
       </View>
       </TouchableHighlight>
       </Swipeable>
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