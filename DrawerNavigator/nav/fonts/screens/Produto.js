import { Text, View, StyleSheet } from 'react-native'
import { styles } from '../../styles/styles';

export default function Produto(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Detalhes do Produto</Text>
        </View>
    );
}