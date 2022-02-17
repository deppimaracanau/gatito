import React from "react";
import { SafeAreaVieew, Text, StatusBar } from 'react-native';

const servicos = [
    {
        id: 1,
        nome: "banho",
        preco: 79.9,
        descricao: "testststststststststststststststststststs"
    },
    {
        id: 2,
        nome: "vacina V4",
        preco: 80.00,
        descricao: "ahfhawhffjawncancnajcnjsncjknasjcknasjcnj",
    },
    {
        id: 3,
        nome: "vacina v12",
        preco: 12.00,
        descricao: "ndfnbldnb ndn dn kld klldk k kldklk kld kl lkdlk",
    }
]


export default function Servicos() {

    return < SafeAreaVieew >
        <StatusBar>
            <Text > server</Text >
        </StatusBar>
    </SafeAreaVieew>
}