import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Alert, ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import imgPerfil from "../assets/imgPerfil.png";

const Profile = () => {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.uri);
        }
    };


    //FORMATAÇÃO DO CAMPO DE NOME
    const [name, setName] = useState('');
    const handleNameChange = (text) => {
        const formattedText = text.replace(/[^a-zA-Z ]/g, '').replace(/\b\w/g, (c) => c.toUpperCase());
        setName(formattedText);
    };
    // ----------------------------------------

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
    // ----------------------------------------

    //FORMATAÇÃO DO CAMPO DE CPF
    const [cpf, setCPF] = useState('');
    const formatCPF = (text) => {
        let formattedCPF = text.replace(/\D/g, '');
        formattedCPF = formattedCPF.replace(/(\d{3})(\d)/, '$1.$2');
        formattedCPF = formattedCPF.replace(/(\d{3})(\d)/, '$1.$2');
        formattedCPF = formattedCPF.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        setCPF(formattedCPF);
    };
    // ----------------------------------------

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
    // ----------------------------------------

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


    return (
        <ScrollView style={estilo.viewPrincipal}>
            <View>
                <Text style={estilo.titulo}>Meu Perfil</Text>
            </View>
            <View style={estilo.aoLadoFoto}>
                <Image source={imgPerfil} style={estilo.imgPerfil} />
                <View style={estilo.teste}>
                    {image && (
                        <Image source={{ uri: image }} />
                    )}
                    <View>
                        <TouchableOpacity onPress={pickImage} style={estilo.botaoAlterar}>
                            <Text style={estilo.textoAlterar}>ALTERAR FOTO</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={estilo.botaoRemover}>
                        <Text style={estilo.textoRemover}>REMOVER FOTO</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TextInput
                    placeholder="Nome"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={name}
                    onChangeText={handleNameChange}
                    style={estilo.campos}
                    maxLength={45}
                />

                <TextInput
                    placeholder="Nascimento"
                    autoCapitalize="none"
                    style={estilo.campos}
                    maxLength={10}
                    value={birthdate}
                    onChangeText={handleInputChange}
                    keyboardType="numeric"
                />

                <TextInput
                    placeholder="CPF"
                    autoCapitalize="none"
                    keyboardType="numeric"
                    style={estilo.campos}
                    value={cpf}
                    onChangeText={formatCPF}
                    maxLength={14}
                />

                <TextInput
                    placeholder="E-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={estilo.campos}
                />

                <TextInput
                    placeholder="Telefone"
                    autoCapitalize="none"
                    style={estilo.campos}
                    value={phoneNumber}
                    onChangeText={handlePhoneNumberChange}
                    keyboardType="numeric"
                    maxLength={15}
                />

                <TextInput
                    placeholder="Senha"
                    style={estilo.campos}
                    maxLength={12}
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={handlePasswordChange}
                />

                <TextInput
                    placeholder="Confirma Senha"
                    style={estilo.campos}
                    maxLength={12}
                    secureTextEntry={!showConfirmPassword}
                    value={confirmPassword}
                    onChangeText={handleConfirmPasswordChange}

                />

                <TextInput
                    placeholder="CEP"
                    autoCapitalize="none"
                    keyboardType="numeric"
                    style={estilo.campos}
                />

                <TextInput
                    placeholder="Rua"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={estilo.campos}
                />

                <TextInput
                    placeholder="Número"
                    autoCapitalize="none"
                    keyboardType="numeric"
                    style={estilo.campos}
                />

                <TextInput
                    placeholder="Bairro"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={estilo.campos}
                />

                <TextInput
                    placeholder="Cidade"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={estilo.campos}
                />

                <TextInput
                    placeholder="Estado"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={estilo.campos}
                />
            </View>
            <View>
                <TouchableOpacity style={estilo.botaoSalvar} onPress={() => Alert.alert("ALTERAÇÕES SALVA COM SUCESSO!")}>
                    <Text style={estilo.textoSalvar}>SALVAR ALTERAÇÕES</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const estilo = StyleSheet.create({

    viewPrincipal: {
        padding: 25,
        fontFamily: 'NunitoMaisNegrito',
        backgroundColor: "white",
    },

    titulo: {
        fontSize: 35,
        textAlign: "center",
        paddingVertical: 10,
        fontFamily: "NunitoRegular",

    },

    imgPerfil: {
        marginVertical: 15,
    },

    aoLadoFoto: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        gap: 20,
    },

    teste: {
        flexDirection: "column",
    },

    botaoAlterar: {
        backgroundColor: "#2970DB",
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 15,
        marginBottom: 5,
    },

    textoAlterar: {
        color: "#FFF",
        fontFamily: 'NunitoMaisNegrito',
        textAlign: "center",
    },

    botaoRemover: {
        backgroundColor: "#F1F3F6",
        paddingVertical: 8,
        borderRadius: 15,
    },

    textoRemover: {
        fontFamily: 'NunitoMaisNegrito',
        textAlign: "center",
    },

    campos: {
        backgroundColor: "#F1F3F6",
        textAlign: "center",
        padding: 7,
        marginVertical: 7,
        borderRadius: 10,
        fontFamily: "NunitoRegular",
    },

    botaoSalvar: {
        backgroundColor: "#2970DB",
        paddingVertical: 10,
        borderRadius: 15,
        marginHorizontal: 50,
        marginTop: 10,
        marginBottom: 50,
    },

    textoSalvar: {
        color: "#FFF",
        fontFamily: 'NunitoMaisNegrito',
        textAlign: "center",
    }

});

export default Profile;