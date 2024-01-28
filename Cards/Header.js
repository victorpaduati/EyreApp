import React from "react";
import { Text, StyleSheet, Animated, Easing, View, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { spin } from "./Spin";
import Carroceu from "./Carousel";
import CarroselDois from "./CarouselDois";
import horario from "../assets/horario.png";
import setawh from "../assets/setawh.png"
import onibus from "../assets/iconeBus.png"
import aviao from "../assets/iconeVoo.png"
import { useNavigation } from "@react-navigation/native"

export default function Header({ onPressVoltarDetalhes }) {

    let rotateValueHolder = new Animated.Value(0);

    const startImageRotateFunction = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => startImageRotateFunction());
    };

    const rotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const navigation = useNavigation();

    const handleQueroSaberMais = () => {
        navigation.navigate('BodyPacote');
    };


    return (

        //HEADER=================================================

        <ScrollView style={estilo.fundao}>
            <View style={estilo.headerContainer}>
                <TouchableOpacity onPress={onPressVoltarDetalhes}>
                    <Image source={setawh} style={estilo.seta} />
                </TouchableOpacity>
                <View style={estilo.headerBussula}>
                    <Animated.View style={{ transform: [{ rotate: spin }] }} >
                        <Icon
                            name="compass"
                            size={25}
                            color="black"
                            style={estilo.Localizar}
                        />
                    </Animated.View>
                    <Text style={estilo.Texto1}> - RJ    |   R$ 0,00   |    26 mai - 28 mai</Text>
                </View>

                <Text style={estilo.Texto}>Suas opções de jornada!</Text>
            </View>

            {/* BODY ------------------------------------------------------------------------------------------- */}

            <View style={estilo.Fundo}>
                <Text style={estilo.Informacao}>Brisas do Farol</Text>

                <Carroceu />

                <View>

                    <Text style={estilo.Suite}>Suíte</Text>

                    <Text style={estilo.Descricaoum}>Estúdio inteiro, 1 banheiro, 1 cozinha, 20m² 3 camas (2 de solteiro, 1 de casal)</Text>

                </View>

            </View>

            {/* MAIN ------------------------------------------------------------------------------------------- */}

            <View style={estilo.Fundo}>

                <View>
                    <Text style={estilo.Cancelamento}>Cancelamento grátis</Text>

                    <Text style={estilo.Unidade}>Resta 1 unidade por este preço achado em nosso site</Text>
                </View>

                <View style={estilo.Disponiveis}>
                    <Text style={estilo.Transporte}>Transportes</Text>
                    <Image source={onibus} style={estilo.onibus1} />
                    <Text style={estilo.textoTransporte1}>Opções de voo disponíveis ida/volta</Text>
                </View>
                <View style={estilo.SegundoDisponiveis}>
                    <Image source={aviao} style={estilo.onibus} />
                    <Text style={estilo.textoTransporte}>Opções de voo disponíveis ida/volta</Text>
                </View>

                <View style={estilo.Botao}>
                    <TouchableOpacity onPress={handleQueroSaberMais}>
                        <Text style={estilo.TextoBotao}>QUERO SABER MAIS</Text>
                    </TouchableOpacity>
                </View>

            </View>

            {/* BodyDois ---------------------------------------------------------------------------------------- */}

            <View style={estilo.Fundo}>

                <Text style={estilo.Informacao}>Pousada Bicho do Mato</Text>

                <CarroselDois />

                <View>

                    <Text style={estilo.Suite}>Suíte Superior</Text>

                    <Text style={estilo.Descricaoum}>Suite privativa, 1 quarto, 1 sala, 1 cama de casal, 1 banheiro, 20m², 1 camas (1 de casal) </Text>

                </View>
            </View>

            {/* MainDois ------------------------------------------------------------------------------------------- */}

            <View style={estilo.Fundo}>

                <Text style={estilo.Cancelamento}>Café da manhã incluído</Text>

                <Text style={estilo.Unidade}>Resta 1 unidade por este preço achado em nosso site</Text>

                <View style={estilo.Disponiveis}>
                    <Text style={estilo.Transporte}>Transportes</Text>
                    <Image source={onibus} style={estilo.onibus1} />
                    <Text style={estilo.textoTransporte1}>Opções de voo disponíveis ida/volta</Text>
                </View>
                <View style={estilo.SegundoDisponiveis}>
                    <Image source={aviao} style={estilo.onibus} />
                    <Text style={estilo.textoTransporte}>Opções de voo disponíveis ida/volta</Text>
                </View>

                <View style={estilo.Botao}>
                    <TouchableOpacity onPress={() => Alert.alert("Obtendo informação")}>
                        <Text style={estilo.TextoBotao}>QUERO SABER MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
};

const estilo = StyleSheet.create({
    //STYLE HEADER

    fundao: {
        backgroundColor: "#2970DB",
    },

    seta: {
        marginVertical: 10,
        marginHorizontal: 30,
        width: 40,
        height: 40,
    },

    headerBussula: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#F1F3F6',
        marginLeft: 30,
        paddingVertical: 10,
        width: 350,
        marginVertical: 10,
    },

    Texto1: {
        textAlign: "center",
        color: "gray",
        fontSize: 15,
        fontFamily: "NunitoRegular",
    },

    Texto: {
        width: "100%",
        textAlign: "center",
        marginTop: 0,
        color: "white",
        fontSize: 25,
        fontFamily: "NunitoRegular",
        position: "relative",
    },

    Localizar: {
        color: "gray",
        alignSelf: 'center',
        justifyContent: 'center',
    },

    //STYLE BODY

    Fundo: {
        backgroundColor: "#2970DB",
    },

    Informacao: {
        fontSize: 22,
        fontFamily: "NunitoRegular",
        backgroundColor: "#F1F3F6",
        marginTop: 15,
        width: 370,
        alignSelf: "center",
        textAlign: "center",
        paddingTop: 8,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        height: 680,
    },

    Descricaoum: {
        fontSize: 13.7,
        fontFamily: "NunitoRegular",
        paddingLeft: 30,
        marginTop: -405,
        marginHorizontal: 35,
        position: "absolute",
        textAlign: "justify",
    },

    Descricaodois: {
        fontSize: 14,
        fontFamily: "NunitoRegular",
        paddingLeft: 30,
        marginTop: -360,
        marginHorizontal: 35,
        position: "absolute",
    },

    //STYLE MAIN

    Fundo: {
        backgroundColor: "#2970DB",
    },

    Cancelamento: {
        fontSize: 15,
        fontFamily: "NunitoMaisNegrito",
        paddingLeft: 30,
        marginTop: -320,
        color: "green",
        marginHorizontal: 35,
        position: "absolute",
    },

    Disponiveis: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: -190,
        marginHorizontal: 35,
        height: 120,
        borderRadius: 15,
        position: "relative",
        width: 340,
    },

    SegundoDisponiveis: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: -30,
        marginHorizontal: 35,
    },

    onibus1: {
        height: 20,
        width: 20,
        marginLeft: -130,
        marginTop: -10,
    },

    onibus: {
        height: 20,
        width: 20,
        marginHorizontal: -10,
        marginTop: -10,
    },

    textoTransporte1: {
        fontSize: 15.5,
        fontFamily: "NunitoRegular",
        marginLeft: 10,
        marginTop: -10,
    },

    textoTransporte: {
        fontSize: 15.5,
        fontFamily: "NunitoRegular",
        marginLeft: 20,
        marginTop: -10,
    },

    TextoBotao: {
        fontSize: 15,
        fontFamily: "NunitoRegular",
        backgroundColor: "#2970DB",
        marginHorizontal: 120,
        marginTop: 30,
        borderRadius: 15,
        width: 180,
        height: 30,
        padding: 5,
        paddingLeft: 12,
        position: "absolute",
        color: "white",
    },

    //STYLE BODYDOIS

    Fundo: {
        backgroundColor: "#2970DB",
    },

    Informacao: {
        fontSize: 22,
        fontFamily: "NunitoRegular",
        backgroundColor: "#F1F3F6",
        marginVertical: 20,
        width: 370,
        alignSelf: "center",
        textAlign: "center",
        paddingTop: 11,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        height: 680,
    },

    Transporte: {
        fontSize: 20,
        fontFamily: "NunitoMaisNegrito",
        marginTop: -80,
        margin: 3,
    },

    Suite: {
        fontSize: 20,
        fontFamily: "NunitoMaisNegrito",
        backgroundColor: "white",
        paddingTop: 9,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: -460,
        marginHorizontal: 35,
        height: 235,
        borderRadius: 15,
        position: "relative",
        width: 340,
    },

    Descricaoum: {
        fontSize: 15.5,
        fontFamily: "NunitoRegular",
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: -405,
        marginHorizontal: 35,
        position: "absolute",
        textAlign: "justify",
    },

    Descricaodois: {
        fontSize: 14,
        fontFamily: "NunitoRegular",
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: -360,
        marginHorizontal: 35,
        position: "absolute",
    },

    //MAINDOIS

    Fundo: {
        backgroundColor: "#2970DB",
    },

    Cafe: {
        fontSize: 15,
        fontFamily: "Black",
        paddingLeft: 30,
        marginTop: -315,
        color: "green",
        marginHorizontal: 35,
        position: "absolute",
    },

    Unidade: {
        fontSize: 14.3,
        fontFamily: "NunitoMaisNegrito",
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: -290,
        color: "red",
        marginHorizontal: 35,
        position: "absolute",
    },
});