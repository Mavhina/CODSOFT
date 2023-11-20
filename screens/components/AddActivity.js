import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';

export default function AddActivity({ submitHandler }) {
  
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  }

  return (
   <View>
    <TextInput 
      style={styles.newToDo}
      placeholder='Add new ToDo...'
      onChangeText={changeHandler}
    />
    <View style={styles.buttonStyle}>
     <Button onPress={() => submitHandler(text)} title='add todo' color='white' backgroundColor='orange'/>
    </View>
    
   </View>
  );
}

const styles = StyleSheet.create({
  newToDo: {
    padding: 10,
    borderWidth:1,
    margin:5,
    borderRadius:10,
    color:'black',
    fontWeight: 'bold',
    borderColor:'orange',
    backgroundColor:'white',
    marginBottom:3,
  },
  buttonStyle: {
    backgroundColor:'orange',
    marginLeft: 5,
    marginRight: 5,
    borderWidth:1,
    marginBottom: 30,
    borderRadius:10,
  },

})