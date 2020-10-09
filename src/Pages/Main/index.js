import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import BalancePainel from '../../components/BalancePainel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import NewEntry from '../NewEntry';

import {saveEntry} from '../../services/Entries'

export default function Main({navigation}){
    const currentBalance = 2064.355;
    

  

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
           <BalancePainel currentBalance={currentBalance}/>
           <Button title="Adicionar" 
           onPress={() => navigation.navigate('NewEntry')}/>
           <EntrySummary entriesGrouped={entriesGrouped}/>
           <EntryList entries={entries}/>
           
        </View>
    );

}
const styles = StyleSheet.create({
    container:{
        //flex: 1,
        padding: 10,
    }
});
