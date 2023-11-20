import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, ImageBackground, TextInput,View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';




export default function Home() {


  const [text, setText] = useState('');
  const navigation = useNavigation(); 

  const onPressHandler = (val) => {
    if(val.trim() === '')
    {
      Alert.alert('Name Error','Fill in the Name');
    } else{
      setText(val);
      navigation.navigate('Header', { name: val });
    }
  }

  return (
    <ImageBackground
    source={require('../assets/pexels-pixabay-39578.jpg')} // Set the path to your image
      style={styles.container}
    >
      <Text style={styles.welcomeText}>Welcome</Text>
      <View style={styles.centerContainer}>
        <TextInput 
          style={styles.input}
          placeholder='Enter Your Name'
          onChangeText={(val) => setText(val)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressHandler(text)}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

Home.navigationOptions = {
  headerShown: false, // This hides the header for this specific screen
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '80%',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  centerContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 30,
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
