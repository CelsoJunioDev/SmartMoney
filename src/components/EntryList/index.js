import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import EntryListItem from './EntryListItem'
import {getEntries} from '../../services/Entries'

export default function EntryList() {
    [entries, setEntries] = useState([]);

    useEffect(() => {
    async function loadEntries() {
        const data = await getEntries();
        setEntries(data);
    }
    loadEntries();

    console.log('EntryList :: userEffect');
}, []);

    return (
        <View>
         
         <Text style={styles.title}>Ultimos lançamentos</Text>
    <FlatList
    data={entries}
    renderItem={({item}) => (
    <Text>
        - {item.description} - ${item.amount}
    </Text>
        )}
        />
        
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        //flex: 1,
    },
    title: {
        fontSize: 22, 
        fontWeight: "bold", 
        marginTop: 10, 
        marginBottom: 10
    }
});