import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class HomeComp extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize: 50,textAlign: 'center',backgroundColor: 'gray'}}>ShoeStore</Text>
                <Button title={'Cadastrar Produto'} onPress={() => {this.props.navigation.push("Cadastrar")}}/>
                <Button title={'Atualizar Produto'} onPress={() => {this.props.navigation.push("Atualizar")}}/>
                <Button title={'Excluir Produto'} onPress={() => {this.props.navigation.push("Excluir")}}/>
                <Button title={'Listar Produtos'} onPress={() => {this.props.navigation.push("Listar")}}/>
            </View>
        );
    }
}

export default HomeComp;