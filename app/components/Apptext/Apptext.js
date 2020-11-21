import React from 'react';
import {Text ,StyleSheet, Platform } from 'react-native';

import styles from './styles';
function Apptext({children}) {
    return (
    <Text style={styles.text}>{children}</Text>
    );
}


export default Apptext;