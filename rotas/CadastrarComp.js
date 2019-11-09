import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView, AsyncStorage, Alert, TouchableOpacity, Image} from 'react-native';
import Calcado from "../Resources/js/Calcado";

//Classe Cadastrar
class CadastrarComp extends Component {
    constructor(props){
        super(props);
        this.state = { modelo: " " , numero: 0 , sexo: " " , cor: " " , preco: 0, data: Date(), numeroTexto: ""};
        // imagem: null , qr: "null", };
        // this.handleChoosePhoto = this.handleChoosePhoto.bind(this);
		
		//Usamos o bind para que os valores digitados no TextInput sejam mudados no State.
        this.setTenis = this.setTenis.bind(this);
        this.setSocial = this.setSocial.bind(this);
        this.setCasual = this.setCasual.bind(this);
        this.setMasc = this.setMasc.bind(this);
        this.setFem = this.setFem.bind(this);
        this.setUnissex = this.setUnissex.bind(this);
		this.setCalcado = this.setCalcado.bind(this);
		this.setCor = this.setCor.bind(this);
        this._storeData = this._storeData.bind(this);
		this.setPreco = this.setPreco.bind(this);
    }

    /*async componentDidMount() {
        let dadosJson = await fetch('https://www.reddit.com/r/reactnative.json');
        dadosJson = await dadosJson.json();
        this.setState({dados: dadosJson.kind});
    }*/

    static navigationOptions = {
        title: 'Cadastrar Calçado',
    };
	
    setTenis(){
        this.setState({
            modelo: 'Tênis'
        })
    };
	
    setSocial(){
        this.setState({
            modelo: 'Social'
        })
    };
	
    setCasual(){
        this.setState({
            modelo: 'Casual'
        })
    };

    setMasc(){
        this.setState({
            sexo: 'Masculino'
        });
		//this.setState({sexo: texto});
    };
	
    setFem(){
        this.setState({
            modelo: 'Feminino'
        })
    };
	
    setUnissex(){
        this.setState({
            modelo: 'Unissex'
        })
    };
	
	setCalcado(texto){
		this.setState({numero: texto});
	}
	
	setCor(texto){
		this.setState({cor: texto});
	}
	
	setPreco(texto){
		this.setState({preco: texto});
	}
	
	txtDados(texto) {
		this.setState({cxTexto: texto});
	}

	// testaDados(){
	//     if(this.props.numero > 47 || this.props.numero <= 30){
    //         this.state ={
    //             numeroTexto: "número inválido!",
    //         };
    //     }
    // }
	
    _storeData() {
        AsyncStorage.setItem('Calcado_modelo', this.state.modelo);
        AsyncStorage.setItem('Calcado_numero', this.state.numero);
        AsyncStorage.setItem('Calcado_sexo', this.state.sexo);
        AsyncStorage.setItem('Calcado_cor', this.state.cor);
        AsyncStorage.setItem('Calcado_preco', this.state.preco);
        AsyncStorage.setItem('Calcado_data', this.state.data);
		Alert.alert('Calçado adicionado com sucesso!');
    };

    render() {
        return (
            <ScrollView>
            <View>
                <Image style={styles.containerImg} source={require('../Resources/images/shoes1.jpg')} />
                <Text style={styles.texto}>Escolha o modelo do calçado:</Text>
                <Button title={'Tênis'} onPress={this.setTenis}/>
                <Button title={'Social'} onPress={this.setSocial}/>
                <Button title={'Casual'} onPress={this.setCasual}/>

                <Text style={styles.texto}>Digite o número do calçado:</Text>
				<TextInput keyboardType={'number-pad'} onChangeText={this.setCalcado} />
                <Text style={styles.textoCorrecao}>{this.state.numeroTexto}</Text>


                <Text style={styles.texto}>Escolha o sexo do calçado:</Text>
                <Button title={'Masculino'} onPress={this.setMasc}/>
                <Button title={'Feminino'} onPress={this.setFem}/>
                <Button title={'Unissex'} onPress={this.setUnissex}/>

                <Text style={styles.texto}>Digite a cor do calçado:</Text>
                
				<TextInput onChangeText={this.setCor} />

                <Text style={styles.texto}>Digite o preço do calçado:</Text>
                
				<TextInput keyboardType={"decimal-pad"} onChangeText={this.setPreco} />

                <Text style={styles.texto}>A data de entrada do calçado no estoque será do dia de hoje.</Text>
                <TouchableOpacity onPress={this._storeData} style={styles.enviarButton}><Text>Enviar</Text></TouchableOpacity>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
		
    },
    texto: {
        textAlign: 'left',
        marginVertical: 8,
        marginLeft: 8,
        fontSize: 16,
    },
    textoCorrecao: {
        textAlign: 'right',
        marginVertical: 8,
        marginLeft: 8,
        fontSize: 12,
        color: 'red',
    },
    fixToText: {
        margin:1,
        padding:2,
    },
    containerImg: {
        width: 200,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    enviarButton: {
        textAlign: 'center',
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: "#AEDEF4",
    }
});

export default CadastrarComp;