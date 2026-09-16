import { Text, View, Button } from 'react-native'
import { styles } from '../../styles/styles';

export default function Produtos({ navigation }){
    const verDetalhes = () => {
        navigation.navigate('Produto');
    };
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Produtos</Text>
            <Button title='Ver Detalhes' onPress={ verDetalhes }/>
        </View>
    );
}