import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
 const [age,setAge] = useState(0)
 const [result,setResult] = useState(0)
 const [result1, setResult1] = useState(0)
 
function Calculate(text){
  setAge(text)
  setResult((220-age)*0.65) +'-'+ setResult1((220-age)*0.85);
}


 
  return (
    <View style={styles.container}>
      <Text style ={styles.field}>Age </Text>
      <TextInput style={styles.field} value={age} onChangeText={Text => Calculate(Text)}
      keyboardType='decimal-pad'/>
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}>{result.toFixed(2) +'-'+ result1.toFixed(2)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
