import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Alert, Modal, ImageBackground, Animated, ScrollView } from "react-native";
import { spin } from "./Spin";

//-----------------------------------------------
import Swiper from 'react-native-swiper'
//-----------------------------------------------

import Icon from 'react-native-vector-icons/FontAwesome';

import imagem1 from "../assets/imagem1.jpg";
const largura = Dimensions.get('screen').width;

import mapa from "../assets/mapa.png"
import seta from "../assets/seta.png"

import imagem_mais from "../assets/imagem_mais.jpg";

import suite from "../assets/suite.png";
import naoFumar from "../assets/naoFumar.png";
import wifiGratuito from "../assets/wifiGratuito.png";
import recepcao24Horas from "../assets/recepcao24Horas.png";
import barSuite from "../assets/barSuite.png";
import entrada from "../assets/entrada.png";
import saida from "../assets/saida.png";

import aviao from "../assets/aviao.png";
import aviaoVolta from "../assets/aviaoVolta.png";
import iconeLatam from "../assets/iconeLatam.png";
import mala from "../assets/mala.png";

import onibus from "../assets/onibus.png";
import informacao from "../assets/informacao.png";
import semiLeito from "../assets/semiLeito.png";
import buser from "../assets/buser.png";

import camera from "../assets/camera.png";

import turistico1 from "../assets/turistico1.jpg";
import turistico2 from "../assets/turistico2.jpg";
import turistico3 from "../assets/turistico3.jpg";

import restaurante1 from "../assets/restaurante1.jpg";
import restaurante2 from "../assets/restaurante2.jpeg";
import restaurante3 from "../assets/restaurante3.jpg";

import bar1 from "../assets/bar1.jpg";
import bar2 from "../assets/bar2.jpg";
import bar3 from "../assets/bar3.jpg";

import localizacao from "../assets/localizacao.png";

import Turistico from "./Turistico";
import Restaurantes from "./Restaurantes";
import Bares from "./Bares";


const largura2 = Dimensions.get('screen').width;

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";

import { useNavigation } from '@react-navigation/native';

const Body = () => {

    const navigation = useNavigation();

    const handlePagamentoPress = () => {
        navigation.navigate('Pagamentos');
    };


    const [modalVisible, setModalVisible] = useState(false);

    // -------------------------------------------------
    const [botaoAzul, setBotaoAzul] = useState(true);
    const alternarValores = () => {
        setBotaoAzul(!botaoAzul);
    };
    // -------------------------------------------------

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleToggleCheckbox1 = () => {
        setIsChecked1(!isChecked1);
        setIsChecked2(false);
    };

    const handleToggleCheckbox2 = () => {
        setIsChecked2(!isChecked2);
        setIsChecked1(false);
    };

    // -------------------------------------------------

    const [isChecar1, setIsChecar1] = useState(false);
    const [isChecar2, setIsChecar2] = useState(false);

    const chamarFuncao1 = () => {
        setIsChecar1(!isChecar1);
        setIsChecar2(false);
    };

    const chamarFuncao2 = () => {
        setIsChecar2(!isChecar2);
        setIsChecar1(false);
    };

    // -------------------------------------------------

    //FUNÇÃO TROCAR TELA

    const [activeOption, setActiveOption] = useState('turistico'); // Inicialmente, turistico é ativo
    const renderActiveScreen = () => {
        if (activeOption === 'turistico') {
            return <Turistico />;
        } else if (activeOption === 'restaurantes') {
            return <Restaurantes />;
        } else if (activeOption === 'bares') {
            return <Bares />;
        }
    };

    return (
        <ScrollView>
            <View style={estilo.aoLado}>
                <View>
                    <Image source={seta} style={estilo.imgSeta} />
                </View>

                <View>
                    <TouchableOpacity style={estilo.botaoReserve} onPress={handlePagamentoPress}>
                        <Text style={estilo.textoReserve}>Reserve agora</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={estilo.headerBussula}>
                <Animated.View style={{ transform: [{ rotate: spin }] }} >
                    <Icon
                        name="compass"
                        size={25}
                        color="black"
                        style={estilo.Localizar}
                    />
                </Animated.View>
                <Text style={estilo.Texto1}>  -  RJ    |   R$ 0,00   |    26 mai - 28 mai</Text>
            </View>

            <View>
                <Text style={estilo.titulo}>Arraial do Cabo - Brisas do Farol</Text>
            </View>

            <View>
                <Image source={imagem1} style={estilo.imagem} />
            </View>

            <View>
                <Image source={imagem_mais} style={estilo.imagemMais} />
                <TouchableOpacity onPress={() => setModalVisible(true)}><Text style={estilo.textoImagem}>+20</Text></TouchableOpacity>
            </View>

            <View style={estilo.cardCinza}>
                <Text style={estilo.texto}>Localizado em Arraial do Cabo e com a Praia Grande a cerca de 600 metros, a
                    propriedade está situada a 300 m da Praça da Independência, a 500 m do Estádio Hermenegildo Barcellos e a 400 m da Prefeitura de Arraial do Cabo. O Museu Oceanográfico fica a menos de 1 km de distância e a Igreja Nossa Senhora dos Remédios fica a 12 minutos a pé da pousada.</Text>
            </View>

            <View style={estilo.cardAzul}>
                <View>

                    <View style={estilo.marginNota}>
                        <TouchableOpacity>
                            <Text style={estilo.textoNota}>8,0</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={estilo.aoLado}>
                        <View style={estilo.marginAvaliacao}>
                            <Text style={estilo.textoAvaliacao}><Text style={estilo.boldText}>Muito bom!</Text> 729 avaliações </Text>
                        </View>

                        <View>
                            <ImageBackground source={mapa} style={estilo.imagemBackgroundMapa} borderRadius={20}>
                                <TouchableOpacity style={estilo.botaoMapa}>
                                    <View style={estilo.fundinAzul}>
                                        <Icon name="map" size={15} color="white" style={estilo.iconMapa} />
                                        <Text style={estilo.msgMapa}>VER NO MAPA</Text>
                                    </View>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    </View>

                    <View style={estilo.fundoBranco1}>
                        <Text style={estilo.tituloSuite}>Suíte</Text>
                        <View style={estilo.aoLadoIcones}>
                            <Image source={suite} style={estilo.imgSuite} />
                            <Text style={estilo.textoDescricaoSuite}>Estúdio inteiro <Text style={estilo.boldText}>•</Text> 1 banheiro <Text style={estilo.boldText}>•</Text> 1 cozinha <Text style={estilo.boldText}>•</Text> 20m² <Text style={estilo.boldText}>•</Text> 3 camas (2 de solteiro, 1 de casal).</Text>
                        </View>
                    </View>

                    <View style={estilo.fundoBranco2}>
                        <View>
                            <Text style={estilo.tituloSuite}>Serviços de hospedagem</Text>
                        </View>
                        <View style={estilo.aoLadoIcones}>
                            <Image source={naoFumar} style={estilo.imgSuite} />
                            <Text style={estilo.textoServicos}>Quartos para não fumantes</Text>
                        </View>
                        <View style={estilo.aoLadoIcones}>
                            <Image source={wifiGratuito} style={estilo.imgSuite} />
                            <Text style={estilo.textoServicos}>Wi-fi gratuito</Text>
                        </View>
                        <View style={estilo.aoLadoIcones}>
                            <Image source={recepcao24Horas} style={estilo.imgSuite} />
                            <Text style={estilo.textoServicos}>Recepção 24 horas</Text>
                        </View>
                        <View style={estilo.aoLadoIcones}>
                            <Image source={barSuite} style={estilo.imgSuite} />
                            <Text style={estilo.textoServicos1}>Bar</Text>
                        </View>
                    </View>

                    <View style={estilo.fundoBranco3}>
                        <Text style={estilo.tituloSuite}>Condições de hospedagem</Text>
                        <Text style={estilo.subTituloHospedagem}>Horário</Text>
                        <View style={estilo.aoLadoIcones}>
                            <Image source={entrada} style={estilo.imgSuite} />
                            <Text style={estilo.textoCheckIn}>Horário de Check in: de 14:00 às 22:00</Text>
                        </View>
                        <View style={estilo.aoLadoIcones}>
                            <Image source={saida} style={estilo.imgSuite} />
                            <Text style={estilo.textoCheckIn1}>Horário de Check out: 11:00</Text>
                        </View>
                    </View>

                </View>
            </View>

            <View>
                <Text style={estilo.tituloTransporte}>Detalhes do Transporte</Text>
            </View>

            <View>
                <Text style={estilo.textoVoos}>Opções de voos:</Text>
            </View>

            <View style={estilo.fundoCinzaVoos}>
                <View style={estilo.fundoBrancoVoos1}>
                    <View style={estilo.aoLadoAviao}>
                        <Image source={aviao} style={estilo.aviao} />
                        <Text style={estilo.textoData}><Text style={estilo.boldText}>Ida</Text>   26/05</Text>
                    </View>
                    <View style={estilo.aoLadoAviao}>
                        <TouchableOpacity onPress={handleToggleCheckbox1} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 17, height: 17, borderRadius: 15, borderWidth: 1, borderColor: '#1877F2', backgroundColor: isChecked1 ? '#1877F2' : 'transparent' }} />
                        </TouchableOpacity>
                        <Image source={iconeLatam} style={estilo.iconeLatam} />
                        <Text style={{ fontFamily: "NunitoRegular" }}>LATAM</Text>
                        <Text style={{ fontFamily: "NunitoMaisNegrito" }}>16:40</Text>
                        <Text style={{ color: "#008037", fontFamily: "NunitoRegular" }}>Direto</Text>
                        <Text style={{ fontFamily: "NunitoMaisNegrito" }}>17:45</Text>
                        <Text style={{ fontFamily: "NunitoRegular" }}>1h 5m</Text>
                        <Image source={mala} style={estilo.iconeLatam} />
                    </View>

                    <View style={estilo.aoLadoAviao}>
                        <TouchableOpacity onPress={handleToggleCheckbox2} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 17, height: 17, borderRadius: 15, borderWidth: 1, borderColor: '#1877F2', backgroundColor: isChecked2 ? '#1877F2' : 'transparent' }} />
                        </TouchableOpacity>
                        <Image source={iconeLatam} style={estilo.iconeLatam} />
                        <Text style={{ fontFamily: "NunitoRegular" }}>LATAM</Text>
                        <Text style={{ fontFamily: "NunitoMaisNegrito" }}>09:30</Text>
                        <Text style={{ color: "#008037", fontFamily: "NunitoRegular" }}>Direto</Text>
                        <Text style={{ fontFamily: "NunitoMaisNegrito" }}>10:35</Text>
                        <Text style={{ fontFamily: "NunitoRegular" }}>1h 5m</Text>
                        <Image source={mala} style={estilo.iconeLatam} />
                    </View>

                </View>

                <View style={estilo.fundoBrancoVoos}>
                    <View style={estilo.aoLadoAviao}>
                        <Image source={aviaoVolta} style={estilo.aviao} />
                        <Text style={estilo.textoData}><Text style={estilo.boldText}>Volta</Text>   28/05</Text>
                    </View>

                    <View style={estilo.aoLadoAviao}>
                        <TouchableOpacity onPress={chamarFuncao1} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 17, height: 17, borderRadius: 15, borderWidth: 1, borderColor: '#1877F2', backgroundColor: isChecar1 ? '#1877F2' : 'transparent' }} />
                        </TouchableOpacity>
                        <Image source={iconeLatam} style={estilo.iconeLatam} />
                        <Text style={{ fontFamily: "NunitoRegular" }}>LATAM</Text>
                        <Text style={{ fontFamily: "NunitoMaisNegrito" }}>06:20</Text>
                        <Text style={{ color: "#008037", fontFamily: "NunitoRegular" }}>Direto</Text>
                        <Text style={{ fontFamily: "NunitoMaisNegrito" }}>07:25</Text>
                        <Text style={{ fontFamily: "NunitoRegular" }}>1h 5m</Text>
                        <Image source={mala} style={estilo.iconeLatam} />
                    </View>

                    <View style={estilo.aoLadoAviao}>
                        <TouchableOpacity onPress={chamarFuncao2} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 17, height: 17, borderRadius: 15, borderWidth: 1, borderColor: '#1877F2', backgroundColor: isChecar2 ? '#1877F2' : 'transparent' }} />
                        </TouchableOpacity>
                        <Image source={iconeLatam} style={estilo.iconeLatam} />
                        <Text style={{ fontFamily: "NunitoRegular" }}>LATAM</Text>
                        <Text style={{ fontFamily: "NunitoMaisNegrito" }}>09:45</Text>
                        <Text style={{ color: "#008037", fontFamily: "NunitoRegular" }}>Direto</Text>
                        <Text style={{ fontFamily: "NunitoMaisNegrito" }}>10:50</Text>
                        <Text style={{ fontFamily: "NunitoRegular" }}>1h 5m</Text>
                        <Image source={mala} style={estilo.iconeLatam} />
                    </View>

                </View>
            </View>

            <View>
                <Text style={estilo.textoOnibus}>Opções de ônibus:</Text>
            </View>

            <View style={estilo.fundoCinzaVoos}>

                <View style={estilo.fundoBrancoVoos1}>
                    <View style={estilo.aoLadoAviao9}>
                        <Image source={onibus} style={estilo.onibus} />
                        <Text style={estilo.textoOnibusInformacao}>Parceiro Buser</Text>
                    </View>
                    <View style={estilo.aoLadoAviao}>
                        <Image source={informacao} style={estilo.onibus} />
                        <Text style={estilo.textoOnibusInformacao}>Embarque com documento</Text>
                    </View>
                    <View>
                        <Text style={estilo.horariosVoo}>11:15</Text>
                        <Text style={estilo.horariosVoo2}>22:05</Text>
                        <Image source={localizacao} style={estilo.imgLocalizacao} />
                        <Text style={estilo.textDesembarque}>Embarque: <Text style={estilo.boldText}>Belo Horizonte</Text></Text>
                        <Text style={estilo.textDesembarque2}>Desembarque: <Text style={estilo.boldText}>Arraial do Cabo</Text></Text>
                    </View>
                    <Image source={buser} style={estilo.imgBuser} />
                    <View style={estilo.gambiarraSemQuerer}>
                        <Text style={{ fontFamily: "NunitoRegular" }}>Poltrona:</Text>
                        <View style={estilo.aoLadoAviao}>
                            <Image source={semiLeito} />
                            <Text style={estilo.boldText}>Semi-Leito</Text>
                        </View>
                    </View>
                </View>

                <View style={estilo.fundoBrancoVoos1}>
                    <View style={estilo.aoLadoAviao9}>
                        <Image source={onibus} style={estilo.onibus} />
                        <Text style={estilo.textoOnibusInformacao}>Parceiro Buser</Text>
                    </View>
                    <View style={estilo.aoLadoAviao}>
                        <Image source={informacao} style={estilo.onibus} />
                        <Text style={estilo.textoOnibusInformacao}>Embarque com documento</Text>
                    </View>
                    <View>
                        <Text style={estilo.horariosVoo}>13:15</Text>
                        <Text style={estilo.horariosVoo2}>00:05</Text>
                        <Image source={localizacao} style={estilo.imgLocalizacao} />
                        <Text style={estilo.textDesembarque}>Embarque: <Text style={estilo.boldText}>Belo Horizonte</Text></Text>
                        <Text style={estilo.textDesembarque2}>Desembarque: <Text style={estilo.boldText}>Arraial do Cabo</Text></Text>
                    </View>
                    <Image source={buser} style={estilo.imgBuser} />
                    <View style={estilo.gambiarraSemQuerer}>
                        <Text style={{ fontFamily: "NunitoRegular" }}>Poltrona:</Text>
                        <View style={estilo.aoLadoAviao}>
                            <Image source={semiLeito} />
                            <Text style={estilo.boldText}>Semi-Leito</Text>
                        </View>
                    </View>
                </View>
            </View>



            <View style={estilo.estilo1}>
                <TouchableOpacity
                    style={[estilo.estilo2, { backgroundColor: botaoAzul ? '#2970DB' : '#A6A6A6' }]}
                    onPress={alternarValores}
                >
                    <Text style={estilo.estilo3}>
                        {botaoAzul ? 'Selecionado' : 'Selecionar'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[estilo.estilo2, { backgroundColor: botaoAzul ? '#A6A6A6' : '#2970DB' }]}
                    onPress={alternarValores}
                >
                    <Text style={estilo.estilo3}>
                        {botaoAzul ? 'Selecionar' : 'Selecionado'}
                    </Text>
                </TouchableOpacity>
            </View>


            <View style={estilo.consertar}>

                <View style={estilo.aoLado}>
                    <Text style={estilo.textoLugares}>Dicas de lugares para visitar nas proximidades</Text>
                    <Image source={camera} style={estilo.camera} />
                </View>

                <View style={estilo.viewBotao}>
                    <TouchableOpacity style={{ backgroundColor: activeOption === 'turistico' ? '#1877F2' : '#A6A6A6', width: 100, paddingVertical: 8, paddingHorizontal: 7, borderRadius: 10, marginHorizontal: 10 }} onPress={() => setActiveOption('turistico')}>
                        <Text style={estilo.buttonText}>Turístico</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: activeOption === 'restaurantes' ? '#1877F2' : '#A6A6A6', width: 100, paddingVertical: 8, paddingHorizontal: 7, borderRadius: 10, marginHorizontal: 10 }} onPress={() => setActiveOption('restaurantes')}>
                        <Text style={estilo.buttonText}>Restaurante</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: activeOption === 'bares' ? '#1877F2' : '#A6A6A6', width: 100, paddingVertical: 8, paddingHorizontal: 7, borderRadius: 10, marginHorizontal: 10 }} onPress={() => setActiveOption('bares')}>
                        <Text style={estilo.buttonText}>Bares</Text>
                    </TouchableOpacity>
                </View>
                {renderActiveScreen()}
            </View>

            {/* ------------------------ MODAL IMAGEM------------------------------------------------- */}

            <View>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={estilo.viewModal}>
                        <View style={{ backgroundColor: "#FFFFFF", borderRadius: 15, }}>
                            <Swiper style={estilo.wrapperModal} showsButtons={true} >
                                <View style={estilo.slide1}>
                                    <Image source={img1} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img2} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img3} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img4} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img5} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img6} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img7} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img8} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img9} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img10} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img11} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img12} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img13} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img14} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img15} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img16} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img17} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img18} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img19} style={estilo.imgModal} />
                                </View>
                                <View style={estilo.slide1}>
                                    <Image source={img20} style={estilo.imgModal} />
                                </View>

                            </Swiper>

                            <View style={estilo.orgX}>
                                <TouchableOpacity onPress={() => setModalVisible(false)}><Text style={estilo.xModal}>x</Text></TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>

            </View>

            {/* ------------------------ MODAL IMAGEM ^^^^^^ -------------------------------------------------- */}

        </ScrollView>
    )
}

const estilo = StyleSheet.create({

    imgSeta: {
        marginVertical: 15,
        marginLeft: 30,
        width: 40,
        height: 40,
    },

    headerBussula: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#F1F3F6",
        paddingVertical: 10,
        marginBottom: 15,
        marginHorizontal: 30
    },

    Texto1: {
        textAlign: "center",
        color: "gray",
        fontSize: 15,
    },

    Localizar: {
        color: "gray",
        alignSelf: 'center',
        justifyContent: 'center',
    },


    titulo: {
        fontSize: 32,
        paddingHorizontal: 25,
        fontFamily: "NunitoRegular",
        marginBottom: -25,
        marginLeft: 9,
    },

    view_escondido: {
        position: 'relative',
        alignItems: 'flex-end',
    },

    imagem: {
        width: "85%",
        height: 735 / 1350 * largura,
        marginBottom: -18,
        marginTop: 27,
        alignSelf: "center",
        borderRadius: 20,

    },

    imagemMais: {
        width: 140,
        height: 90,
        top: -86,
        left: 225,
        borderRadius: 7,
        backgroundColor: "black",
        opacity: 0.5,
    },

    textoImagem: {
        color: "#FFF",
        fontFamily: "NunitoRegular",
        fontSize: 23,
        top: -143,
        left: 275,
    },

    cardCinza: {
        backgroundColor: "#F1F3F6",
        marginTop: -96,
        flex: 1,
        padding: 10,
        margin: 28,
        borderRadius: 20,
        marginBottom: 10,
    },

    cardAzul: {
        flex: 1,
        backgroundColor: "#2970DB",
        borderRadius: 20,
        marginHorizontal: 28,
    },

    marginNota: {
        marginLeft: -305,
        top: 13,
        borderRadius: 30,
        backgroundColor: "#FFF",
        padding: 7,
        alignSelf: "center",
    },

    textoNota: {
        fontSize: 11,
        fontFamily: "NunitoMaisNegrito",
    },

    marginAvaliacao: {
        marginLeft: 130,
        top: -3,
        right: 100,
        padding: 7,
        backgroundColor: '#fff',
        borderRadius: 30,
    },

    textoAvaliacao: {
        fontSize: 12,
        fontFamily: "NunitoRegular",
    },

    aoLado: {
        flexDirection: "row",
        alignItems: "center",
    },

    aoLadoAviao: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 8,
        gap: 7,
    },

    aoLadoAviao9: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 8,
        gap: 7,
        top: 8,
    },

    aoLadoIcones: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },

    IconMapaReto: {
        flexDirection: "row",
    },

    botaoMapa: {
        borderColor: "#2970DB",
        alignItems: "center",
    },

    iconMapa: {
        position: "absolute",
        top: 9,
        left: 10,
    },

    fundinAzul: {
        backgroundColor: "#2970DB",
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginTop: 9,
    },

    msgMapa: {
        fontSize: 12,
        color: "#fff",
        marginLeft: 25,
        fontFamily: "NunitoMaisNegrito",
    },

    fundoBranco1: {
        backgroundColor: "#ffffff",
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 15,
    },

    fundoBranco2: {
        backgroundColor: "#ffffff",
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 15,
    },

    tituloSuite: {
        fontSize: 17,
        marginHorizontal: 20,
        marginVertical: 10,
        fontFamily: "NunitoMaisNegrito",
    },

    imgSuite: {
        height: 25,
        width: 25,
        borderRadius: 20,
        marginLeft: 10,
    },

    textoServicos: {
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 4,
        fontFamily: "NunitoRegular",
    },

    textoServicos1: {
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 4,
        fontFamily: "NunitoRegular",
    },

    fundoBranco3: {
        backgroundColor: "#ffffff",
        marginHorizontal: 20,
        marginBottom: 15,
        borderRadius: 10,
    },

    subTituloHospedagem: {
        fontSize: 16,
        marginLeft: 20,
        marginBottom: 10,
        fontFamily: "NunitoMaisNegrito",
    },

    textoCheckIn: {
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 4,
        fontFamily: "NunitoRegular",
    },

    textoCheckIn1: {
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 4,
        fontFamily: "NunitoRegular",
    },

    tituloTransporte: {
        marginHorizontal: 28,
        fontSize: 24,
        paddingVertical: 20,
        fontFamily: "NunitoMaisNegrito",
    },

    textoVoos: {
        fontSize: 17,
        marginLeft: 28,
        marginBottom: 15,
        fontFamily: "NunitoRegular",
    },

    textoDescricaoSuite: {
        maxWidth: "87%",
        marginLeft: 7,
        marginBottom: 10,
        fontSize: 14,
        fontFamily: "NunitoRegular",
    },

    imagemBackgroundMapa: {
        height: 50,
        marginLeft: -90,
        marginRight: -50,
        marginTop: -20,
    },

    Textobeneficios: {
        fontSize: 14,
        marginLeft: 47,
        color: "#fff",
        lineHeight: 23,
        fontWeight: "bold"
    },

    margemCardAzul: {
        borderBottomColor: "#fff",
        borderBottomWidth: 0.7,
        paddingVertical: 7,
        marginHorizontal: 15,
    },

    transporte: {
        color: "#fff",
        fontSize: 15,
        textAlign: "center",
        paddingVertical: 4,
        fontWeight: "bold"
    },

    texto: {
        fontSize: 15,
        textAlign: "justify",
        lineHeight: 22,
        fontFamily: "NunitoRegular",
    },

    cardBranco: {
        flex: 1,
        margin: 32,
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginTop: -39,
    },

    texto_beneficios: {
        fontSize: 9,
        textAlign: "center",
        fontFamily: "Black"
    },

    fumar: {
        width: 15,
        height: 15,
        position: 'absolute',
        top: 20,
        left: 20,
        borderRadius: 10,
    },

    wifi: {
        width: 15,
        height: 15,
        position: 'absolute',
        top: 43,
        left: 20,
        borderRadius: 10,
    },

    recep: {
        width: 15,
        height: 15,
        position: 'absolute',
        top: 66,
        left: 20,
        borderRadius: 10,
    },

    bar: {
        width: 15,
        height: 15,
        position: "relative",
        top: 90,
        left: 20,
        borderRadius: 10,
    },

    imagem3: {
        width: "93%",
        height: 121 / 470 * largura2,
        alignSelf: "center",
        borderRadius: 15,
        marginVertical: 10,
    },

    botaoReserve: {
        borderColor: "#2970DB",
        backgroundColor: "#2970DB",
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: 170,
        borderRadius: 20,
        alignItems: "center",
    },

    textoReserve: {
        fontSize: 15,
        color: "#fff",
        fontFamily: "NunitoMaisNegrito"
    },

    viewModal: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 200,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    orgX: {
        position: 'absolute',
        backgroundColor: '#1877F2',
        borderRadius: 50,
        padding: 8,
        top: -10,
        right: -12,
        width: 33,
        height: 33,
    },

    xModal: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 30,
        fontFamily: "Black",
        alignItems: "center",
        marginTop: -14,
    },

    orgXMenu: {
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 8,
        top: -48,
        width: 33,
        height: 33,
    },

    xModalMenu: {
        position: 'absolute',
        color: 'black',
        fontSize: 30,
        fontFamily: "Black",
        alignItems: "center",
        marginTop: -14,
    },

    fundoCinzaVoos: {
        backgroundColor: "#F1F3F6",
        marginHorizontal: 28,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 20,
    },

    fundoBrancoVoos1: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginBottom: 20,
    },

    fundoBrancoVoos: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },

    aviao: {
        height: 25,
        width: 25,
    },

    onibus: {
        height: 17,
        width: 17,
    },

    textoData: {
        fontSize: 16,
        marginLeft: 5,
        fontFamily: "NunitoRegular",
    },

    textoOnibusInformacao: {
        fontSize: 13,
        fontFamily: "NunitoRegular",
    },

    iconeLatam: {
        width: 20,
        height: 20,
    },

    boldText: {
        fontFamily: "NunitoMaisNegrito",
    },

    textoOnibus: {
        fontSize: 17,
        marginLeft: 28,
        marginVertical: 15,
        fontFamily: "NunitoRegular",
    },

    localizacao: {
    },

    textoLugares: {
        fontFamily: "NunitoMaisNegrito",
        fontSize: 26,
        marginHorizontal: 28,
        marginVertical: 20,
    },

    camera: {
        top: 15,
        left: -150,
    },

    viewBotao: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },

    botaoLugares: {
        width: 100,
        backgroundColor: '#A6A6A6',
        paddingVertical: 8,
        paddingHorizontal: 7,
        borderRadius: 10,
        marginHorizontal: 10,
    },

    buttonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: "NunitoMaisNegrito",
    },

    imagensDicaLugares: {
        height: 120,
        width: 330,
        borderRadius: 60,
    },

    horariosVoo: {
        fontFamily: "NunitoMaisNegrito",
        marginBottom: 20,
        marginLeft: 25,
        top: 15,
    },

    horariosVoo2: {
        fontFamily: "NunitoMaisNegrito",
        marginLeft: 25,
        top: 17,
    },

    imgLocalizacao: {
        left: 64,
        top: -43,
        height: 60,
    },

    textDesembarque: {
        left: 105,
        top: -104,
        fontFamily: "NunitoRegular",
    },

    textDesembarque2: {
        left: 105,
        top: -82,
        fontFamily: "NunitoRegular",
    },

    imgBuser: {
        height: 40,
        width: 45,
        left: 250,
        top: -210,
    },

    gambiarraSemQuerer: {
        marginTop: -100,
        marginLeft: 20,
    },

    estilo1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    estilo2: {
        width: 140,
        padding: 10,
        margin: 106,
        borderRadius: 15,
        top: -450,
        left: 70,
    },

    estilo3: {
        color: 'white',
        fontFamily: "NunitoMaisNegrito",
        textAlign: 'center',
        fontSize: 15
    },

    consertar: {
        marginTop: -500,
    },

    wrapper: {
        height: 215,
    },
    teste: {
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
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
    },





    wrapperModal: {
    },

    imgModal: {
        height: "90%",
        width: "75%",
        borderRadius: 5,
    }


})

export default Body;