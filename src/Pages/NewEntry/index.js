import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import BalanceLabel from '../../components/BalanceLabel'

import {saveEntry} from '../../services/Entries'

import {deleteEntry} from '../../services/Entries'

export default function NewEntry({navigation}) {
    const currentBalance = 2065.36;
    const entry = navigation.getParam('entry', {
        id: null,
        amount: 0,
        entryAt: new Date(),
    });
    
    const [amount, setAmount] = useState(`${entry.amount}`);

    const isValid = () => {
        if(parseFloat(amount) !== 0) { //ParseFloat transforma qualquer string em Float
            return true
        }
        return false;
        };

    const onSave = () =>{
        const data = {
            amount: parseFloat(amount),
        }

        console.log("NewEntry :: save", data)
         saveEntry(data, entry);
         onClose();
    }

    const onDelete = () => {
        deleteEntry(entry);
        onClose();
    }

    const onClose = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <BalanceLabel currentBalance={currentBalance}/>
        <View>
            <TextInput style={styles.input}
            onChangeText={text => setAmount(text)}
            value ={amount}
            keyboardType= 'numeric'
            />
            <TextInput style={styles.input}/>
            <Button title="GPS"/>
            <Button title="Camera"/>
        </View>

        <View>
            <Button title="Adicionar"
            onPress={() => {
                isValid() && onSave(); //Só passa pro onSave se o isValid retornar TRUE
            }}
            />
            <Button title="Excluir"
            onPress={onDelete}
            />
            <Button 
            title="Cancelar"
            onPress={onClose}            
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
