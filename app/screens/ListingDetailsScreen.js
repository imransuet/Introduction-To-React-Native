import React from 'react';
import { Image, View ,StyleSheet, Text} from 'react-native';
import AppText from '../components/AppText/Apptext.js';
import ListItem from '../components/ListItem'
function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
             
             <View  style={styles.setrow}>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Jacket for Sale</AppText>
            <AppText style={styles.price}>100$</AppText>

        
            </View>
            <View>
            <ListItem 
            image={require("../assets/mosh.jpg")}
            title="Moshi"
            subTitle="5 Listing"
 
            />
            </View>
            </View>
           
            
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer:{
     padding:10,
     

     
    


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
    },
    setrow:{
        paddingTop:15,
        flexDirection:'row',
        right:5
    }
})
export default ListingDetailsScreen;