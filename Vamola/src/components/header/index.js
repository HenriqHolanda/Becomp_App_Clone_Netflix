import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native'
import style_Header from './styles_header';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
    return(
    
        <LinearGradient style={style_Header.Header} colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}>
            <View style={style_Header.Header_Components}>
            <Image source ={require('../../assets/N_Netflix_2x.png')}/>   
                <TouchableOpacity>
                    <Text>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Minha Lista</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default Header;