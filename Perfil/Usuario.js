import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import logo from "../assets/logo.png";
import usuario from "../assets/usuario.png";

import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Usuario = () => {

    const navigation = useNavigation();
  
    const handleUsuarioPress = () => {
        navigation.navigate('Usuario');
      };


    return (
        <View style={estilo.fundoAzul}>

            <View>
                <Text style={estilo.textoPerfil}>MEU PERFIL</Text>
            </View>

            <View style={estilo.fundoCinza}>

                <View>
                    <Image source={usuario} style={estilo.imgUsuario} />
                    <Text style={estilo.textoOla}>Olá, Mateus</Text>
                </View>

                <View>
                    <TouchableOpacity style={estilo.botao} onPress={handleUsuarioPress}>
                        <View style={estilo.iconPortaReto}>
                            <Icon name="edit" size={18} color="#1877F2" marginHorizontal={5} style={estilo.iconMapa} />
                            <Text style={estilo.textoBotao}>Alterar Dados</Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.botao}>
                        <View style={estilo.iconPortaReto}>
                            <Icon name="star" size={18} color="#1877F2" marginHorizontal={5} style={estilo.iconMapa} />
                            <Text style={estilo.textoBotao}>Avaliações</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.botao}>
                        <View style={estilo.iconPortaReto}>
                            <Icon name="shopping-cart" size={18} color="#1877F2" marginHorizontal={5} style={estilo.iconMapa} />
                            <Text style={estilo.textoBotao}>Pagamentos</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.botao}>
                        <View style={estilo.iconPortaReto}>
                            <Icon name="cog" size={18} color="#1877F2" marginHorizontal={5} style={estilo.iconMapa} />
                            <Text style={estilo.textoBotao}>Configurações</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.botaoSair}>
                        <View style={estilo.iconPortaReto}>
                            <Icon name="sign-out" size={18} color="red" marginHorizontal={5} style={estilo.iconMapa} />
                            <Text style={estilo.textoBotaoSair}>Sair</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Image source={logo} style={estilo.logo} />
                </View>

            </View>

        </View>
    )
}

const estilo = StyleSheet.create({

    fundoAzul: {
        backgroundColor: "#1877F2",
    },

    fundoCinza: {
        backgroundColor: "#F1F3F6",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: 60,
        height: 618,
    },

    imgUsuario: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginTop: -80,
    },

    textoOla: {
        fontSize: 25,
        textAlign: "center",
        fontFamily: "NunitoMaisNegrito",
        marginVertical: 15,
    },

    textoPerfil: {
        fontFamily: "NunitoMaisNegrito",
        textAlign: "center",
        fontSize: 27,
        color: "#FFF",
        marginVertical: 50,
    },

    botao: {
        backgroundColor: "#fff",
        borderRadius: 8,
        marginVertical: 6,
        padding: 10,
        marginHorizontal: 20
    },

    textoBotao: {
        color: "#1877F2",
        textAlign: "center",
        fontSize: 20,
        fontFamily: "NunitoMaisNegrito",
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
        fontFamily: "NunitoMaisNegrito",
        fontSize: 20,
    },

    iconPortaReto: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    logo: {
        alignSelf: "center",
        marginBottom: 25,
    }

});

export default Usuario;