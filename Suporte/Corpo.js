import React, { useCallback, useState } from "react";
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, Alert, Modal, Linking, TextInput,  } from "react-native";
import corte from "../assets/corte.png";
import seta from "../assets/setawh.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import interrogacao from "../assets/interrogacao.png"
import cruzedit from "../assets/cruzedit.png"

import Icon from 'react-native-vector-icons/FontAwesome';
import Chat from "./Chat";

function handleSend(inputText) {
  if (inputText.length > 0) {
    const newMessage = {
      _id: messages.length + 1,
      text: inputText,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'User',
        avatar: 'https://placeimg.com/140/140/any',
      },
    };

    onSend([newMessage]);
    setInputText('');
  }
}

function OpenURLButton(url) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return () => handlePress();
}

export default function Corpo() {

  const linkInstagram = 'https://www.instagram.com/';
  const LinkTwitter = 'https://twitter.com/login?lang=pt';
  const LinkLinkedin = 'https://www.linkedin.com/login/pt';
  const LinkFacebook = 'https://pt-br.facebook.com/';
  const LinkOutlook = 'https://outlook.live.com/owa/';


  const [inputText, setInputText] = useState('');
  const [modalVisible, setModalVisible,setShowmore,Showmore] = useState(false);
  const [eyre, setEyre] = useState(false);
  const [pacotes, setPacotes] = useState(false);
  const [orçamento, setOrçamento] = useState(false)
  const [suporte, setSuporte] = useState(false);
  const [usuarios, setUsuarios] = useState(false);



  return (

    <ScrollView>

      <View>
        <TouchableOpacity onPress={() => Alert.alert("VOLTAR MENU PRINCIPAL")}>
          <Image source={corte} style={estilo.imagem} />
        </TouchableOpacity>
      </View>

      <View><Text style={estilo.cabecalho}>EYRE VIAGENS LTDA.</Text></View>
      <View style={{ marginTop: 30 }}>
        <Text style={estilo.fonteTexto}>CNPJ 00.000.000/0001-00</Text>
        <Text style={estilo.fonteTexto}>Rua Paineiras, 1300 - Eldorado</Text>
        <Text style={estilo.fonteTexto}>CEP 30.000-000, Contagem/MG</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={estilo.cardAzul} />
          <Text style={estilo.texto}>SERVIÇO DE ATENDIMENTO AO CLIENTE</Text>
          <Image source={seta} style={estilo.seta} />
        </TouchableOpacity>
      </View>

      <View style={estilo.linha}></View>

      <View>
        <View>
          <Text style={estilo.faq}>
            FAQ
          </Text>
        </View>

        <View style={estilo.caixa_faqs}>
          <View>
            <View style={estilo.faqs}> 
              <Image source={interrogacao} style={estilo.interrogacao} />
              <Text style={estilo.perguntas}>O que é a Eyre?</Text>
              <TouchableOpacity onPress={()=> setEyre(!eyre)}>
                <Image source={cruzedit} style={estilo.mais} />
              </TouchableOpacity>
            </View>
            {eyre && (
              <Text style={estilo.respostas}>A Eyre é uma plataforma digital de viagens que permite aos usuários planejar suas viagens com base em seu orçamento. Com o Eyre, os usuários podem explorar diferentes destinos de viagem e encontrar opções de hospedagem e transporte que se encaixem em seu orçamento.</Text>
            )}
              
          </View>

          <View style={estilo.espaço}></View>

              <View>
          <View style={estilo.faqs}>
            <Image source={interrogacao} style={estilo.interrogacao} />
            <Text style={estilo.perguntas}>A Eyre oferece pacotes de viagens ou apenas opções de hospedagem e transporte?</Text>
            <TouchableOpacity onPress={()=> setPacotes(!pacotes)}>
            <Image source={cruzedit} style={estilo.mais}/>
            </TouchableOpacity>
          </View>
          {pacotes && (
              <Text style={estilo.respostas}>A Eyre é uma plataforma digital de viagens que permite aos usuários planejar suas viagens com base em seu orçamento. Com o Eyre, os usuários podem explorar diferentes destinos de viagem e encontrar opções de hospedagem e transporte que se encaixem em seu orçamento.</Text>
            )}
            </View>

          <View style={estilo.espaço}></View>
            <View>
          <View style={estilo.faqs}>
            <Image source={interrogacao} style={estilo.interrogacao} />
            <Text style={estilo.perguntas}>Posso alterar meu orçamento depois de fazer uma reserva no Eyre?</Text>
            <TouchableOpacity onPress={()=> setOrçamento(!orçamento)}>
            <Image source={cruzedit} style={estilo.mais}/>
            </TouchableOpacity>
          </View>
          {orçamento && (
              <Text style={estilo.respostas}>Não é possível alterar seu orçamento depois de fazer uma reserva no Eyre. É importante definir seu orçamento corretamente antes de fazer uma reserva..</Text>
            )}
          </View>

          <View style={estilo.espaço}></View>
            <View>
          <View style={estilo.faqs}>
            <Image source={interrogacao} style={estilo.interrogacao} />
            <Text style={estilo.perguntas}>A Eyre oferece suporte ao cliente para ajudar na organização da minha viagem?</Text>
            <TouchableOpacity onPress={()=> setSuporte(!suporte)}>
            <Image source={cruzedit} style={estilo.mais}/>
            </TouchableOpacity>           
          </View>
          {suporte && (
              <Text style={estilo.respostas}>Não é possível alterar seu orçamento depois de fazer uma reserva no Eyre. É importante definir seu orçamento corretamente antes de fazer uma reserva..</Text>
            )}
            </View>

          <View style={estilo.espaço}></View>
          <View>
          <View style={estilo.faqs}>
          <Image source={interrogacao} style={estilo.interrogacao} />
            <Text style={estilo.perguntas}>Como a Eyre ajuda os usuários a economizarem em suas viagens?</Text>
            <TouchableOpacity onPress={()=> setUsuarios(!usuarios)}>
            <Image source={cruzedit} style={estilo.mais}/>
            </TouchableOpacity>
          </View>
          {usuarios && (
              <Text style={estilo.respostas}>Não é possível alterar seu orçamento depois de fazer uma reserva no Eyre. É importante definir seu orçamento corretamente antes de fazer uma reserva..</Text>
            )}
          </View>
          <View style={estilo.espaço}></View>
        </View>

      </View>


      <View>
        <Text style={estilo.fonteRodape}>CONECTE-SE CONOSCO</Text>
        <TouchableOpacity onPress={OpenURLButton(linkInstagram)}>
          <Image source={instagram} style={estilo.instagram} />
        </TouchableOpacity>
        <TouchableOpacity onPress={OpenURLButton(LinkTwitter)}>
          <Image source={twitter} style={estilo.twitter} />
        </TouchableOpacity>
        <TouchableOpacity onPress={OpenURLButton(LinkLinkedin)}>
          <Image source={linkedin} style={estilo.linkedin} />
        </TouchableOpacity>
        <TouchableOpacity onPress={OpenURLButton(LinkFacebook)}>
          <Image source={facebook} style={estilo.facebook} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={OpenURLButton(LinkOutlook)}>
          <Text style={estilo.fonteContato}>eyre@contact.com.br</Text>
        </TouchableOpacity>
      </View>

      {/* ------------------------ MODAL ------------------------------------------------- */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', borderRadius: 10, padding: 10 }}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ fontSize: 16, color: '#999', marginBottom: 10 }}>Fechar Chat</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginBottom: 10 }}>
              <Image source={corte} style={{ width: 70, height: 50, marginRight: 10 }} />
              <View style={{ backgroundColor: '#EAEAEA', borderRadius: 10, padding: 10, flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#333' }}>ChatBot</Text>
                <Text style={{ fontSize: 14, color: '#333', marginBottom: 5 }}>Olá! Em que posso ajudar?</Text>
                <Chat onSend={handleSend} inputText={inputText} setInputText={setInputText} />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                  <TextInput
                    style={{ backgroundColor: '#FFF', borderRadius: 10, padding: 10, flex: 1, marginRight: 10, height: 40, borderWidth: 1, borderColor: '#EAEAEA' }}
                    placeholder="Digite aqui..."
                    placeholderTextColor="#999"
                    onChangeText={(text) => setInputText(text)}
                    value={inputText}
                  />
                  <TouchableOpacity onPress={() => handleSend(inputText)}>
                    <Text style={{ color: '#007AFF', fontSize: 16 }}>Enviar</Text>
                  </TouchableOpacity>

                </View>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={{ fontSize: 16, color: '#333' }}>Abrir Chat</Text>
        </TouchableOpacity>
      </View>
      {/* ------------------------ MODAL ^^^^^^ -------------------------------------------------- */}

    </ScrollView>
  );
}
const estilo = StyleSheet.create({
  caixa_faqs:{
    marginHorizontal:25,
  },

  faqs:{
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems:'center',
  },

  menu: {
    borderColor: "#FFF",
    borderWidth: 1,
    backgroundColor: "#FFF",
    margin: 20,
    borderRadius: 10,
    padding: 22,
  },
  iconSeta: {
    position: "absolute",
    top: -13,
    left: 0,
  },

  iconSino: {
    position: "absolute",
    top: -12,
    left: 250,
  },

  iconMenu: {
    position: "absolute",
    top: -13,
    left: 290
  },

  interrogacao: {
    height: 20,
    width: 20,
    // left:25,
    // marginTop:3
  },
  mais:{
    height:17,
    width:17,
    // left:24,
    // marginTop:8
  },

  imagem: {
    marginTop: 85,
    width: 150,
    height: 150,
    alignSelf: "center",

  },

  cabecalho: {
    fontSize: 24,
    fontFamily: "NunitoRegular",
    position: "absolute",
    color: "#696969",
    marginTop: -20,
    alignSelf: "center",
    fontFamily: "NunitoRegular",
  },

  cardAzul: {
    flex: 1,
    margin: 32,
    padding: 90,
    backgroundColor: "#2970DB",
    borderRadius: 20,
  },

  faq: {
    fontFamily: "NunitoMaisNegrito",
    marginTop: 20,
    marginVertical: 15,
    fontSize: 22,
    marginLeft: 20,
  },

  perguntas: {
    fontFamily: "NunitoMaisNegrito",
    width: '70%',
    fontSize: 17,
    textAlign: "justify"
  },
  respostas: {
    marginTop:20,
    fontSize: 17,
    textAlign: "justify",
    fontFamily: "NunitoRegular",
  },
  espaço: {
    borderBottomWidth: 1,
    // marginHorizontal: 25,
    marginVertical: 20,
  },

  texto: {
    fontSize: 22,
    width: 300,
    marginTop: 70,
    marginLeft: 54,
    color: "#FFF",
    textAlign: "center",
    position: "absolute",
    fontFamily: "NunitoMaisNegrito",
  },

  seta: {
    width: 70,
    height: 40,
    marginTop: -100,
    left: 170,
  },

  fonteTexto: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "NunitoRegular",
    color: "#696969",
    marginTop: 3
  },

  linha: {
    borderBottomWidth: 3,
    borderColor: "#A9A9A9",
    marginHorizontal: 25,
    marginTop: 60
  },
  fonteRodape: {
    marginTop: 30,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "NunitoMaisNegrito",
  },

  instagram: {
    marginTop: 30,
    width: 40,
    height: 40,
    left: 95
  },

  twitter: {
    marginTop: -39,
    width: 38,
    height: 38,
    left: 150
  },

  linkedin: {
    marginTop: -45,
    width: 45,
    height: 50,
    left: 200
  },
  facebook: {
    marginTop: -48,
    width: 43,
    height: 45,
    left: 255
  },
  fonteContato: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "NunitoMaisNegrito",
  },
  cor: {
    marginTop: 30,
  },

  viewModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },


  xModal: {
    position: 'absolute',
    color: 'black',
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
    marginTop: -14,
  },

})