import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './style.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> 
    </View>
  );
}
