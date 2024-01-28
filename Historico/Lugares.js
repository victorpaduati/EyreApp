import React from "react";
import { View, ScrollView, Text, Image, Dimensions, TouchableOpacity, Alert, ImageBackground, Animated, StyleSheet } from "react-native";

import logo from "../assets/LUGARES/logo.png";
import icone from "../assets/LUGARES/icone_login.png";
import salvador from "../assets/LUGARES/salvador.jpg";
import fortaleza from "../assets/LUGARES/fortaleza.jpg";
import santos from "../assets/LUGARES/santos.png";
import maceio from "../assets/LUGARES/maceio.jpg";
import galinhas from "../assets/LUGARES/galinhas.jpg";

const Lugares = () => {
    return (
        <ScrollView style={estilo.fundoBranco}>
            <View style={estilo.imgReto}>
                <Image source={logo} style={estilo.imgLogo}/>
                <TouchableOpacity>
                {/* <Image source={icone} style={estilo.imgIcone}/> */}
                </TouchableOpacity>
            </View>

            <View style={estilo.cardCinza}>
                <View style={estilo.correto}>
                    <Image source={salvador} style={estilo.imgCard} />
                <View style={estilo.correto1}>
                    <Text style={estilo.tituloCard}>Salvador, Bahia.</Text>
                    <Text style={estilo.textoData}>02 de Maio - 05 de Maio</Text>
                    <TouchableOpacity style={estilo.botaoReserve}>
                        <Text style={estilo.textoReserve}>DETALHES SOBRE A VIAGEM</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>

            <View style={estilo.cardCinza}>
                <View style={estilo.correto}>
                    <Image source={fortaleza} style={estilo.imgCard} />
                <View style={estilo.correto1}>
                    <Text style={estilo.tituloCard}>Fortaleza, Ceará.</Text>
                    <Text style={estilo.textoData}>12 de Agosto - 15 de Agosto</Text>
                    <TouchableOpacity style={estilo.botaoReserve}>
                        <Text style={estilo.textoReserve}>DETALHES SOBRE A VIAGEM</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>

            <View style={estilo.cardCinza}>
                <View style={estilo.correto}>
                    <Image source={santos} style={estilo.imgCard} />
                <View style={estilo.correto1}>
                    <Text style={estilo.tituloCard}>Santos, São Paulo.</Text>
                    <Text style={estilo.textoData}>22 de Março - 30 de Março</Text>
                    <TouchableOpacity style={estilo.botaoReserve}>
                        <Text style={estilo.textoReserve}>DETALHES SOBRE A VIAGEM</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>

            <View style={estilo.cardCinza}>
                <View style={estilo.correto}>
                    <Image source={maceio} style={estilo.imgCard} />
                <View style={estilo.correto1}>
                    <Text style={estilo.tituloCard}>Maceió, Alagoas.</Text>
                    <Text style={estilo.textoData}>07 de Outubro - 15 de Outubro</Text>
                    <TouchableOpacity style={estilo.botaoReserve}>
                        <Text style={estilo.textoReserve}>DETALHES SOBRE A VIAGEM</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>

            <View style={estilo.cardCinza}>
                <View style={estilo.correto}>
                    <Image source={galinhas} style={estilo.imgCard} />
                <View style={estilo.correto1}>
                    <Text style={estilo.tituloCard}>Porto de Galinhas, PE.</Text>
                    <Text style={estilo.textoData}>02 de Maio - 05 de Maio</Text>
                    <TouchableOpacity style={estilo.botaoReserve}>
                        <Text style={estilo.textoReserve}>DETALHES SOBRE A VIAGEM</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>

        </ScrollView>
    );
};

const estilo = StyleSheet.create({

    fundoBranco: {
        backgroundColor: "white",
    },

    imgReto: {
        flexDirection: "row",
    },

    imgLogo: {
        width: 90,
        height: 90,
        left: 160,
        top: 6,
    },

    imgIcone: {
        width: 42,
        height: 42,
        top: 30,
        left: 245,
    },

    correto: {
        flexDirection: "row"
    },

    correto1: {
        flexDirection:"column",
        marginLeft: 15,
    },

    cardCinza: {
        flex: 1,
        backgroundColor: "#F1F3F6",
        borderRadius: 20,
        marginHorizontal: 25,
        padding: 10,
        marginVertical: 10
    },

    imgCard: {
        borderRadius: 20,
        width: 100,
        height: 100,
    },

    tituloCard: {
        fontFamily: "NunitoMaisNegrito",
        fontSize: 20,
        marginVertical: 6,
        
    },

    textoData: {
        marginBottom: 10,
        fontFamily: "NunitoRegular",
    },

    botaoReserve: {
        borderColor: "#2970DB",
        backgroundColor: "#2970DB",
        borderRadius: 20,
        borderWidth: 1,
        padding: 4,
        alignItems: "center",
    },

    textoReserve: {
        fontSize: 13,
        color: "#fff",
        fontFamily: "NunitoMaisNegrito",
        marginHorizontal: 7,
    },

});

export default Lugares;