import { StyleSheet, Text, View , FlatList} from 'react-native';
import Home from './screens/Home';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './screens/components/Header';

const Stack = createStackNavigator();

export default function App() {

  return (
    // to navigate around different screens
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Header" component={Header} />
      </Stack.Navigator>
    </NavigationContainer> 
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
