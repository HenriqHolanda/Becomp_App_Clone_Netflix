import React, {useState} from 'react'
import {Text, View, Image} from 'react-native'
import style_Login from './style_login'
import { TextInput, Button } from 'react-native-paper';


const Login = ({ navigation }) => {
    
    const [credentials, setcredentials] = useState({
        email: '',
        password:''
    })

    return(
        <View style={style_Login.Background}>
            <Image style={{display: 'flex', alignSelf:'center', marginBottom: 30, }} source ={require('../../assets/Netflix_Logo.png')}/>
            <View>
                <TextInput
                    label="Email"
                    mode = 'flat'
                    style={{marginBottom: 30,}}
                    value={credentials.email}
                    onChangeText={(text) => setcredentials({...credentials, email: text})}
                />
            
                <TextInput
                    label="senha"
                    mode = 'flat'
                    style={{marginBottom: 30,}}
                    secureTextEntry
                    value={credentials.senha}
                    onChangeText={(text) => setcredentials({...credentials, senha: text})}
                />

                <Button mode="contained"  style={{marginBottom:30,}}  onPress={() => navigation.navigate('Home') }>
                    Entrar
                </Button>

                <Button  style = {style_Login.Button} theme={{colors: {primary: '#fff'}}} onPress={() => console.log('Pressed') }>
                    Recuperar Senha
                </Button>
            </View>
        </View>
    )
}

export default Login;