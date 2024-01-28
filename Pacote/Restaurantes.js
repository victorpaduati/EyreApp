import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Swiper from 'react-native-swiper'

import restaurante1 from "../assets/restaurante1.jpg";
import restaurante2 from "../assets/restaurante2.jpeg";
import restaurante3 from "../assets/restaurante3.jpg";

const Restaurantes = () => {
    return (
        <View>
            <Swiper style={estilo.wrapper} showsButtons={true} >
                <View style={estilo.slide1}>
                    <Text style={estilo.text}>EL Farol</Text>
                    <Image source={restaurante1} style={estilo.imagensDicaLugares} />
                </View>
                <View style={estilo.slide2}>
                    <Text style={estilo.text}>Sol na Cozinha</Text>
                    <Image source={restaurante2} style={estilo.imagensDicaLugares} />
                </View>
                <View style={estilo.slide3}>
                    <Text style={estilo.text}>Casa da Piedra</Text>
                    <Image source={restaurante3} style={estilo.imagensDicaLugares} />
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

export default Restaurantes;