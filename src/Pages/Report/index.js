import React from 'react'
import { View, Text, StyleSheet, Picker, Button } from 'react-native'

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
//import {Picker} from '@react-native-community/picker';

export default function Report() {
    const currentBalance = 2222.22;

    const entriesGrouped =[
        {key: '1', description: 'Aliamentação', amount: '250'},
        {key: '2', description: 'Combustivel', amount: '15'},
        {key: '3', description: 'Aluguel', amount: '120'},
        {key: '4', description: 'Lazer', amount: '250'},
        {key: '5', description: 'Outros', amount: '1500'}  ,    
      ];

    const entries= [
        {key: '1', description: 'Padaria asaa branca', amount: 10},
        {key: '2', description: 'Supermercado Isadora', amount: 190},
        {key: '3', description: 'Posto Ipiranga', amount: 291},     
      ];
    
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
           <EntrySummary entriesGrouped={entriesGrouped}/>
           <EntryList entries={entries}/>
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
