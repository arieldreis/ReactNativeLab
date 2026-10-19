import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Config from './fonts/screens/config.js';
import Inicial from './fonts/screens/Greetings.js';
import Usuario from './fonts/screens/users.js';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'darkblue' }}>
        <Tab.Screen name="Inicial" component={Inicial} options={{
          tabBarIcon: (props) => <Ionicons name="home" size={props.size} color={props.color} />
        }} />
        <Tab.Screen name="Configurações" component={Config} options={{
          tabBarIcon: (props) => <Ionicons name="settings" size={props.size} color={props.color} />
        }} />
        <Tab.Screen name="Usuário" component={Usuario} options={{
          tabBarIcon: (props) => <AntDesign name="aim" size={props.size} color={props.color} />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}