import React, {useState, useEffect} from "react";
import { StyleSheet, TouchableHighlight, Text, View, TextInput, Button } from "react-native";

export default function Form({addHandler}) {
    const [text, setValue] = useState('')

    const onChange = (text) =>{
        setValue(text);
    }
// const [value, setValue] = useState("")
// const onChange = (text) =>{
//     setValue(text)
// }

// useEffect(()=>{
//     console.log(value, 'value')
 //[value])


  return (   
      <View>
          <TextInput style={styles.input} value = {text} onChangeText={onChange} placeholder='Vahag'/>
          <Button title = 'Dobavit zadachu' color = 'green' onPress = {()=>addHandler(text)}/>    
      </View>
  )
}

const styles = StyleSheet.create({
   input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%'
   }
});
