import React from 'react'
import {Text} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login';
import Home from './src/pages/home';
import Filme from './src/pages/filme';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import VideoPlayer from './src/components/player';
    
const Rotas = () => {

    const Stack = createNativeStackNavigator(); 
    const Tab = createMaterialBottomTabNavigator();

    const HomeTab = () => {
        return(
            <Tab.Navigator 
            initialRouteName='Home'
            activeColor={'#fff'}
            
            barStyle = {{backgroundColor: '#141414'}}>
                <Tab.Screen 
                name='Home' 
                component={Home}
                options={{tabBarLabel: 'Inicio',
                          tabBarIcon: ({color}) => <Icon name='home' color={color}/>
                }} 
                />
                                <Tab.Screen 
                name='Download' 
                component={Home}
                options={{tabBarLabel: 'Downloads',
                          tabBarIcon: ({color}) => <Icon name='download' color={color}/>
                }} 
                />
                                <Tab.Screen 
                name='Em breve' 
                component={Home}
                options={{tabBarLabel: 'Em breve',
                          tabBarIcon: ({color}) => <Icon name='play-speed' color={color}/>
                }} 
                />
            </Tab.Navigator>
        )
    }
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen options={{headerShown: false}} name='Login' component={Login} />
                <Stack.Screen options={{headerShown: false}} name='Home' component={HomeTab} />
                <Stack.Screen options={{headerShown: false}} name='Filme' component={Filme} />
                <Stack.Screen options={{headerShown: false}} name='VideoPlayer' component={VideoPlayer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Rotas;