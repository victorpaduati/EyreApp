import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

import imgDinheiro from "../assets/imgIconeDinheiro.png";
import imgEmojiCero from "../assets/correto.png";
import iconeCartao from "../assets/cartao.png";
import iconeCodigoDeBarras from "../assets/iconeCodigoDeBarras.png";
import iconePix from "../assets/pix.png";

import CartaoScreen from "./CartaoScreen";
import PixScreen from "./PixScreen";
import BoletoScreen from "./BoletoScreen";

const Pagamentos = () => {

    //CAMPO CRONÔMETRO
    const initialTimeInSeconds = 12 * 60; // 12 minutos em segundos
    const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds);

    useEffect(() => {
        let interval;
        interval = setInterval(() => {
            setTimeInSeconds((prevTime) => (prevTime > 0 ? prevTime - 1 : initialTimeInSeconds));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timeInSeconds === 0) {
            setTimeInSeconds(initialTimeInSeconds);
        }
    }, [timeInSeconds]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    //----------------------------------

    //FUNÇÃO TROCAR TELA

    const [activeOption, setActiveOption] = useState('cartao'); // Inicialmente, Cartão é ativo
    const renderActiveScreen = () => {
        if (activeOption === 'cartao') {
            return <CartaoScreen />;
        } else if (activeOption === 'pix') {
            return <PixScreen />;
        } else if (activeOption === 'boleto') {
            return <BoletoScreen />;
        }
    };

    return (

        <ScrollView style={estilo.viewPrincipal}>

            <View style={estilo.aoLado}>
                <Image source={imgDinheiro} style={estilo.imgDinheiro} />
                <Text style={estilo.textoDetalhes}>Detalhes de Pagamento</Text>
            </View>

            <View style={estilo.container}>
                <Text style={estilo.timer}>{formatTime(timeInSeconds)}</Text>
            </View>

            <View style={estilo.alinhamento}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ backgroundColor: activeOption === 'cartao' ? '#1877F2' : '#A6A6A6', flex: 1, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8, marginRight: 10, marginTop: 15 }} onPress={() => setActiveOption('cartao')}>
                        <View style={estilo.aoLadoPagamento}>
                            <Image source={iconeCartao} style={estilo.imgCartao} />
                            <Text style={estilo.textoBotao}>Cartão</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: activeOption === 'pix' ? '#1877F2' : '#A6A6A6', flex: 1, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8, marginTop: 15 }} onPress={() => setActiveOption('pix')}>
                        <View style={estilo.aoLadoPagamento}>
                            <Image source={iconePix} style={estilo.imgPix} />
                            <Text style={estilo.textoBotaoPix}>Pix</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: activeOption === 'boleto' ? '#1877F2' : '#A6A6A6', flex: 1, paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8, marginLeft: 10, marginTop: 15 }} onPress={() => setActiveOption('boleto')}>
                        <View style={estilo.aoLadoPagamento}>
                            <Image source={iconeCodigoDeBarras} style={estilo.imgCartao} />
                            <Text style={estilo.textoBotao}>Boleto</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {renderActiveScreen()}
            </View>

            <View style={estilo.fundoAzul}>

                <View>
                    <Text style={estilo.textoPagando}>Você está pagando</Text>
                </View>

                <View style={estilo.fundoBrancoValor}>
                    <Text style={estilo.textoValor}>R$ 600,00</Text>
                </View>

                <View style={estilo.aoLadoPagamento}>
                    <Image source={imgEmojiCero} style={estilo.emojiCerto} />
                    <Text style={estilo.textoBeneficios}>Hospedagem</Text>
                </View>

                <View style={estilo.aoLadoPagamento}>
                    <Image source={imgEmojiCero} style={estilo.emojiCerto} />
                    <Text style={estilo.textoBeneficios}>Transporte</Text>
                </View>

                <View style={estilo.aoLadoPagamento}>
                    <Image source={imgEmojiCero} style={estilo.emojiCerto} />
                    <Text style={estilo.textoBeneficios}>Reembolso Garantido</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity style={estilo.botaoConfirmar}>
                    <Text style={estilo.textoConfirmar}>CONFIRMAR</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

    )
}

const estilo = StyleSheet.create({

    viewPrincipal: {
        backgroundColor: "#F1F3F6",
        paddingVertical: 65,
        paddingHorizontal: 40,
        display: 'flex',
        flexDirection: 'column',
    },

    imgDinheiro: {
        borderRadius: 50,
        height: 50,
        width: 50,
    },

    textoDetalhes: {
        fontSize: 24,
        marginLeft: 10,
        fontFamily: "NunitoMaisNegrito"
    },

    aoLado: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
    },

    aoLadoPagamento: {
        flexDirection: "row",
        alignItems: "center",
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    timer: {
        marginVertical: 10,
        paddingVertical: 3,
        paddingHorizontal: 13,
        fontSize: 20,
        color: "#fff",
        fontFamily: "NunitoMaisNegrito",
        backgroundColor: "#2970DB",
        borderRadius: 15,
    },

    imgCartao: {
        height: 30,
        width: 30,
        left: -10
    },

    imgPix: {
        height: 30,
        width: 30,
    },

    alinhamento: {
        display: "flex",
        flexDirection: "column-reverse",
    },

    fundoAzul: {
        backgroundColor: "#2970DB",
        borderRadius: 30,
        marginTop: 20,
        paddingVertical: 20,
    },

    textoPagando: {
        fontSize: 17,
        fontFamily: "NunitoMaisNegrito",
        color: "#fff",
        textAlign: "center",
    },

    fundoBrancoValor: {
        backgroundColor: "#fff",
        marginHorizontal: 25,
        borderRadius: 7,
        marginVertical: 20,
    },

    textoValor: {
        fontSize: 33,
        fontFamily: "NunitoMaisNegrito",
        paddingVertical: 20,
        textAlign: "center",
    },

    textoBeneficios: {
        fontSize: 16,
        fontFamily: "NunitoMaisNegrito",
        color: "#fff",
        paddingVertical: 5,
        marginLeft: 10,
    },

    emojiCerto: {
        height: 20,
        width: 20,
        marginLeft: 10,
        paddingVertical: 5,
        alignSelf: "center",
        marginLeft: 60,
    },

    botaoConfirmar: {
        borderColor: "#2970DB",
        backgroundColor: "#2970DB",
        borderRadius: 30,
        marginVertical: 20,
        paddingVertical: 10,
        alignItems: "center",
        marginBottom: 80,
    },

    textoConfirmar: {
        fontSize: 17,
        color: "#fff",
        fontFamily: "NunitoMaisNegrito"
    },

    textoBotao: {
        fontSize: 16,
        color: "#FFFFFF",
        fontFamily: "NunitoMaisNegrito",
        marginLeft: -4,
    },

    textoBotaoPix: {
        fontSize: 16,
        color: "#FFFFFF",
        fontFamily: "NunitoMaisNegrito",
        marginLeft: 5,
    }
})

export default Pagamentos;