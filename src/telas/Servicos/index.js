import React from "react";
import { SafeAreaView, Text, StatusBar, FlatList } from 'react-native';
import Item from "./Item";

const servicos = [
    {
        id: 1,
        nome: "banho",
        preco: 79.9,
        descricao: "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum"
    },
    {
        id: 2,
        nome: "vacina V4",
        preco: 80.00,
        descricao: "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum",
    },
    {
        id: 3,
        nome: "vacina v12",
        preco: 12.00,
        descricao: "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum",
    }
]


export default function Servicos() {
    return <SafeAreaView>
        <StatusBar />
        <FlatList
            data={servicos}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
        />
    </SafeAreaView>
}