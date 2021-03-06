import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function EntrySummaryList({entriesGrouped}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>

  <FlatList
    data={entriesGrouped}
    renderItem={({item}) => (
    <Text>
        -{item.description} - ${item.amount}
    </Text>
    )}
    />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //flex: 1,
    },
    title: {
        fontSize: 22, 
        fontWeight: "bold", 
        marginTop: 10, 
        marginBottom: 10
    }
})

