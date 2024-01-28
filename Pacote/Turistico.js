import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Swiper from 'react-native-swiper';

import turistico1 from "../assets/turistico1.jpg";
import turistico2 from "../assets/turistico2.jpg";
import turistico3 from "../assets/turistico3.jpg";

const Turistico = () => {
    return (
        <View>
            <Swiper style={estilo.wrapper} showsButtons={true} >
                <View style={estilo.slide1}>
                    <Text style={estilo.text}>Letreiro Arraial</Text>
                    <Image source={turistico2} style={estilo.imagensDicaLugares} />
                </View>
                <View style={estilo.slide2}>
                    <Text style={estilo.text}>Pontal do Atalaia</Text>
                    <Image source={turistico1} style={estilo.imagensDicaLugares} />
                </View>
                <View style={estilo.slide3}>
                    <Text style={estilo.text}>Região dos Lagos</Text>
                    <Image source={turistico3} style={estilo.imagensDicaLugares} />
                </View>
            </Swiper>
        </View>
    )
}

const estilo = StyleSheet.create({
    
    wrapper: {
        height: 215,
    },

    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    slide3: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        marginTop: 15,
        marginBottom: 5,
        color: '#000',
        fontSize: 20,
        fontFamily: "NunitoRegular",
    },

    imagensDicaLugares: {
        height: 120,
        width: 330,
        borderRadius: 60,
    },

})

export default Turistico;