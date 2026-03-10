import { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class App extends Component {
  render() {
    let variavel = 'Exibindo variável.';
    
    return (
      <View style={style.container}>
        <Image 
          source={{ uri: 'https://www.pudim.com.br/pudim.jpg' }} 
          style={{ width: 300, height: 250 }} 
        />
        <Text style={style.txt}>Olá Mundo novamente!!!</Text>
        <Text>{variavel}</Text>
      </View>
    ); // JSX
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1, // determina a divisão proporcional do espaço de acordo com valor atribuído
    backgroundColor: '#ccc', // background-color no CSS e backgroundColor no RS
    alignItems: 'center', // Centraliza os filhos de cima para baixo (flex-start, flex-end)
    justifyContent: 'center', // Centraliza os filhos da esquerda para a direita (flex-start, flex-end)
  },
});

export default App;