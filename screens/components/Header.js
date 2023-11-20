import { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,FlatList,newDate } from 'react-native';
import ActivityList from './ActivityList';
import AddActivity from './AddActivity';  // Ensure the casing is correct here


export default function Header({ route }) {
  const { name } = route.params;

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  

  const [activity, setActivity] = useState([
    { text: 'Get a Coffe', key: '1', completed: true, date: '2023-11-20' },
    { text: 'Finish CodSoft project', key: '2', completed: false, date: '2023-11-20' },
  ]);


  const pressHandler = (key) => {
    setActivity((prevTodo) => {
      return prevTodo.filter(todo => todo.key !== key);
    });
  }

  const submitHandler = (text) => { 
    setActivity((prevTodo) => {
      const newDate = getCurrentDate();
      return [{ text: text, key: Math.random().toString(), completed: false,date: newDate, }, ...prevTodo];
    });
  };

  const toggleCompletion = (key) => {
    setActivity((prevTodo) => {
      return prevTodo.map((todo) =>
        todo.key === key ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const updateText = (key, newText, newDate) => {
    setActivity((prevTodo) => {
      return prevTodo.map((todo) =>
        todo.key === key ? { ...todo, text: newText, date: newDate } : todo
      );
    });
  };

  return (
    <SafeAreaView style={styles.container} > 
        <View style={styles.header}>
          <Text style={styles.appName}>To Do List</Text>
          <Text style={styles.greetText}> Hello {name}!!!</Text>
            <AddActivity submitHandler={submitHandler}/>
            <FlatList 
              data = {activity}
              renderItem={({ item }) => (
                <ActivityList item={item}
                pressHandler={pressHandler}
                toggleCompletion={toggleCompletion}
                updateText={updateText} />
              )}
              keyExtractor={(item) => item.key}
            />
            
          </View>
    </SafeAreaView>
     
  );
}

const styles = StyleSheet.create({
  body: {
    flex:1,
  },
  container: {
    backgroundColor:'#325896',
    height:'100%',
  },
  header: {
    height: 50,
    backgroundColor:'#325896',//#265aad
    paddingTop:15,
    flex:1,
  },
  appName: {
    textAlign:'center',
    fontSize:20,
    color:'#fff',
    fontWeight: 'bold',
    padding:20,
    backgroundColor:'orange',
  },
  greetText: {
    marginTop:28,
    fontSize: 40,
    height:70,
    //backgroundColor: 'pink',
    color:'#fff',
    fontWeight: 'bold',
  },
  flatList: {
    flex: 1,
    marginTop: 10,
  },
});