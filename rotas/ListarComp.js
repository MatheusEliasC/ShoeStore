import React, {Component} from 'react';
import {    View,    Text,    Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/**
 *
 */
class ListarComp extends Component {
    static navigationOptions = {
        title: 'Listar Produtos',
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