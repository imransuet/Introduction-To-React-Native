import React from 'react';
import {View, StyleSheet} from 'react-native'
import Apptext from './Apptext'
function Card({title,subTitle, image}) {
    return (
        <View style={styles.card}>
           <Image style={styles.image} source={image}/>
           <View
           style={styles.detailsContainer}
           >
           <Apptext style={ styles.title}>{title}</Apptext>
    <Apptext style={ styles.subTitle}>{subTitle}</Apptext>
           </View>
    
        </View>
    );
}
const styles = StyleSheet.create({
    card:{

        borderRadius:15,
        backgroundColor:'#fff',
        marginBottom:20

    },
    imgae:{
        width:'100%',
        height:200

    },
    detailsContainer:{
        paddingTop:20
    },
    title:{
        marginBottom:7
    },
    subTitle:{
      color:'green',
      fontWeight:'bold'
    }
})
export default Card;