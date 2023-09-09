import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native'
import style_Banner from './style_banner';
import LinearGradient from 'react-native-linear-gradient';

const Banner = () => {
    return(
        <ImageBackground style={style_Banner.Banner}source ={require('../../assets/fundo_joker.jpg')}>
            <Image resizeMode='contain' style={style_Banner.Title} source={require('../../assets/suicide_squad_title_2.png')} />
            <LinearGradient style={style_Banner.Gradient} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}/>
        </ImageBackground>

        

    );
};

export default Banner;