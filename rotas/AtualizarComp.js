import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

//TODO continuar classe Atualizar
class AtualizarComp extends Component {
    static navigationOptions = {
        title: 'Atualizar Produto',
    };
    render() {
        return (
            <View>
                <Text style={styles.title}>Lista de produtos:</Text>
				<Text style={styles.title}>Fazer a lista</Text>
				<Text style={styles.title}>Digite a posição do produto que deseja listar.</Text>
				<TextInput onChangeText={posicao => this.setState({posicao})} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
    },
    texto: {
        textAlign: 'left',
        marginVertical: 8,
        marginLeft: 8,
        fontSize: 16,
    },
    fixToText: {
        margin:1,
        padding:2,
    },
    enviarButton: {
        textAlign: 'center',
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: "#AEDEF4",
    }
});

export default AtualizarComp;