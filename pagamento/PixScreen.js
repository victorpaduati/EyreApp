import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Clipboard, Alert } from "react-native";

import qrCode from "../assets/qrCode.png";

//FUNÇÃO PARA COPIAR O CÓDIGO DO PIX
const handleTextPress = (text) => {
    Clipboard.setString(text);
    showCopyAlert();
};

const showCopyAlert = () => {
    Alert.alert(
        'CÓDIGO COPIADO!',
        'O código foi copiado para a área de transferência.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
};

const PixScreen = () => {

    return (

        <View>
            <View style={estilo.fundoBrancoPix}>

                <View>
                    <Text style={estilo.tituloPix}>Escaneie o QR Code Pix</Text>
                </View>

                <View>
                    <Image source={qrCode} style={estilo.imgQrCode} />
                </View>

                <View>
                    <Text style={estilo.subTitulo}>Ou copie e cole no seu aplicativo!</Text>
                </View>

                <View style={estilo.fundoAzulCodigoPix}>
                    <TouchableOpacity onPress={() => handleTextPress('4MX2V0PZR0X6Q2Q6XM6U2K1KKI4MFVPIBHQ')}>
                        <Text style={estilo.textoCodigoPix}>4MX2V0PZR0X6Q2Q6XM6U2K1KKI4MFVPIB</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    fundoBrancoPix: {
        backgroundColor: "#ffffff",
        borderRadius: 20,
        marginTop: 10,
    },

    tituloPix: {
        fontSize: 18,
        fontFamily: "NunitoMaisNegrito",
        textAlign: "center",
        marginTop: 13,
    },

    imgQrCode: {
        width: 220,
        height: 220,
        alignSelf: "center",
        marginVertical: 15,
    },

    subTitulo: {
        fontSize: 16,
        fontFamily: "NunitoMaisNegrito",
        textAlign: "center",
    },

    fundoAzulCodigoPix: {
        backgroundColor: "#1877F2",
        marginVertical: 15,
        marginHorizontal: 7,
        borderRadius: 10,
    },

    textoCodigoPix: {
        textAlign: "center",
        color: "#FFFFFF",
        fontFamily: "NunitoMaisNegrito",
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
})

export default PixScreen;