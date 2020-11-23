import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

import colors from '../config/colors'
const menuItems=[
    {
       title:"MY Listing",
       icon:{
           name:"format-list-bulleted",
           backgroundColor:colors.primary
       } 
    },
    {
        title:"My email",
        icon:{
            name:"email",
            backgroundColor:colors.secondary
        } 
     }
]

function AccountScreen(props) {
    return (
        
        <Screen style={styles.screen}>
            <View  style={styles.container}>

            <ListItem
            title="saif"
            subTitle="hello bro"
            image={require('../assets/mosh.jpg')}
            
            />

            </View>
            <View  style={styles.container}>
            <FlatList
            data={menuItems}
            keyExtractor={menuItem=>menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({item})=>
            <ListItem
            title={item.title}
            ImageComponent={
                <Icon
                name={item.icon.name} backgroundColor={item.icon.backgroundColor}
                />

            }
            />
        }
            />

            </View>
            <ListItem
            title="Log out"
            ImageComponent={
                <Icon name="logout" backgroundColor/>
            }
            />
            

        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
       backgroundColor:colors.light 
    }
})
export default AccountScreen;