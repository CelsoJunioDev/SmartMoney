import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import EntryListItem from './EntryListItem'

export default function EntryList() {
    return (
        <View>
         <EntryListItem/>
        
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        //flex: 1,
    }
});