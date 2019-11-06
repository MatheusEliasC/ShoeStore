import React, {Component} from 'react';
import {View, Text, Button, SafeAreaView, StyleSheet} from 'react-native';

class HomeComp extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text style={styles.title}>Shoe Store</Text>
                    <Text style={styles.subtitle}>Escolha uma opção abaixo:</Text>
                </View>
                <View style={styles.fixToText}>
                    <Button title={'Cadastrar Produto'} onPress={() => {this.props.navigation.push("Cadastrar")}}/>
                {/*</View>*/}
                {/*<View style={styles.fixToText}>*/}
                    <Button title={'Atualizar Produto'} onPress={() => {this.props.navigation.push("Atualizar")}}/>
                {/*</View>*/}
                {/*<View style={styles.fixToText}>*/}
                    <Button title={'Excluir Produto'} onPress={() => {this.props.navigation.push("Excluir")}}/>
                {/*</View>*/}
                {/*<View style={styles.fixToText}>*/}
                    <Button title={'Listar Produtos'} onPress={() => {this.props.navigation.push("Listar")}}/>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginBottom: 2,
        fontSize: 50,
        backgroundColor: 'brown',
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 8,
        fontSize: 20,
    },
    fixToText: {
        margin:1,
        padding:2,
        fontSize: 15
    },
});

export default HomeComp;