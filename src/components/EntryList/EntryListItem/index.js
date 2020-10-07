import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default function EntryListItem() {
    return (
        <View>
            <Text style={styles.title}>Ultimos lançamentos</Text>

  <FlatList
    data={[
      {key: "Padaria asaa branca: $10" },
      {key: "Supermercado Isadora: $190" },
      {key: "Posto Ipiranga: $190" }     
    ]}
    renderItem={({item}) => <Text>{item.key}</Text>}/>
        
        </View>
    )
}

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
