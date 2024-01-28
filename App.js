import React, { useState } from "react";
import { View, Text, StatusBar, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Detalhes from "./components/Detalhes";
import Corpo from "./Suporte/Corpo";
import BodyPacote from "./Pacote/BodyPacote";
import Header from "./Cards/Header";
import Lugares from "./Historico/Lugares";
import Notificacoes from "./Notificacoes/Notifications";
import PrePerfil from "./Perfil/PrePerfil";
import Login from "./Perfil/Login";
import Cadastro from "./Perfil/Cadastro";
import Profile from "./Perfil/Profile";
import Usuario from "./Perfil/Usuario";
import Pagamentos from "./pagamento/Pagamentos";
import { useRoute } from '@react-navigation/native';



import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold_Italic,
  Nunito_900Black_Italic,
  Nunito_500Medium,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  const [showHeader, setShowHeader] = useState(false);

  const handlePressProntoJornada = () => {
    setShowHeader(true);
  };

  const handlePressVoltarDetalhes = () => {
    setShowHeader(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps='always'>
      <StatusBar />
      {showHeader ? (
        <Header onPressVoltarDetalhes={handlePressVoltarDetalhes} />
      ) : (
        <Detalhes onPressProntoJornada={handlePressProntoJornada} />
      )}
    </ScrollView>
  );
}

function SuporteScreen() {
  return (
    <View>
      <StatusBar />
      <Corpo />
    </View>
  );
}

function LugaresScreen() {
  return (
    <View>
      <StatusBar />
      <Lugares />
    </View>
  );
}

function NotificacoesScreen() {
  return (
    <View>
      <StatusBar />
      <Notificacoes />
    </View>
  );
}

function PrePerfilScreen() {
  return (
    <View>
      <StatusBar />
      <PrePerfil />
    </View>
  );
}

export default function App() {

  const [fontCarregada] = useFonts({
    "NunitoRegular": Nunito_400Regular,
    "NunitoItalico": Nunito_600SemiBold_Italic,
    "Black": Nunito_900Black_Italic,
    "NunitoNegrito": Nunito_500Medium,
    "NunitoMaisNegrito": Nunito_700Bold,
  });

  if (!fontCarregada) {
    return null;
  }

  const styles = StyleSheet.create({
    tabEstilo: {
      fontFamily: 'NunitoRegular',
      fontSize: 13,
      fontWeight: "bold",
    },
    tabBarItemStyle: {
      backgroundColor: '#00ff00',
      margin: 5,
      borderRadius: 10,
    }
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#2970DB", tabBarInactiveTintColor: "gray" }}>
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false, tabBarLabelStyle: styles.tabEstilo, tabBarIcon: ({ color }) => (<MaterialIcons name="home" size={21} color={color} />) }} />
        <Tab.Screen name="Viagens" component={LugaresScreen} options={{ headerShown: false, tabBarLabelStyle: styles.tabEstilo, tabBarIcon: ({ color }) => (<Ionicons name="ios-airplane" size={21} color={color} />) }} />
        <Tab.Screen name="Notificações" component={NotificacoesScreen} options={{ headerShown: false, tabBarLabelStyle: styles.tabEstilo, tabBarIcon: ({ color }) => (<FontAwesome name="bell" size={21} color={color} />) }} />
        <Tab.Screen name="Suporte" component={SuporteScreen} options={{ headerShown: false, tabBarLabelStyle: styles.tabEstilo, tabBarIcon: ({ color }) => (<FontAwesome5 name="tools" size={21} color={color} />) }} />
        <Tab.Screen name="Perfil" component={PrePerfilScreen} options={{ headerShown: false, tabBarLabelStyle: styles.tabEstilo, tabBarIcon: ({ color }) => (<FontAwesome name="user-circle" size={21} color={color} />) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeStack() {

  const route = useRoute();

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BodyPacote" component={BodyPacote} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false, tabBarVisible: route.name !== 'Login' }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false, tabBarVisible: route.name !== 'Cadastro' }} />
      <Stack.Screen name="Profile" component={Usuario} options={{ headerShown: false, tabBarVisible: route.name !== 'Profile' }} />
      <Stack.Screen name="Usuario" component={Profile} options={{ headerShown: false, tabBarVisible: route.name !== 'Usuario' }} />
      <Stack.Screen name="Pagamentos" component={Pagamentos} options={{ headerShown: false, tabBarVisible: route.name !== 'Pagamentos' }} />
    </Stack.Navigator>
  );
}


