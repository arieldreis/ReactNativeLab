import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './style.js';

const App = () => {
  return (
    <View style={styles.AppContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder='Type your goal here...' 
        style={styles.textInput}
        />
        <Button title="Tap Me!"/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View> 
  );
}

export default App
