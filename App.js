import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Lesson1 from "./src/components/lesson1/Lesson1";
import Header from "./src/components/lesson1/Header"
import ListItem from "./src/components/lesson1/ListItem"
import Form from "./src/components/lesson1/Form"

export default function App() {
const [ListOfItems, setListOfItems] = useState([
  {text: 'Գնել կաթ', key:'1'},
  {text: 'Լվանալ մեքենան', key:'2'},
  {text: 'Գնել կարտոֆիլ', key:'3'},
  {text: 'Դառնալ միլիոնատեր', key:'4'},
])

    // const addHandler = (text) =>{
    //   setListOfItems({list}=>{
    //     return[
    //       {text: text, index: 5},
    //       ...list
    //     ]
    //   })
    // }

    const addHandler = (text) => {
      setListOfItems((list) => {
        return [
          {text: text, index: Math.random().toString(36).substring(7) },
          ...list
        ]
      })
    }

    const deleteHandler = (key) =>{
      setListOfItems((list)=>{
        return list.filter(listOfItems => listOfItems.key != key)
      })
    }

  return (   
        <View>
          <Header/>
          <Form addHandler = {addHandler}/>
          <View>
            <FlatList data={ListOfItems} renderItem = {({ item }) => (
              // <Text>{ item.text }</Text>
              <ListItem el={item} deleteHandler = {deleteHandler}/>
            ) }/>
          </View>
        </View>

  )
}

const simpleStyle = {backgroundColor: 'red', color: 'blue' }

const styles = StyleSheet.create({
  
});
