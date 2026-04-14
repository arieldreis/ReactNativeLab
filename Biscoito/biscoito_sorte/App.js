import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.frase = [
      "Siga os bons e aprenda com eles.",
      "O bom-senso vale mais do que muito conhecimento.",
      "O riso é a menor distância entre duas pessoas.",
      "Deixe de lado as preocupações e seja feliz.",
      "Realize o óbvio, pense no improvável e conquiste o impossível.",
      "Acredite em milagres, mas não dependa deles.",
      "A maior barreira para o sucesso é o medo do fracasso."
    ];

    this.state = {
      msg: "O que me espera no futuro?",
      img: require('./assets/biscoito_fechado.png')
    }

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }

  quebrarBiscoito(){
    let numRandom = Math.floor(Math.random() * this.frase.length);
      this.setState({
      msg: this.frase[numRandom],
      img: require('./assets/biscoito_aberto.jpg')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Biscoito da Sorte</Text>
        <Image
          style={styles.img}
          source={this.state.img}
        />
        {/*crie uma pasta src na raiz do projeto e coloque os arquivos de imagem dentro dela*/}
        <Text style={styles.msg}>{this.state.msg}</Text>
        <TouchableOpacity onPress={this.quebrarBiscoito}>
          <Text style={styles.bt}>Quebrar Biscoito!</Text>
        </TouchableOpacity>
        <Text style={styles.name}>Ariel Dos Reis Marinho</Text>
      </View>
    );
  }
}

export default App;
