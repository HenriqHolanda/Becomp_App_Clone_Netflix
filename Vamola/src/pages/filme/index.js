import React from 'react';
import {Text, ScrollView, ImageBackground, View, TouchableOpacity} from 'react-native'
import { Title, Button } from 'react-native-paper';
import style_filme from './style_filme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Section from '../../components/section';
import Video from 'react-native-video';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Filme = ({navigation}) => {
    return(
        <ScrollView style = {style_filme.container}>
            <ImageBackground style={style_filme.capa} source ={require('../../assets/fundo_joker.jpg')}/>
            <View style = {style_filme.containerpadding}>
                <Title style={{color: '#fff', alignSelf: 'center'}}>Esquadrão Suicida</Title>
                <Button style={style_filme.button}icon="play" mode="contained" buttonColor="#fff" textColor='#000' onPress={() => navigation.navigate('VideoPlayer')}>
                    Assistir
                </Button>
                <Text style={{color: 'white', marginTop: 20,}}>Um filme muito ruim, estrelado pelo jared leto e pela margot robbie, mas que talvez possa surpreender positivamente.</Text>

                <View style={style_filme.menu}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',}}>
                        <Icon name='plus' color='#fff' size={20}/>
                        <Text>Minha Lista</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',}}>
                        <Icon name='thumb-up' color='#fff' size={20}/>
                        <Text>Classifique</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',}}>
                        <Icon name='send' color='#fff' size={20}/>
                        <Text>Compartilhe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',}}>
                        <Icon name='download' color='#fff' size={20}/>
                        <Text>Download</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Section />
        </ScrollView>
    );
};

export default Filme;