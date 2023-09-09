import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import style_Home from './style_home';
import Header from '../../components/header';
import Banner from '../../components/Banner';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button } from 'react-native-paper';
import Section from '../../components/section';

const Home = ({navigation}) => {
    return(
        <View style={style_Home.Background}>
            <Header />
            <Banner />
            <View style={style_Home.menu}>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',}}>
                    <Icon name='plus' color='#fff' size={20}/>
                    <Text>Minha Lista</Text>
                </TouchableOpacity>
                <Button icon="play" mode="contained" buttonColor="#fff" textColor='#000' onPress={() => navigation.navigate('Filme') } >Assistir</Button>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',}}>
                    <Icon name='information-outline' color='#fff' size={20}/>
                    <Text>Saiba Mais</Text>
                </TouchableOpacity>
            </View>
            <Section />
        </View>
    )
}

export default Home;