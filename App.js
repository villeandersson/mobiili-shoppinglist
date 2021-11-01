import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const button1Pressed = () => {
    setData([...data, {key: text}]);
    setText("");
  }
  const button2Pressed = () => {
    setData([])
  }

  return (
      <View style={styles.container}>
        <TextInput style={styles.input}onChangeText={text=>setText(text)}value={text}/>
        <View style={styles.buttons}>
          <Button onPress={button1Pressed} title="Add" />
          <Button onPress={button2Pressed} title="Clear" />
        </View>
        <Text style={{marginTop: 15, color:'blue', fontSize: 18}}>Shopping list</Text>
        <View style={styles.list}>
        <FlatList data ={data}renderItem={({item})=><Text>{item.key}</Text>}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 150
  },
  input: {
    width:200,
    borderColor:'gray',
    borderWidth:1
  },
  buttons: {
    width: 120,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  list: {
    marginTop: 15
  }
});