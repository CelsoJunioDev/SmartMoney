import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import BalanceLabel from '../../components/BalanceLabel'

export default function NewEntry({navigation}) {
    const currentBalance = 5000.00;
    return (
        <View style={styles.container}>
            <BalanceLabel currentBalance={currentBalance}/>
        <View>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <Button title="GPS"/>
            <Button title="Camera"/>
        </View>

        <View>
            <Button title="Adicionar"/>
            <Button 
            title="Cancelar"
            onPress={() => navigation.goBack()}            
            />
        </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        //flex: 1,
        padding: 10,
    },
    label:{
        fontSize: 12,
    },
    value:{
        fontSize: 18,
    },
    input:{
        borderColor: "#000",
        borderWidth: 1,
    }
});