/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  FlatList,
  StatusBar,
} from 'react-native';

const App = () => {
  addEntry = () =>{
    const x = 'Celso';
    alert(`Olá ${x}, tudo bem?`); 
  }

  return (
    <View style= {{padding: 10}}>
      <Text 
      style={{fontSize: 22, fontWeight: "bold", marginTop: 10, marginBottom: 10}}>
        Saldo atual: $2.102,45
        </Text>
        <Button 
        onPress={addEntry} 
        title="Adicionar"></Button>

        <Text style={{fontSize: 22, fontWeight: "bold", 
        marginTop: 10, marginBottom: 10}}>Categorias</Text>

  <FlatList
    data={[
      {key: "Aliamentação: $200" },
      {key: "Combustivel: $12" },
      {key: "Aluguel: $120" },
      {key: "Lazer: $250" },
      {key: "Outros: $1200" }      
    ]}
    renderItem={({item}) => <Text>{item.key}</Text>}/>
  
  <Text style={{fontSize: 22, fontWeight: "bold", 
  marginTop: 10, marginBottom: 10}}>Ultimos lançamentos</Text>

  <FlatList
    data={[
      {key: "Padaria asa branca: $10" },
      {key: "Supermercado Isadora: $190" },
      {key: "Posto Ipiranga: $190" }     
    ]}
    renderItem={({item}) => <Text>{item.key}</Text>}/>
        
    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;
