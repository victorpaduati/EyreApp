import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome } from 'react-native-vector-icons';

import logo from "../assets/CADASTRO/logo.png";
import { useNavigation } from '@react-navigation/native';

const Cadastro = () => {

    const navigation = useNavigation();
  
    const handleProfilePress = () => {
        navigation.navigate('Profile');
      };

    //FORMATAÇÃO DO CAMPO DE NOME
    const [name, setName] = useState('');
    const handleNameChange = (text) => {
        const formattedText = text.replace(/[^a-zA-Z ]/g, '').replace(/\b\w/g, (c) => c.toUpperCase());
        setName(formattedText);
    };
    //-----------------------------

    //FORMATAÇÃO DO CAMPO DE DATA DE NASCIMENTO
    const [birthdate, setBirthdate] = useState('');
    const handleInputChange = (text) => {
        const cleanedText = text.replace(/\D/g, '');
        let formattedText = '';
        if (cleanedText.length > 0) {
            formattedText += cleanedText.substring(0, 2);
        }
        if (cleanedText.length >= 3) {
            formattedText += '/' + cleanedText.substring(2, 4);
        }
        if (cleanedText.length >= 5) {
            formattedText += '/' + cleanedText.substring(4, 8);
        }
        setBirthdate(formattedText);
    };
    //-----------------------------

    //FORMATAÇÃO DO CAMPO DE CPF
    const [cpf, setCPF] = useState('');
    const formatCPF = (text) => {
        let formattedCPF = text.replace(/\D/g, '');
        formattedCPF = formattedCPF.replace(/(\d{3})(\d)/, '$1.$2');
        formattedCPF = formattedCPF.replace(/(\d{3})(\d)/, '$1.$2');
        formattedCPF = formattedCPF.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        setCPF(formattedCPF);
    };
    //-----------------------------

    const [email, setEmail] = useState('');

    //FORMATAÇÃO DO CAMPO DE TELEFONE
    const [phoneNumber, setPhoneNumber] = useState('');
    const formatPhoneNumber = (number) => {
        let formattedNumber = number;
        if (number.length === 10) {
            formattedNumber = `(${number.substr(0, 2)}) ${number.substr(2, 5)}-${number.substr(7, 4)}`;
        }
        return formattedNumber;
    };
    const handlePhoneNumberChange = (number) => {
        const formattedNumber = formatPhoneNumber(number);
        setPhoneNumber(formattedNumber);
    };
    //-----------------------------

    //FORMATAÇÃO DO CAMPO DE SENHA E CONFIRMA SENHA
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handlePasswordChange = (text) => {
        setPassword(text);
    };
    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
    };
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    //-----------------------------

    //ACEITAR TERMOS
    const [aceito, setAceito] = useState(false);
    const handleAceitarTermos = () => {
        setAceito(!aceito);
    //-----------------------------
    };

    return (
        <View style={estilo.fundo}>

            <View>
                <Image source={logo} style={estilo.imgLogo} />
            </View>

            <View style={estilo.ladinho}>
                <Text style={estilo.estiloCadastro}>CADASTRO</Text>
            </View>

            <View>
                <TextInput
                    style={estilo.campos}
                    value={name}
                    onChangeText={handleNameChange}
                    placeholder="Nome Completo"
                />
                <TextInput
                    style={estilo.campos}
                    placeholder="Data de Nascimento"
                    value={birthdate}
                    onChangeText={handleInputChange}
                    keyboardType="numeric"
                />

                <TextInput
                    style={estilo.campos}
                    placeholder="CPF"
                    keyboardType="numeric"
                    maxLength={14}
                    value={cpf}
                    onChangeText={formatCPF}
                />

                <TextInput
                    style={estilo.campos}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <TextInput
                    style={estilo.campos}
                    value={phoneNumber}
                    onChangeText={handlePhoneNumberChange}
                    placeholder="Telefone"
                    keyboardType="numeric"
                    maxLength={15}
                />

                <View>
                    <TextInput
                        secureTextEntry={!showPassword}
                        placeholder="Senha"
                        maxLength={12}
                        value={password}
                        onChangeText={handlePasswordChange}
                        style={estilo.campos}
                    />
                    <FontAwesome
                        name={showPassword ? 'eye-slash' : 'eye'}
                        size={20}
                        onPress={toggleShowPassword}
                        style={estilo.eyeIcon}
                    />
                </View>

                <View>

                    <TextInput
                        secureTextEntry={!showConfirmPassword}
                        placeholder="Confirmar Senha"
                        maxLength={12}
                        value={confirmPassword}
                        onChangeText={handleConfirmPasswordChange}
                        style={estilo.campos}

                    />
                    <FontAwesome
                        name={showConfirmPassword ? 'eye-slash' : 'eye'}
                        size={20}
                        onPress={toggleShowConfirmPassword}
                        style={estilo.eyeIcon}

                    />
                </View>

            </View>

            <View style={estilo.correto}>
                <View>
                    <TouchableOpacity onPress={handleAceitarTermos}>
                        <View
                            style={{
                                width: 20,
                                height: 20,
                                borderWidth: 1,
                                borderColor: 'white',
                                backgroundColor: aceito ? 'green' : 'white',
                                borderRadius: 5
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={estilo.textoTermos}>Li e aceito os <Text style={{ textDecorationLine: 'underline', }}>Termos e {'\n'}Condições</Text> de serviço.</Text>

                <TouchableOpacity style={estilo.botao} onPress={handleProfilePress}>
                    <Text style={estilo.textoBotao}>Criar</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const estilo = StyleSheet.create({

    fundo: {
        backgroundColor: "#1877F2",
    },

    imgLogo: {
        backgroundColor: "#fff",
        alignSelf: "center",
        borderRadius: 10,
        width: 150,
        height: 55,
        marginTop: 100,
        marginBottom: 60
    },

    ladinho: {
        flexDirection: 'row',
        justifyContent: "center",
    },

    estiloLogin: {
        marginHorizontal: 5,
        fontWeight: "bold",
        fontSize: 25,
        color: "#fff",
        marginVertical: 10,
        opacity: 0.6,
    },

    estiloCadastro: {
        marginHorizontal: 5,
        fontFamily: "NunitoMaisNegrito",
        fontSize: 25,
        color: "#fff",
        marginVertical: 10
    },

    campos: {
        backgroundColor: "#fff",
        borderColor: '#fff',
        paddingVertical: 6,
        marginBottom: 10,
        textAlign: "center",
        fontFamily: "NunitoMaisNegrito",
        marginHorizontal: 60,
        borderRadius: 5,
        marginVertical: 5
    },

    eyeIcon: {
        position: "absolute",
        marginLeft: 320,
        marginTop: 15,
        color: '#000',
    },

    textoTermos: {
        color: "#fff",
        fontFamily: "NunitoMaisNegrito",
        paddingHorizontal: 10,
    },

    botao: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        borderRadius: 5,
        paddingHorizontal: 30,
        marginVertical: 5,
    },

    textoBotao: {
        color: "#1877F2",
        textAlign: "center",
        fontFamily: "NunitoMaisNegrito",
        fontSize: 17,
    },

    correto: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 60,
        marginBottom: 110,
    },

});

export default Cadastro;