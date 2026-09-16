import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

import Home from './fonts/screens/Home.js';
// import Produtos from './fonts/screens/Produtos.js';
import Servicos from './fonts/screens/Servicos.js';
import IndexProdutos from './fonts/screens/IndexProdutos.js';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={ Home } />
        <Drawer.Screen name='Produtos' component={ IndexProdutos } />
        <Drawer.Screen name='Servicos' component={ Servicos } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
