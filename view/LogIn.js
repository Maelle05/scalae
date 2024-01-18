// Se connecté
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MainInputText from '../composents/UI/MainInputText';
import MainButton from '../composents/UI/MainButton';

const LogIn = ( props ) => {
  const [email, setEmail] = React.useState("");
  const [mdp, setMdp] = React.useState("");

  const onSubmit = () => {
    console.log('Se connecté');
    console.log(email, mdp)
  }

  return (
    <View>
      <Text>Se connecté</Text>
      <MainInputText placeholder="email" getValue={setEmail}/>
      <MainInputText placeholder="mot de passe" getValue={setMdp}/>
      <MainButton name="OK" onPress={onSubmit}/>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default LogIn;