import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const img = [
    { id: 1, src: require('../assets/pousada.jpg') },
    { id: 2, src: require('../assets/pousada2.jpg') },
    { id: 3, src: require('../assets/pousada3.jpg') },
    { id: 4, src: require('../assets/pousada4.jpg') },
];

const largura = Dimensions.get('screen').width;
const tamanho = 1400 / 1600 * largura;

export default function CarroselDois() {
    const renderItem = ({ item }) => (
        <Image source={item.src} style={estilos.imgs} />
    );

    return (
        <View style={estilos.Carrousel}>
            <Carousel data={img}
                renderItem={renderItem}
                sliderWidth={largura}
                itemWidth={tamanho}
                loop={true}
                scrollEnabled={false}
                autoplay={true}
                autoplayDelay={8000}
                autoplayInterval={6000}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    imgs: {
        width: 340,
        height: 660 / 1590 * largura,
        marginTop: 70,
        marginLeft: 10,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    Carrousel: {
        flex: 1,
        width: 600,
        height: 300,
        borderRadius: 20,
        position: "absolute",
    }
})