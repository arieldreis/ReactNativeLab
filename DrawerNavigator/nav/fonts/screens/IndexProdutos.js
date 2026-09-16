import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produtos from "./Produtos.js";
import Produto from './Produto.js';

const Stack = createNativeStackNavigator();

export default function IndexProdutos(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Produtos'
                component={Produtos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Produto" 
                component={Produto}
            />
        </Stack.Navigator>
    );
}