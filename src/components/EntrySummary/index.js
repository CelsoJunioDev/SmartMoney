import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';

export default function EntrySummary({entriesGrouped}) {
    return (
        <View style={styles.container}>
            <EntrySummaryChart/>
            <EntrySummaryList entriesGrouped={entriesGrouped}/>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //flex: 1,
    }
})
