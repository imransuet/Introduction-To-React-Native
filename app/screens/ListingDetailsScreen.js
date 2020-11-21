import React from 'react';
import { Image, View ,StyleSheet, Text} from 'react-native';
import AppText from '../components/AppText/Apptext.js';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>

            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Jacket for Sale</AppText>
            <AppText style={styles.price}>100$</AppText>
            </View>
           
            
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer:{
     padding:20,
     

     flexDirection: 'row',
    justifyContent: 'center',
    


    },
    image:{
        width:'100%',
        height:300
    },
    price:{
           color:'blue',
           fontWeight:'bold',
           fontSize:24
    },
    title:{
        fontSize:24,
        fontWeight:'500',
        paddingRight:30
    }
})
export default ListingDetailsScreen;