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
                    <Text style={{fontSize: 50,textAlign: 'center',backgroundColor: 'gray',marginBottom: 2,}}>ShoeStore</Text>
                    <Text style={styles.title}>
                        Escolha uma opção abaixo.
                    </Text>
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
        marginVertical: 8,
        fontSize: 20,
    },
    fixToText: {
        margin:1,
        padding:2,
    },
});

export default HomeComp;