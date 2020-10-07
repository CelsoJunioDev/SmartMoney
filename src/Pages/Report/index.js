import React from 'react'
import { View, Text, StyleSheet, Picker, Button } from 'react-native'

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
//import {Picker} from '@react-native-community/picker';

export default function Report() {
    const currentBalance = 2222.22;
    
    return (
        <View style={styles.container}>
           <BalanceLabel currentBalance={currentBalance}/>
           <View>
                <Picker>
                    <Picker.Item label="Todas categorias"/>
                </Picker>
                <Picker>
                    <Picker.Item label="Ultimos 7 dias"/>
                </Picker>
           </View>
           <EntrySummary/>
           <EntryList />
           <View>
               <Button title="Salvar"/>
               <Button title="Fechar"/>
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
