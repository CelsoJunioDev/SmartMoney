import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import BalancePainel from '../../components/BalancePainel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
export default function Main(){

    return (
        <View style={styles.container}>
           <BalancePainel/>
           <EntrySummary/>
           <EntryList/>
           
        </View>
    );

}
const styles = StyleSheet.create({
    container:{
        //flex: 1,
        padding: 10,
    }
});
