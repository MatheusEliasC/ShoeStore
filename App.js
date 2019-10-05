import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeComp from "./rotas/HomeComp";
import CadastrarComp from "./rotas/CadastrarComp";
import AtualizarComp from "./rotas/AtualizarComp";
import ExcluirComp from "./rotas/ExcluirComp";
import ListarComp from "./rotas/ListarComp";

let navegador = createStackNavigator({
   Home: {screen: HomeComp},
   Cadastrar: {screen: CadastrarComp},
   Atualizar: {screen: AtualizarComp},
   Excluir: {screen: ExcluirComp},
   Listar: {screen: ListarComp},
},{
    headerMode:'none'
});

let App = createAppContainer(navegador);

export default App;