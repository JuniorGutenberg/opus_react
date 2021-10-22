import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Buscar from '../../buscar/screen/Buscar'
import Pedidos from '../../pedidos/screen/Pedidos'
import Enviados from '../../enviados/screen/Enviados'
import Perfil from '../../perfil/screen/Perfil'


import {styles} from '../res/styles/Styles'
import {Ionicons} from '@expo/vector-icons'; 
import colors from '../../res/values/colors'


const Tab = createBottomTabNavigator()


export default function Navigation(){
    return <Tab.Navigator screenOptions={({route}) => (
                {headerShown:false,
                    tabBarStyle:styles.fundo_navigation,
                    tabBarIcon: ({color,size}) =>{
                        let iconName;
                        switch (route.name) {
                            case 'Enviados':
                                iconName = 'send-outline';
                                break;
                            case 'Pedidos':
                                iconName = 'library-outline';
                                break;
                            case 'Buscar':
                                iconName = 'search-outline';
                                break;
                            case 'Perfil':
                                iconName = 'people-outline';
                                break;
                            default:
                                iconName = 'location-outline';
                                break;
			            }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })
            } 
            tabBarOptions={{
                activeTintColor: colors.blur_fundo,
		        inactiveTintColor: colors.white,
            }}
            >
        <Tab.Screen name    =   "Enviados" component={Enviados} />
        <Tab.Screen name    =   "Pedidos" component={Pedidos}/>
        <Tab.Screen name    =   "Buscar" component={Buscar}/>
        <Tab.Screen name    =   "Perfil" component={Perfil}/>

    </Tab.Navigator>
}