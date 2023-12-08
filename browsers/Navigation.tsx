import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import Home from "../Screens/Home";
import Registro from "../Screens/Registro";
import Datos from "../Screens/Datos";
import EditaryEliminar from "../Screens/EditaryEliminar";

const Stack = createStackNavigator();
const Tab= createBottomTabNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name='MyTabs' component={MyTabs} />
         
        </Stack.Navigator>
    )
}
function MyTabs(){
    return(
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="registro" component={Registro}
             options={
                {
                    tabBarLabel: 'Registro',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home-circle" size={24} color="black" />
                    ),
                    headerTitle: 'Registro'
                }
            }
            />
            <Tab.Screen name="datos" component={Datos}
            options={
                {
                    tabBarLabel: 'Datos',
                    tabBarIcon: () => (
                        <FontAwesome name="th-list" size={24} color="black" />
                    ),
                    headerTitle: 'Datos'
                }
            }
            />
            <Tab.Screen name="editar y eliminar" component={EditaryEliminar}
            options={
                {
                    tabBarLabel: 'EditaryEliminar',
                    tabBarIcon: () => (
                        <Entypo name="edit" size={24} color="black" />
                    ),
                    headerTitle: 'EditaryEliminar'
                }
            }
            />
        </Tab.Navigator>
    )
}
export default function Navigation(){
    return(
        <NavigationContainer>
             <MyTabs></MyTabs>
        </NavigationContainer>
    )
}