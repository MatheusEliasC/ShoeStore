import React, {Component} from 'react';
import {    View,    Text, StyleSheet, Button, TextInput, ScrollView, AsyncStorage, Alert, TouchableOpacity} from 'react-native';
// import ImagePicker from 'react-native-image-picker'

class CadastrarComp extends Component {
    constructor(props){
        super(props);
        this.state = { modelo: "null" , numero: "null" , sexo: "null" , cor: "null" , preco: "null", data: Date()};
            // imagem: null , qr: "null", };
        // this.handleChoosePhoto = this.handleChoosePhoto.bind(this);
        this.setTenis = this.setTenis.bind(this);
        this.setSocial = this.setSocial.bind(this);
        this.setCasual = this.setCasual.bind(this);
        this.setMasc = this.setMasc.bind(this);
        this.setFem = this.setFem.bind(this);
        this.setUnissex = this.setUnissex.bind(this);
        this._storeData = this._storeData.bind(this);
    }

    async componentDidMount() {
        let dadosJson = await fetch('https://www.reddit.com/r/reactnative.json');
        dadosJson = await dadosJson.json();
        this.setState({dados: dadosJson.kind});
    }

    static navigationOptions = {
        title: 'Cadastrar Produto',
    };

    // handleChoosePhoto = () => {
    //     const options = {
    //         noData: true,
    //     };
    //     ImagePicker.launchImageLibrary(options, response => {
    //         if (response.uri) {
    //             this.setState({ image: response })
    //         }
    //     })
    // };

    setTenis = () => {
        this.setState({
            modelo: 'Tênis'
        })
    };
    setSocial = () => {
        this.setState({
            modelo: 'Social'
        })
    };
    setCasual = () => {
        this.setState({
            modelo: 'Casual'
        })
    };

    setMasc = () => {
        this.setState({
            sexo: 'Masculino'
        })
    };
    setFem = () => {
        this.setState({
            modelo: 'Feminino'
        })
    };
    setUnissex = () => {
        this.setState({
            modelo: 'Unissex'
        })
    };

    _storeData = async () => {
        const showAlert = () =>{
            Alert.alert(
                'Produto Adicionado!'
            )
        };

        // if(this.modelo.localeCompare("null")){
        //
        // }

        await AsyncStorage.setItem('Calcado_modelo', this.modelo);
        await AsyncStorage.setItem('Calcado_numero', this.numero);
        await AsyncStorage.setItem('Calcado_sexo', this.sexo);
        await AsyncStorage.setItem('Calcado_cor', this.cor);
        await AsyncStorage.setItem('Calcado_preco', this.preco);
        await AsyncStorage.setItem('Calcado_data', this.data);

        showAlert();

    };

    render() {
        // const { imagem } = this.state;
        return (
            <ScrollView>
            <View>

                <Text style={styles.title}>Bem vindo!</Text>

                <Text style={styles.texto}>Escolha o modelo do calçado:</Text>
                <Button title={'Tênis'} onPress={this.setTenis}/>
                <Button title={'Social'} onPress={this.setSocial}/>
                <Button title={'Casual'} onPress={this.setCasual}/>

                <Text style={styles.texto}>Digite o número do calçado:</Text>
                <TextInput onChangeText={numero => this.setState({numero})} />

                <Text style={styles.texto}>Escolha o sexo do calçado:</Text>
                <Button title={'Masculino'} onPress={this.setMasc}/>
                <Button title={'Feminino'} onPress={this.setFem}/>
                <Button title={'Unissex'} onPress={this.setUnissex}/>

                <Text style={styles.texto}>Digite a cor do calçado:</Text>
                <TextInput onChangeText={cor => this.setState({cor})} />

                <Text style={styles.texto}>Digite o preco do calçado:</Text>
                <TextInput onChangeText={preco => this.setState({preco})}/>

                {/*<Text style={styles.texto}>Insira a imagem do calçado:</Text>*/}
                {/*<Button title="Choose Photo" onPress={this.handleChoosePhoto} />*/}
                {/*{imagem && ( <Image source={{ uri: imagem.uri }} style={{ width: 300, height: 300 }}/>)}*/}
                {/*TODO Procurar como fazer um botão de import pra importar a imagem do celular*!/*/}

                {/*<Text style={styles.texto}>Insira o QR da caixa do calçado:</Text>*/}
                {/*TODO fazer outro import aqui*!*/}

                <Text style={styles.texto}>A data de entrada do calçado no estoque será do dia de hoje.</Text>

                <TouchableOpacity onPress = {this._storeData} style = {styles.enviarButton}><Text>Enviar</Text></TouchableOpacity>

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
    fixToText: {
        margin:1,
        padding:2,
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