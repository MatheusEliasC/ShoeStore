import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

/**
 *
 */
class ListarComp extends Component {
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