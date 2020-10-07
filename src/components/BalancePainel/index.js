import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


import BalancePainelLabel from './BalancePainelLabel';
import BalancePainalChart from './BalancePainalChart';

export default function BalancePainel({currentBalance}) {
    return (
        <View style={styles.container}>
           <BalancePainelLabel currentBalance={currentBalance}/>
           <BalancePainalChart/>
           
           
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
       //flex: 1,
    }

});
