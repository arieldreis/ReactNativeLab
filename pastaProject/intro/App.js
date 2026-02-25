import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Ariel Dos Reis Marinho</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome:{
    color: '#000',
    fontSize: 20,
    fontFamily: "Arial"
  }
});
