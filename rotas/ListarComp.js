import React, {Component} from 'react';
import {View, Text, Button, AsyncStorage, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/**
 *
 */
class ListarComp extends Component {
    constructor(props){
        super(props);
        this.state = { modelo: "", numero: "" , sexo: "" , cor: "" , preco: "", data: ""};

        this._retrieveData = this._retrieveData.bind(this);
    }

    static navigationOptions = {
        title: 'Listar Calçados',
    };

    async _retrieveData() {
        let modeloConst = await AsyncStorage.getItem('Calcado_modelo');
        let numeroConst = await AsyncStorage.getItem('Calcado_numero');
        let sexoConst = await AsyncStorage.getItem('Calcado_sexo');
        let corConst = await AsyncStorage.getItem('Calcado_cor');
        let precoConst = await AsyncStorage.getItem('Calcado_preco');
        let dataConst = await AsyncStorage.getItem('Calcado_data');
        this.setState({modelo: modeloConst, numero: numeroConst, sexo: sexoConst, cor: corConst, preco: precoConst, data: dataConst})
    };


    render() {
        return (
            <View>
                <Text style={styles.subtitulo}>Listando todos calçados da loja:</Text>
                <Button onPress={this._retrieveData} title={'Listar'}/>
                <Text style={styles.texto}>{this.state.modelo}</Text>
                <Text style={styles.texto}>{this.state.numero}</Text>
                <Text style={styles.texto}>{this.state.sexo}</Text>
                <Text style={styles.texto}>{this.state.cor}</Text>
                <Text style={styles.texto}>{this.state.preco}</Text>
                <Text style={styles.texto}>{this.state.data}</Text>
            </View>
        );
    }


}

let modeloConst; let numeroConst; let sexoConst; let corConst; let precoConst; let dataConst;

const styles = StyleSheet.create({
    subtitulo: {
        textAlign: 'center',
        marginBottom:12,
        fontSize: 16,
    },
    texto: {
        textAlign: 'left',
        marginLeft: 3,
    }
});

export default ListarComp;