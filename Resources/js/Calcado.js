import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class Calcado extends Component {
    constructor(props,modelo, numero, sexo, cor, preco, data){
        super(props);
        modeloConst = modelo;
        numeroConst = numero;
        sexoConst = sexo;
        corConst = cor;
        precoConst = preco;
        dataConst = data;
    }
    render() {
        return (
            <View>
                <div>
                    <Text> Modelo: {modeloConst}</Text>
                    <Text> Número: {numeroConst}</Text>
                    <Text> Sexo: {sexoConst}</Text>
                    <Text> Cor: {corConst}</Text>
                    <Text> Preco: {precoConst}</Text>
                    <Text> data: {dataConst}</Text>
                </div>
            </View>
        );
    }
}

let modeloConst; let numeroConst; let sexoConst; let corConst; let precoConst; let dataConst;

export default Calcado;