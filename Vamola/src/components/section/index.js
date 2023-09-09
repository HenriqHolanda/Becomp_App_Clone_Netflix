import React from 'react'
import style_section from './style_section'
import {Text, View, FlatList, TouchableOpacity, ImageBackground, Image} from 'react-native'
import { Title } from 'react-native-paper'
import style_Login from '../../pages/login/style_login';

const section = () => {
    return(
        <View style={style_section.container}>
            <Title style={{color: '#fff'}}>Filmes</Title>
            <FlatList style={style_section.lista} horizontal 
                data = {[1, 2, 3, 4, 5]} 
                renderItem={({ item, index}) => (
                    <TouchableOpacity key={index}>
                        <ImageBackground style ={[style_section.capa, {marginRight: 12,}]}source={require('../../assets/fundo_joker.jpg')} onPress={() => navigation.navigate('Filme')}></ImageBackground>
                        <Image resizeMode='contain' style={style_section.logo} source={require('../../assets/suicide_squad_title_2.png')} />
                    </TouchableOpacity>
                )} 
            />

        </View>
    );
};

export default section;