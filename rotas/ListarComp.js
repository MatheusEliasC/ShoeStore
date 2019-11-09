import React, {Component} from 'react';
import {View, Text, Button, AsyncStorage, Alert} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/**
 *
 */
class ListarComp extends Component {
    constructor(props){
        super(props);
        this.state = { modelo: "", numero: 0 , sexo: " " , cor: " " , preco: 0, data: Date()}

        this._retrieveData = this._retrieveData.bind(this);
    }

    static navigationOptions = {
        title: 'Listar Produtos',
    };

    _retrieveData() {
        const modelo = AsyncStorage.getItem('Calcado_modelo');
        if (modelo !== null) {
            // We have data!!
            console.log(modelo);
        }
        const numero = AsyncStorage.getItem('Calcado_numero');
        if (numero !== null) {
            // We have data!!
            console.log(numero);
        }
        const sexo = AsyncStorage.getItem('Calcado_sexo');
        if (sexo !== null) {
            // We have data!!
            console.log(sexo);
        }
        const cor = AsyncStorage.getItem('Calcado_cor');
        if (cor !== null) {
            // We have data!!
            console.log(cor);
        }
        const preco = AsyncStorage.getItem('Calcado_preco');
        if (preco !== null) {
            // We have data!!
            console.log(preco);
        }
        const data = AsyncStorage.getItem('Calcado_data');
        if (data !== null) {
            // We have data!!
            console.log(data);
        }
    };

    render() {
        return (
            <View>
                <Text style={{fontSize: 50}}>Essa é a pag. Listar!</Text>
                <Button title={'Volta!'} onPress={() => this.props.navigation.pop()}/>
            </View>
        );
    }
}

export default ListarComp;