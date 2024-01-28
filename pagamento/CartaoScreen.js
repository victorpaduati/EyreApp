import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

import bandeiraMastercard from "../assets/mastercard.png";

const CartaoScreen = () => {

    //FORMATAÇÃO CAMPO NÚMERO DO CARTÃO
    const [numeroCartao, setNumeroCartao] = useState('');
    const handleInputChange = (text) => {
        const digitsOnly = text.replace(/\D/g, '');
        const formattedText = digitsOnly
            .replace(/(\d{4})(\d{4})(\d{4})(\d+)/, '$1 - $2 - $3 - $4')
            .trim();
        setNumeroCartao(formattedText);
    };
    //----------------------------------

    //FORMATAÇÃO CAMPO DE DATA DE VENCIMENTO DO CARTÃO
    const [dataVencimento, setDataVencimento] = useState('');
    const handleDataInputChange = (text) => {
        const digitsOnly = text.replace(/\D/g, '');
        const formattedText = digitsOnly
            .replace(/(\d{2})(\d{2})/, '$1/$2')
            .trim();
        setDataVencimento(formattedText);
    };
    //----------------------------------

    //FORMATAÇÂO CAMPO NOME DO TITULAR
    const [nomeCartao, setNomeCartao] = useState('');
    const handleNomeInputChange = (text) => {
        const lettersOnly = text.replace(/[^a-zA-ZÀ-ÿ ]/g, '');
        const formattedText = lettersOnly
            .toLowerCase()
            .replace(/(?:^|\s)\S/g, (letter) => letter.toUpperCase());

        setNomeCartao(formattedText);
    };
    //----------------------------------

    return (

        <View>
            <View>
                <Text style={estilo.textoDadosCartao}>Número do Cartão</Text>
                <TextInput
                    style={estilo.campoNumeroCartao}
                    placeholder="0000 - 0000 - 0000 - 0000"
                    keyboardType="numeric"
                    value={numeroCartao}
                    onChangeText={handleInputChange}
                    maxLength={25}
                />
                <Image source={bandeiraMastercard} style={estilo.imgMastercard} />
            </View>

            <View style={estilo.aoLadoPagamento}>
                <View>
                    <Text style={estilo.textoDadosCartao}>Data de Expiração</Text>
                    <TextInput
                        style={estilo.campoDataCartao}
                        placeholder="00/00"
                        keyboardType="numeric"
                        value={dataVencimento}
                        onChangeText={handleDataInputChange}
                        maxLength={5}
                    />
                </View>

                <View style={estilo.margemDireita}>
                    <Text style={estilo.textoDadosCartao}>CVV</Text>
                    <TextInput
                        style={estilo.campoCvvCartao}
                        placeholder="000"
                        keyboardType="numeric"
                        maxLength={4}
                    />
                </View>
            </View>

            <View>
                <Text style={estilo.textoDadosCartao}>Nome no Cartão</Text>
                <TextInput
                    style={estilo.campoNomeCartao}
                    placeholder="Cléber Leão"
                    value={nomeCartao}
                    onChangeText={handleNomeInputChange}
                    autoCapitalize="words"
                    maxLength={35}
                />
            </View>

        </View>

    );
}

const estilo = StyleSheet.create({
    aoLado: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
    },

    aoLadoPagamento: {
        flexDirection: "row",
    },

    margemDireita: {
        marginLeft: 60,
    },

    // container: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // timer: {
    //     marginVertical: 10,
    //     paddingVertical: 3,
    //     paddingHorizontal: 13,
    //     fontSize: 20,
    //     color: "#fff",
    //     fontWeight: "bold",
    //     backgroundColor: "#2970DB",
    //     borderRadius: 15,
    // },

    textoDadosCartao: {
        fontSize: 17,
        fontFamily: "NunitoMaisNegrito",
        paddingVertical: 5,
        marginLeft: 5,
        marginTop: 5,
    },

    imgMastercard: {
        height: 40,
        width: 40,
        marginLeft: 8,
        position: "absolute",
        marginTop: 37,
    },

    campoNumeroCartao: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 5,
        fontSize: 16,
        textAlign: "center",
        marginBottom: 5,
        fontFamily: "NunitoRegular",
    },

    campoDataCartao: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 5,
        paddingHorizontal: 20,
        marginRight: -20,
        fontSize: 16,
        textAlign: "center",
        marginBottom: 5,
        fontFamily: "NunitoRegular",
    },

    campoCvvCartao: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 5,
        marginRight: -50,
        fontSize: 16,
        textAlign: "center",
        fontFamily: "NunitoRegular",
    },

    campoNomeCartao: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 5,
        marginRight: 90,
        fontSize: 16,
        textAlign: "center",
        fontFamily: "NunitoRegular",
    },
})

export default CartaoScreen;