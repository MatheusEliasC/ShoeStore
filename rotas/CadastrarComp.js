import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

//TODO continuar classe Cadastrar
class CadastrarComp extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize: 50}}>Essa é a pag. Detalhes!</Text>
                <Button title={'Volta!'} onPress={() => this.props.navigation.pop()}/>
            </View>
        );
    }
}

export default CadastrarComp;