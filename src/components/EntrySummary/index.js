import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';

export default function EntrySummary() {
    return (
        <View style={styles.container}>
            <EntrySummaryList/>
            <EntrySummaryChart/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //flex: 1,
    }
})
