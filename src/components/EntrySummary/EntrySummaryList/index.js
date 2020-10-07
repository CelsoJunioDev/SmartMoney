import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function EntrySummaryList() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>

  <FlatList
    data={[
      {key: "Aliamentação: $200" },
      {key: "Combustivel: $12" },
      {key: "Aluguel: $120" },
      {key: "Lazer: $250" },
      {key: "Outros: $1200" }      
    ]}
    renderItem={({item}) => <Text>{item.key}</Text>}/>
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

