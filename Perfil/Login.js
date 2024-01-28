import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome } from 'react-native-vector-icons';

import logo from "../assets/LOGIN/logo.png";
import google from "../assets/LOGIN/logoGoogle.png";
import facebook from "../assets/LOGIN/logoFacebook.png";
import seta from "../assets/setawh.png";
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation();
  
    const handleProfilePress = () => {
      navigation.navigate('Profile');
    };

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handlePasswordChange = (text) => {
        setPassword(text);
    };
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={estilo.fundo}>
            <TouchableOpacity>
                    <Image source={seta} style={estilo.seta} />
                </TouchableOpacity>
            <View>
                <Image source={logo} style={estilo.imgLogo} />
            </View>

            <View style={estilo.verticalCentro}>

                <View style={estilo.ladinho}>
                    <Text style={estilo.estiloLogin}>LOGIN</Text>
                </View>

                <View>
                    <TextInput
                        style={estilo.emailSenha}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <View>
                        <TextInput
                            secureTextEntry={!showPassword}
                            placeholder="Senha"
                            maxLength={12}
                            value={password}
                            onChangeText={handlePasswordChange}
                            style={estilo.emailSenha}
                        />
                        <FontAwesome
                            name={showPassword ? 'eye-slash' : 'eye'}
                            size={20}
                            onPress={toggleShowPassword}
                            style={estilo.eyeIcon}
                        />
                    </View>

                    <TouchableOpacity style={estilo.botao} onPress={handleProfilePress}>
                        <Text style={estilo.textoBotao}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={estilo.textoOu}>ou</Text>
                </View>

                <View style={estilo.ladinho}>
                    <Image source={google} style={estilo.imgGoogleFacebook} />
                    <Image source={facebook} style={estilo.imgGoogleFacebook} />
                </View>

            </View>

        </View>
    )
}

const estilo = StyleSheet.create({

    fundo: {
        backgroundColor: "#1877F2",
    },

    seta: {
        marginVertical: 10,
        marginHorizontal: 30,
        width: 40,
        height: 40,
    },

    imgLogo: {
        backgroundColor: "#fff",
        alignSelf: "center",
        borderRadius: 10,
        width: 150,
        height: 55,
        marginTop: 100,
    },

    verticalCentro: {
        backgroundColor: "#1877F2",
        justifyContent: "center",
        marginVertical: 100,
        marginBottom: 245
    },

    ladinho: {
        flexDirection: 'row',
        justifyContent: "center",
    },

    estiloLogin: {
        marginHorizontal: 5,
        fontFamily: "NunitoMaisNegrito",
        fontSize: 25,
        color: "#fff",
        marginVertical: 10,
        marginTop: -20,
    },

    estiloCadastro: {
        marginHorizontal: 5,
        fontFamily: "NunitoMaisNegrito",
        fontSize: 25,
        color: "#fff",
        opacity: 0.6,
        marginVertical: 10
    },

    emailSenha: {
        backgroundColor: "#fff",
        borderColor: '#fff',
        paddingVertical: 6,
        marginBottom: 10,
        textAlign: "center",
        fontFamily: "NunitoMaisNegrito",
        marginHorizontal: 60,
        borderRadius: 20,
        marginVertical: 5
    },

    eyeIcon: {
        position: "absolute",
        marginLeft: 320,
        marginTop: 15,
        color: '#000',
    },

    botao: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 153,
        marginVertical: 5
    },

    textoBotao: {
        color: "#1877F2",
        textAlign: "center",
        fontFamily: "NunitoMaisNegrito",
        fontSize: 17
    },

    textoOu: {
        color: "#fff",
        fontFamily: "NunitoMaisNegrito",
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
    },

    imgGoogleFacebook: {
        width: 48,
        height: 48,
        marginHorizontal: 10,
    }
})

export default Login;