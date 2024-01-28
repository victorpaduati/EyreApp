import React from "react";
import { Text, ScrollView, StyleSheet, View, Image, TouchableOpacity, Alert } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import icone from "../assets/NOTIFICACOES/icone_login.png";
import logo from "../assets//NOTIFICACOES/logo.png";
import icone1 from "../assets//NOTIFICACOES/icone1.png";
import funcionario from "../assets//NOTIFICACOES/icone2.png";
import chave from "../assets//NOTIFICACOES/icone3.png";
import sino from "../assets//NOTIFICACOES/icone4.png";


export default function Notificacoes() {
    return (

        // ========================================= TOPO ============================================
        <ScrollView style={estilo.fundoTopo}>

            <View style={estilo.imgReto}>
                <Image source={logo} style={estilo.imgLogo} />
                {/* <TouchableOpacity>
                    <Image source={icone} style={estilo.imgIcone} />
                </TouchableOpacity> */}
            </View>

            {/* <View>
                <Text style={estilo.noti}>NOTIFICAÇÕES</Text>
            </View> */}

            {/* ====================================== NOTIFICAÇÃO UM ====================================== */}
            <View style={estilo.fundo1}>

                <View>
                    <TouchableOpacity>
                        <Text style={estilo.notificacao1}>"Sua reserva no Hotel Fasano em Salvador começa em breve.
                            Verifique se você tem todas as informações necessárias em
                            seu aplicativo para uma chegada tranquila." 🏨</Text>
                    </TouchableOpacity>
                </View>
                <Image source={icone1} style={estilo.icone1} />
            </View>

            {/* =================================== NOTIFICAÇÃO DOIS ====================================== */}
            <View style={estilo.fundo2}>

                <View>
                    <TouchableOpacity>
                        <Text style={estilo.notificacao2}>"Uma nova oferta de viagem para o destino Bonito
                            acabou de ser adicionada ao nosso aplicativo. Verifique agora para
                            economizar em sua próxima viagem!" 🛳️</Text>
                    </TouchableOpacity>
                </View>
                <Image source={funcionario} style={estilo.funcionario} />
            </View>

            {/* ================================== NOTIFICAÇÃO TRES ========================================== */}
            <View style={estilo.fundo3}>

                <View>
                    <TouchableOpacity>
                        <Text style={estilo.notificacao3}>"Não se esqueça de completar sua avaliação
                            sobre sua recente viagem para Gramado. Sua opinião é importante
                            para ajudar outros viajantes a escolherem a opção.." 🏕️</Text>
                    </TouchableOpacity>
                </View>
                <Image source={chave} style={estilo.chave} />
            </View>

            {/* ================================== NOTIFICAÇÃO QUATRO ====================================== */}
            <View style={estilo.fundo4}>

                <View>
                    <TouchableOpacity>
                        <Text style={estilo.notificacao4}>"Aproveite o sol na praia de Copacabana!
                            Reserve sua viagem agora e ganhe 10% de desconto!" 🏖️</Text>
                    </TouchableOpacity>
                </View>
                <Image source={sino} style={estilo.sino} />
            </View>

            <View style={estilo.fundo3}>

                <View>
                    <TouchableOpacity>
                        <Text style={estilo.notificacao3}>"Não se esqueça de completar sua avaliação
                            sobre sua recente viagem para Arraial do Cabo. Sua opinião é importante
                            para ajudar outros viajantes a escolherem a opção.." 🏕️</Text>
                    </TouchableOpacity>
                </View>
                <Image source={chave} style={estilo.chave} />
            </View>

            {/* =================================== ACABOU ==================================================*/}
        </ScrollView>
    )
}
const estilo = StyleSheet.create({
    //TOPO ===========================
    fundoTopo: {
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
        left: 230,
    },

    noti: {
        borderRadius: 10,
        backgroundColor: "#2970DB",
        textAlign: "justify",
        marginHorizontal: 150,
        marginVertical: 10,
        width: 130,
        height: 30,
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontWeight: "bold",
    },

    //NOTIFICAÇÃO UM =============================
    fundo1: {
        backgroundColor: "#F1F3F6",
        borderRadius: 20,
        width: 320,
        height: 100,
        marginHorizontal: 45,
        marginVertical: 20,
    },

    notificacao1: {
        textAlign: "justify",
        paddingHorizontal: 27,
        paddingVertical: 15,
        fontFamily: "NunitoMaisNegrito",
        fontSize: 13,
    },

    icone1: {
        width: 55,
        height: 55,
        marginVertical: -120,
        marginHorizontal: -25,
    },

    //NOTIFICAÇÃO DOIS ===========================
    fundo2: {
        backgroundColor: "#F1F3F6",
        borderRadius: 20,
        width: 320,
        height: 105,
        marginHorizontal: 45,
        marginVertical: 20,
    },

    notificacao2: {
        textAlign: "justify",
        paddingHorizontal: 27,
        paddingVertical: 15,
        fontFamily: "NunitoMaisNegrito",
        fontSize: 13,
    },

    funcionario: {
        width: 55,
        height: 55,
        marginVertical: -120,
        marginHorizontal: -25,
    },

    //NOTIFICAÇÃO TRÊS ==========================
    fundo3: {
        backgroundColor: "#F1F3F6",
        borderRadius: 20,
        width: 320,
        height: 120,
        marginHorizontal: 45,
        marginVertical: 30,
    },

    notificacao3: {
        textAlign: "justify",
        paddingHorizontal: 30,
        paddingVertical: 15,
        fontFamily: "NunitoMaisNegrito",
        fontSize: 13,
    },

    chave: {
        width: 55,
        height: 55,
        marginVertical: -140,
        marginHorizontal: -25,
    },

    //NOTIFICAÇÃO QUATRO =======================
    fundo4: {
        backgroundColor: "#F1F3F6",
        borderRadius: 20,
        width: 320,
        height: 90,
        marginHorizontal: 45,
        marginVertical: 20,
    },

    notificacao4: {
        textAlign: "justify",
        paddingHorizontal: 27,
        paddingVertical: 15,
        fontFamily: "NunitoMaisNegrito",
        fontSize: 13,
    },

    sino: {
        width: 55,
        height: 55,
        marginVertical: -100,
        marginHorizontal: -25,
    },
})