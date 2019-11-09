import React, {Component} from 'react';
import {View, Text, Button, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';

class HomeComp extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <ScrollView>
            <SafeAreaView>
                <View>
                    <Text style={styles.title}>Shoe Store</Text>
                    
                </View>
                <View style={styles.fixToText}>				
					<Image resizeMode={'contain'} style={styles.containerImg} source={require('../shoes1.jpg')} />
					<Text style={styles.subtitle}>Escolha uma opção abaixo:</Text>
					<Button title={'Cadastrar Produto'} onPress={() => {this.props.navigation.push("Cadastrar")}}/>
                    <Button title={'Atualizar Produto'} onPress={() => {this.props.navigation.push("Atualizar")}}/>
                    <Button title={'Excluir Produto'} onPress={() => {this.props.navigation.push("Excluir")}}/>
                    <Button title={'Listar Produtos'} onPress={() => {this.props.navigation.push("Listar")}}/>
                </View>
            </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginBottom: 2,
        fontSize: 50,
        backgroundColor: 'white',
    },
	containerImg: {
		width: "100%",
	},
	
    subtitle: {
        textAlign: 'center',
        marginBottom: 8,
        fontSize: 20,
    },
    fixToText: {
        margin:2,
        padding:2,
        fontSize: 20
    },
	

});

export default HomeComp;