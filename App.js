import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';

import Proteinas from './screens/Proteina'
import Carbos from './screens/Carbos'
import Grasa from './screens/Grasas'
import Fibra from './screens/Fibras'
import Home from './screens/Home'
export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title:'NUTRIVAL',
          headerStyle:{backgroundColor:'tomato'},
          headerTintColor:'white',
          headerTitleAlign:'center',
          
        }} />
        <Stack.Screen name="proteina" component={Proteinas} options={{
          title:'NUTRIVAL',
          headerStyle:{backgroundColor:'tomato'},
          headerTintColor:'white',
          headerTitleAlign:'center',
        }} />
        <Stack.Screen name="carbohidratos" component={Carbos} options={{
           title:'NUTRIVAL',
           headerStyle:{backgroundColor:'tomato'},
           headerTintColor:'white',
           headerTitleAlign:'center',
        }} />
        <Stack.Screen name="grasas" component={Grasa} options={{
           title:'NUTRIVAL',
           headerStyle:{backgroundColor:'tomato'},
           headerTintColor:'white',
           headerTitleAlign:'center',
        }} />
        <Stack.Screen name="fibras" component={Fibra} options={{
           title:'NUTRIVAL',
           headerStyle:{backgroundColor:'tomato'},
           headerTintColor:'white',
           headerTitleAlign:'center',
        }} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack/>
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
