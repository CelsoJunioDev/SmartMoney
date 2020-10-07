import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import BalancePainel from '../../components/BalancePainel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import NewEntry from '../NewEntry';
export default function Main({navigation}){
    const currentBalance = 2064.355;

    const entries= [
        {key: '1', description: 'Padaria asaa branca', amount: 10},
        {key: '2', description: 'Supermercado Isadora', amount: 190},
        {key: '3', description: 'Posto Ipiranga', amount: 290},     
      ];

    return (
        <View style={styles.container}>
           <BalancePainel currentBalance={currentBalance}/>
           <Button title="Adicionar" 
           onPress={() => navigation.navigate('NewEntry')}/>
           <EntrySummary/>
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
