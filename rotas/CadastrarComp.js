import React, {Component} from 'react';
import {    View,    Text, StyleSheet, Button, TextInput, ScrollView} from 'react-native';

class CadastrarComp extends Component {
    static navigationOptions = {
        title: 'Cadastrar Produto',
    };
    render() {
        return (
            <ScrollView>
            <View>

                <Text style={styles.title}>Bem vindo!</Text>
                <Text style={styles.texto}>Escolha o modelo do calçado:</Text>
                <Button title={'Tênis'} ></Button>
                <Button title={'Social'}></Button>
                <Button title={'Casual'}></Button>
                <Text style={styles.texto}>Digite o número do calçado:</Text>
                <TextInput />
                <Text style={styles.texto}>Escolha o sexo do calçado:</Text>
                <Button title={'Masculino'} ></Button>
                <Button title={'Feminino'}></Button>
                <Button title={'Unissex'}></Button>
                <Text style={styles.texto}>Digite a cor do calçado:</Text>
                <TextInput />
                <Text style={styles.texto}>Digite o preco do calçado:</Text>
                <TextInput />
                <Text style={styles.texto}>Insira a imagem do calçado:</Text>
                {/*TODO Procurar como fazer um botão de import pra importar a imagem do celular*/}
                <Text style={styles.texto}>Insira o QR da caixa do calçado:</Text>
                {/*TODO fazer outro import aqui*/}
                <Text style={styles.texto}>A data de entrada do calçado no estoque será do dia de hoje.</Text>
            </View>
            </ScrollView>
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
});

export default CadastrarComp;