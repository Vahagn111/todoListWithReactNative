import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Button, Alert, Image, TouchableWithoutFeedback } from "react-native";

const Lesson1 = () => {
  const handleTextPress=()=>console.log('Text pressed');
  const handleButtonPress=()=>Alert.alert("itProgger", "Main message", [
    {text:"da", onPress: ()=> console.log('Yes button')},
    {text:"Otmena", onPress: ()=> console.log('No button')}
  ]);

  return (
    <View style={styles.container}>
        <Text numberOfLines={1} style={styles.text} onPress={handleTextPress}>Hello!!!{'\n'}Hello!!!</Text>
        <Button title='Click me' color='red' onPress={handleButtonPress}/>
        <TouchableWithoutFeedback onPress={handleButtonPress}>
          <Image source={require('../../image/3.png')} style={styles.Image}/>
        </TouchableWithoutFeedback>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color:'red'
  },
  Image:{
    width:400,
    height:300
  }
});

export default Lesson1;
