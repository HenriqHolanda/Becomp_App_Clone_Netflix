import React from 'react'
import { StyleSheet } from 'react-native'

const style_section = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20,
    },
    capa: {
        width: 120,
        height: 180,

    },
    lista:{
        width: '100%',
        height: 180,
        marginTop: 10,
        marginBottom: 30,
    },
    logo:{
        
        width: 100,
        height: 45,
        position: 'absolute',
        zIndex: 10,
        bottom: 20,
        alignSelf: 'center'
    }
})

export default style_section;