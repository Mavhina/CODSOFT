import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { View, StyleSheet, Text,TouchableOpacity,TextInput } from 'react-native';

export default function ActivityList({ item, pressHandler, toggleCompletion, updateText,}) {

  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(item.text);

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSavePress = () => {
    setIsEditing(false);
    updateText(item.key, updatedText, item.date);

  };

  return (
    <TouchableOpacity onPress={() => toggleCompletion(item.key) }>
      <View style={styles.bodyActivity}>
        <View style={styles.iconContainer}>
        <FontAwesome 
            name={item.completed ? 'check-square' : 'square-o'}
            size={24}
            color={item.completed ? 'green' : 'white'}     
        />
        {isEditing ? (
          <TextInput
            style={styles.editInput}
            value={updatedText}
            onChangeText={(text) => setUpdatedText(text)}
            onBlur={handleSavePress}
            autoFocus
            selectTextOnFocus
          />
        ) : (
          <View style={styles.itemContainer}>
            <Text style={styles.textstyles}>{item.text}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View> 
        )}
        {!isEditing && (
          <FontAwesome
            name="pencil"
            size={24}
            color="orange"
            onPress={handleEditPress}
          />
        )}

        <FontAwesome name="trash" size={24} color="orange" onPress={() => pressHandler(item.key)}/>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bodyActivity: {
    padding: 10,
    borderWidth:1,
    margin:5,
    borderRadius:10,
    flexDirection:'row',
    borderColor:'orange',
    justifyContent: 'space-between',
    alignItems: 'center', 
    flex:1,
  },
  textstyles: {
    color:'white',
    fontWeight: 'bold',
    flex:1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', 

  },
  textstyles: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    flex:1,
    
  },
  editInput: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex:1,
  },
  date: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 12,
    marginLeft: 10,
  },

})

