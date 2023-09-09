import { StyleSheet } from 'react-native'

const style_Header = StyleSheet.create({
    Background: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
    },

    Header: {
        position: 'absolute',
        top: 0,
        zIndex: 999,
    },

    Header_Components:{
        flexDirection: 'row',
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },


});

export default style_Header