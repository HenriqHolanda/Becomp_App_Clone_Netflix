import { StyleSheet } from 'react-native'

const style_Banner = StyleSheet.create({
    Background: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
    },
    Banner:{
        width: '100%',
        height: 450,
    },
    Title:{
        marginTop: 165,
        alignSelf:'center',
        width: 370,
        height: 300,
        zIndex: 10,
        position: 'absolute',

    },
    Gradient:{
        width: '100%',
        height: 150,
        position: 'absolute',
        zIndex: 9,
        bottom: 0,

    }

});

export default style_Banner