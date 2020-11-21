import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';

function AppButton({title}) {
    return (
        <View style={styles.button}>
          <Text  style={styles.text}>{title}</Text>  
        </View>
    );
}
const styles = StyleSheet.create({
    
    button:{

    backgroundColor:'red',
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    padding:15,
    width:'100%'

    },
    text:{
        color:'blue',
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold'

    }
})
export default AppButton;