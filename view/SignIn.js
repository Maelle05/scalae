// S'enregistré
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MainInputText from '../composents/UI/MainInputText';
import MainButton from '../composents/UI/MainButton';

const SignIn = ( props ) => {
  const [email, setEmail] = React.useState("");
  const [mdp, setMdp] = React.useState("");

  
  const onSubmit = () => {
    console.log('S\'enregistré');
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, mdp).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      console.log(user, 'c\'est bien enregistré')

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
  
  }
  
  return (
    <View>
      <Text>S'enregistré</Text>
      <MainInputText placeholder="email" getValue={setEmail}/>
      <MainInputText placeholder="mot de passe" getValue={setMdp}/>
      <MainButton name="OK" onPress={onSubmit}/>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default SignIn;