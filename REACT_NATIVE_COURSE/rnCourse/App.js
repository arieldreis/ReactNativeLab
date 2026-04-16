import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './style.js';
import { useState } from 'react';

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  };
  function addGoalHandler(){
    console.log(enteredGoalText);
  };


  return (
    <View style={styles.AppContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder='Type your goal here...' 
        style={styles.textInput}
        onChange={goalInputHandler}
        />
        <Button 
        title="Tap Me!"
        onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View> 
  );
}

export default App
