import React, { useState } from 'react';
import { View, Button, StatusBar, Text, Image, Alert, StyleSheet, TouchableOpacity, ImageBackground, TextInput, Modal } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { Calendar } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import 'moment/locale/pt-br';
import Autocomplete from 'react-native-autocomplete-input';
import Fundo from "../assets/fundo.png";
import dica1 from "../assets/dica1.jpg";
import dica2 from "../assets/dica2.jpg";
import logo from "../assets/logoEyre2.png";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Detalhes({ navigation, onPressProntoJornada }) {

    const [orcamento, setOrcamento] = useState('');
    const [dataIda, setDataIda] = useState(null);
    const [dataVolta, setDataVolta] = useState(null);
    const [mostrarCalendario, setMostrarCalendario] = useState(false);
    const [tipoData, setTipoData] = useState('');

    const abrirCalendario = (tipo) => {
        setTipoData(tipo);
        setMostrarCalendario(true);
    };

    const fecharCalendario = () => {
        setMostrarCalendario(false);
    };

    const selecionarData = (day) => {
        if (tipoData === 'ida') {
            setDataIda(day.dateString);
            setDataVolta(null);
            setTipoData('volta');
        } else if (tipoData === 'volta' && day.dateString >= dataIda) {
            setDataVolta(day.dateString);
            setMostrarCalendario(false);
        }
    };

    const customTheme = {
        textDayFontFamily: "NunitoRegular",
        textMonthFontFamily: "NunitoRegular",
        textDayHeaderFontFamily: "NunitoRegular",
        arrowColor: '#2970DB',
    };

    LocaleConfig.locales['pt-br'] = {
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ],
        monthNamesShort: [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez',
        ],
        dayNames: [
            'D',
            'S',
            'T',
            'Q',
            'Q',
            'S',
            'S',
        ],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        today: 'Hoje',
    };

    LocaleConfig.defaultLocale = 'pt-br';

    const [isOpenPartida, setIsOpenPartida] = useState(false);
    const toggleOpcoesPartida = () => {
        setIsOpenPartida(!isOpenPartida);
    };

    const [valorPartida, setValorPartida] = useState('PARTIDA');
    const toggleValorPartida = (novoValor) => () => {
        setValorPartida(novoValor);
        setIsOpenPartida(false);
    };

    // ----

    const [isOpenDestino, setIsOpenDestino] = useState(false);
    const toggleOpcoesDestino = () => {
        setIsOpenDestino(!isOpenDestino);
    };

    const [valorDestino, setValorDestino] = useState('DESTINO');
    const toggleValorDestino = (novoValor) => () => {
        setValorDestino(novoValor);
        setIsOpenDestino(false);
    };

    return (
        <View>
            <View style={estilos.fundo}>
                <ImageBackground source={Fundo} style={estilos.imagemDeFundo} />
                <View style={estilos.fundoescuro} />
            </View>
            <View style={estilos.topo}>
                <Image source={logo} style={estilos.logo} />
            </View>

            <View>
                <Text style={estilos.paragrafo}>Deseja fazer uma viagem acessível {'\n'}e personalizada?{'\n'}Então você veio {'\n'}ao lugar certo!</Text>
            </View>
            <View style={estilos.formularioHospedagens}>
                <TextInputMask style={estilos.input}
                    placeholder="QUAL O SEU ORÇAMENTO?"
                    placeholderTextColor="black"
                    keyboardType="numeric"
                    type={'money'}
                    options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: 'R$ ',
                        suffixUnit: '',
                    }}
                    value={orcamento}
                    onChangeText={setOrcamento}
                />

                <View style={estilos.TouchableTesteAoLado}>

                    <View style={estilos.caixaPartidaDestino}>
                        <TouchableOpacity style={estilos.partidaDestino} onPress={toggleOpcoesPartida}>
                            <View style={estilos.iconAoLado}>
                                <Icon name="map-marker" size={20} color="gray" />
                                <Text style={estilos.textoTeste}>{valorPartida}</Text>
                            </View>
                        </TouchableOpacity>
                        {isOpenPartida && (
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                    borderWidth: 2,
                                    borderColor: 'gray',
                                    position: 'absolute',
                                    width: '100%',
                                    top: '100%',
                                    // right: 10, // Ajuste a posição conforme necessário
                                    zIndex: 1,
                                    marginTop: 3,
                                }}
                            >
                                <TouchableOpacity onPress={toggleValorPartida('Bahia')}>
                                    <Text style={estilos.textoOpcoes}>Bahia</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleValorPartida('Minas Gerais')}>
                                    <Text style={estilos.textoOpcoes}>Minas Gerais</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleValorPartida('Rio de Janeiro')}>
                                    <Text style={estilos.textoOpcoes}>Rio de Janeiro</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleValorPartida('São Paulo')}>
                                    <Text style={estilos.textoOpcoes}>São Paulo</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                    <View style={estilos.caixaPartidaDestino}>
                        <TouchableOpacity style={estilos.partidaDestino} onPress={toggleOpcoesDestino}>
                            <View style={estilos.iconAoLado}>
                                <Icon name="map-marker" size={20} color="gray" />
                                <Text style={estilos.textoTeste}>{valorDestino}</Text>
                            </View>
                        </TouchableOpacity>
                        {isOpenDestino && (
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                    borderWidth: 2,
                                    borderColor: 'gray',
                                    position: 'absolute',
                                    width: '100%',
                                    top: '100%',
                                    // right: 10, // Ajuste a posição conforme necessário
                                    zIndex: 1,
                                    marginTop: 3,
                                }}
                            >
                                <TouchableOpacity onPress={toggleValorDestino('Bahia')}>
                                    <Text style={estilos.textoOpcoes}>Bahia</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleValorDestino('Minas Gerais')}>
                                    <Text style={estilos.textoOpcoes}>Minas Gerais</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleValorDestino('Rio de Janeiro')}>
                                    <Text style={estilos.textoOpcoes}>Rio de Janeiro</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={toggleValorDestino('São Paulo')}>
                                    <Text style={estilos.textoOpcoes}>São Paulo</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => abrirCalendario('ida')}>
                        <TextInput
                            style={[estilos.inputDois, {  }]} //fontFamily: "NunitoRegular",
                            placeholder="DATA DE IDA - DATA DE VOLTA"
                            placeholderTextColor="black"
                            value={dataIda && dataVolta ? `${moment(dataIda).format('DD/MM/YYYY')} - ${moment(dataVolta).format('DD/MM/YYYY')}` : ''}
                            editable={false}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={estilos.button} onPress={onPressProntoJornada}>
                        <Text style={estilos.buttonText}>PRONTO PARA JORNADA</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={estilos.viewDica}>
                <Text style={estilos.textDica}>Gostaria de uma dica de lugar para{'\n'} visitar?</Text>
                <View style={estilos.viewDicaImage}>
                    <Image source={dica1} style={estilos.dica} />
                    <Image source={dica2} style={estilos.dica} />
                </View>
            </View>
            {/* MODAL CALENDÁRIO */}
            <View>
                <Modal visible={mostrarCalendario} animationType="slide" transparent={true}>
                    <View style={estilos.modalContainer}>
                        <View style={estilos.modalContent}>
                            <Calendar
                                theme={customTheme}
                                markedDates={{
                                    [dataIda]: {
                                        selected: true,
                                        selectedColor: '#2970DB',
                                        startingDay: true,
                                    },
                                    [dataVolta]: {
                                        selected: true,
                                        selectedColor: '#2970DB',
                                        endingDay: true,
                                    },
                                }}
                                onDayPress={(day) => selecionarData(day)}
                                locale="pt-br"
                                monthNames={[
                                    'Janeiro',
                                    'Fevereiro',
                                    'Março',
                                    'Abril',
                                    'Maio',
                                    'Junho',
                                    'Julho',
                                    'Agosto',
                                    'Setembro',
                                    'Outubro',
                                    'Novembro',
                                    'Dezembro',
                                ]}
                                dayNames={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']}
                            />

                            <TouchableOpacity style={estilos.fecharButton} onPress={fecharCalendario}>
                                <Text style={estilos.fecharButtonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    fundo: {
        width: 800,
        height: 650,
        position: "absolute",
    },

    imagemDeFundo: {
        width: '100%',
        height: '100%',
    },

    fundoescuro: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        opacity: 20,
    },

    topo: {
        backgroundColor: 'white',
        position: "relative",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        height: 60,
    },

    logo: {
        width: 70,
        height: 70,
        marginHorizontal: 30,
        alignSelf: "center",
    },

    paragrafo: {
        fontFamily: "NunitoMaisNegrito",
        color: "white",
        fontSize: 35,
        margin: 5,
        marginHorizontal: 30,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },

    formularioHospedagens: {
        marginHorizontal: 20,
        marginVertical: 20,
        gap: 10
    },

    input: {
        borderWidth: 5,
        borderRadius: 30,
        borderColor: "#2970DB",
        fontSize: 22,
        fontFamily: "NunitoMaisNegrito",
        textAlign: "center",
        padding: 10,
        backgroundColor: "white",
    },

    inputDois: {
        borderWidth: 5,
        borderRadius: 30,
        borderColor: "#2970DB",
        fontSize: 16,
        textAlign: "center",
        padding: 8,
        backgroundColor: "white",
    },

    button: {
        borderWidth: 5,
        borderRadius: 30,
        alignItems: "center",
        borderColor: "#2970DB",
        fontSize: 16,
        paddingVertical: 7,
        paddingHorizontal: 25,
        backgroundColor: "#2970DB",
        alignSelf: 'center',
    },

    buttonText: {
        color: "white",
        fontFamily: "NunitoMaisNegrito",
    },

    viewDica: {
        backgroundColor: "white",
        borderRadius: 20,
        margin: 10,
        marginHorizontal: 20,
    },

    textDica: {
        margin: 10,
        textAlign: "center",
        fontFamily: "NunitoMaisNegrito",
        fontSize: 18,
        color: "#808080"
    },

    dica: {
        width: 150,
        height: 80,
        borderRadius: 15,
    },

    viewDicaImage: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        margin: 15,
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    fecharButton: {
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'lightgray',
        borderRadius: 5,
    },
    fecharButtonText: {
        fontWeight: 'bold',
    },

    // ...
    listaCidadesContainer: {
        position: 'absolute',
        top: 80,
        left: 0,
        right: 0,
        maxHeight: 200,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        elevation: 1,
        zIndex: 1,
    },
    cidadeItem: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },

    TouchableTesteAoLado: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    asdasda: {
        flexDirection: 'row',
    },

    caixaPartidaDestino: {
        width: '45%',
    },

    partidaDestino: {
        textAlign: "center",
        borderWidth: 5,
        borderRadius: 30,
        padding: 13,
        borderColor: "#2970DB",
        fontFamily: "NunitoRegular",
        backgroundColor: "white",
    },

    textoTeste: {
        textAlign: 'center',
        fontSize: 16,
        color: "#000000",
        fontFamily: "NunitoMaisNegrito",
        alignSelf: 'center',
    },

    textoOpcoes: {
        textAlign: 'center',
        padding: 10,
        fontSize: 15,
    },

    iconAoLado: {
        flexDirection: 'row',
        alignSelf: 'center',
        gap: 5,
    }

})