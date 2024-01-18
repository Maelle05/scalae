import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RegularText from './composents/UI/RegularText';
import LogIn from './view/LogIn';
import SignIn from './view/SignIn';

export default function App() {
  return (
    <View style={styles.container}>
      <RegularText>Bienvenu sur Scalae !</RegularText>
      <SignIn />
      <LogIn/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
