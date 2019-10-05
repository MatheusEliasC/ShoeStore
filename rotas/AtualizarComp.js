import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

//TODO continuar classe Atualizar
class AtualizarComp extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize: 50}}>Essa é a pag. Atualizar!</Text>
                <Button title={'Volta!'} onPress={() => this.props.navigation.pop()}/>
            </View>
        );
    }
}

export default AtualizarComp;