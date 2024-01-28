import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Swiper from 'react-native-swiper'

import bar1 from "../assets/bar1.jpg";
import bar2 from "../assets/bar2.jpg";
import bar3 from "../assets/bar3.jpg";

const Bares = () => {
    return (
        <View>
            <Swiper style={estilo.wrapper} showsButtons={true} >
                <View style={estilo.slide1}>
                    <Text style={estilo.text}>Saidêra Pub</Text>
                    <Image source={bar2} style={estilo.imagensDicaLugares} />
                </View>
                <View style={estilo.slide2}>
                    <Text style={estilo.text}>Esquina da Onda</Text>
                    <Image source={bar1} style={estilo.imagensDicaLugares} />
                </View>
                <View style={estilo.slide3}>
                    <Text style={estilo.text}>Lounge da Praia</Text>
                    <Image source={bar3} style={estilo.imagensDicaLugares} />
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

export default Bares;