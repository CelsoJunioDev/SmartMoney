import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterLabel = ({ counter }) => {
  return <Text style={styles.text}>{counter}</Text>;
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const count = () => {
    setCounter(counter => counter + 1);
  };

  useEffect(() => {
    setInterval(() => {
      count(); //executa a função
    }, 1000); //a cada 1000 milisegundos
  }, []);

  return (
    <View>
      <CounterLabel counter={counter} />
      <Button title="Contar" onPress={() => count()} />
    </View>
  );
};

const Teste = () => {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  text: {
    fontSize: 38,
    textAlign: "center"
  }
});

export default Teste;
