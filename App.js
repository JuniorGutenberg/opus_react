import React from 'react';

import {NavigationContainer}  from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';


import Login from '../Opus/src/login/screen/Login'
import Entrar from '../Opus/src/login/screen/Entrar'
import Cadastro from '../Opus/src/login/screen/Cadastro'
import Navigation from '../Opus/src/navigation/screen/Navigation'




const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator headerMode={'none'} screenOptions={{headerShown:false}} > 
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Entrar" component={Entrar} />
    <Stack.Screen name="Cadastro" component={Cadastro} />
    <Stack.Screen name="Navigation" component={Navigation} />


    </Stack.Navigator>
  </NavigationContainer>
  );
}

