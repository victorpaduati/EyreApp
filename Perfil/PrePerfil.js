import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import logo from "../assets/logo.png";
import usuario from "../assets/usuario.png";
import fundo from "../assets/fundozinho.png"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const PrePerfil = () => {
    const navigation = useNavigation();
  
    const handleEntrarPress = () => {
      navigation.navigate('Login');
    };

    const handleCadastrarPress = () => {
        navigation.navigate('Cadastro');
      };

    return (
        <ScrollView style={estilo.fundoCinza}>

            <View style={estilo.fundoCinza}>

                <View>
                    <Image source={fundo} style={estilo.fundo}></Image>
                    <View style={estilo.Titulo}>
                        <Text style={estilo.textoPerfil}>MEU PERFIL</Text>
                    </View>
                    <Text style={estilo.paragrafo}>Acesse sua conta e tenha uma experiência completa.</Text>
                </View>

                <View>
                    <TouchableOpacity style={estilo.botao} onPress={handleEntrarPress}>
                        <Text style={estilo.textoBotao}>Entrar</Text>
                    </TouchableOpacity>

                </View>

                <View>
                    <Text style={estilo.paragrafo2}>Não tem uma conta ainda?</Text>
                </View>

                <View>
                    <TouchableOpacity style={estilo.botaoCadastro} onPress={handleCadastrarPress}>
                        <Text style={estilo.textoBotaoCadastro}>Cadastrar-se</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </ScrollView>
    )
}

const estilo = StyleSheet.create({

    fundo: {
        width: 250,
        height: 250, 
        position: "relative",
        alignSelf: "center",
        marginTop: 130,
    },

    fundoAzul: {
        backgroundColor: "#1877F2",
    },

    fundoCinza: {
        backgroundColor: "white",
        height: 1000,
    },

    Titulo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },

    textoPerfil: {
        textAlign: "center",
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        display: "flex",
        margin: 20,
        marginTop: 20,
        fontSize: 27,
        marginBottom: 30,
        fontFamily: "NunitoMaisNegrito",
    },

    paragrafo: {
        position: "relative",
        textAlign: "center",
        fontFamily: "NunitoMaisNegrito",
        color: "#A8A4A4",
        margin: 20,
        marginTop: -20,
        fontSize: 15,
        marginBottom: 30,
    },

    paragrafo2: {
        position: "relative",
        textAlign: "center",
        fontFamily: "NunitoMaisNegrito",
        color: "#A8A4A4",
        margin: 20,
        marginTop: 25,
        fontSize: 15,
        marginBottom: 15,
    },

    botao: {
        backgroundColor: "#1877F2",
        borderRadius: 20,
        marginVertical: 2,
        padding: 5,
        marginHorizontal: 20,
    },

    textoBotao: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "NunitoMaisNegrito",
        fontSize: 20,
    },

    botaoCadastro: {
        backgroundColor: "#1877F2",
        borderRadius: 20,
        marginVertical: 2,
        padding: 5,
        marginHorizontal: 50,
    },

    textoBotaoCadastro: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "NunitoMaisNegrito",
        fontSize: 15,
    },

    botaoSair: {
        backgroundColor: "#fff",
        borderRadius: 5,
        marginVertical: 20,
        padding: 7,
        marginHorizontal: 110
    },

    textoBotaoSair: {
        color: "#FF0000",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
    },

    iconPortaReto: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    logo: {
        alignSelf: "center",
        width: 200,
        height: 200,
    }

});

export default PrePerfil;