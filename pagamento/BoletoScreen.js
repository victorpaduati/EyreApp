import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import codigoDeBarras from "../assets/codigoDeBarras.png";

const BoletoScreen = () => {

    return (

        <View>
            <View style={estilo.fundoBrancoBoleto}>

                <View>
                    <Text style={estilo.tituloBoleto}>Use este código de barras e pague o boleto pelo celular:</Text>
                </View>

                <View>
                    <Image source={codigoDeBarras} style={estilo.imgCodigoDeBarra} />
                </View>

                <View>
                    <Text style={estilo.textoCodigoBoleto}>218949461894984651564891665489646</Text>
                </View>

                <View>
                    <Text style={estilo.textoVencimento}>Vencimento: 03/10/2023</Text>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text style={estilo.textoVerBoleto}>Ver boleto</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const estilo = StyleSheet.create({


    fundoBrancoBoleto: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginTop: 10,
    },

    tituloBoleto: {
        fontSize: 18,
        fontFamily: "NunitoMaisNegrito",
        textAlign: "center",
        marginHorizontal: 20,
        marginTop: 13,
    },

    imgCodigoDeBarra: {
        height: 80,
        width: 300,
        alignSelf: "center",
        marginTop: 13,
    },

    textoCodigoBoleto: {
        fontSize: 15,
        textAlign: "center",
    },

    textoVencimento: {
        fontSize: 15,
        textAlign: "center",
        fontFamily: "NunitoMaisNegrito",
        marginVertical: 15,
    },

    textoVerBoleto: {
        backgroundColor: "#1877F2",
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: "NunitoMaisNegrito",
        fontSize: 18,
        marginHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 3,
        marginBottom: 13,
    },

})

export default BoletoScreen;