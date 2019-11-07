import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

//TODO continuar classe Excluir
class ExcluirComp extends Component {
    static navigationOptions = {
        title: 'Excluir Produto',
    };
    render() {
        return (
            <View style={styles.container1}>
                <Text style={{fontSize: 50}}>Essa é a pag. Excluir!</Text>
                <Button style={styles.backButton} title={'Volta!'} onPress={() => this.props.navigation.pop()}/>
            </View>
        );
    }
}

const styles = {
	
	
	backButton: {
		width: 10,
		height: 10,
		fontSize: 30
	}
}

export default ExcluirComp;