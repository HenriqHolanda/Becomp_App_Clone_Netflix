import React from 'react'
import Login from './src/pages/login';
import Home from './src/pages/home'
import Filme from './src/pages/filme'
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import { StatusBar } from 'react-native';
import Rotas from './rotas'
import VideoPlayer from './src/components/player'



const App = () =>{
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#E50914',
    
        }
    }


    return (
        <PaperProvider theme = {theme}>
            <StatusBar backgroundColor= '#000' />
            <Rotas />
        </PaperProvider>
    )
}

export default App