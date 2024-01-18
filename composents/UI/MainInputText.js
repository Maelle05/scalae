import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const MainInputText = (props) => {
  const { getValue } = props;
  const [text, setText] = React.useState("");

  return (
      <TextInput
        autoCapitalize="none" autoCorrect={false}
        style={styles.input}
        placeholder={props.placeholder}
        value={text}
        onChangeText={(text) => { setText(text), getValue(text)}}
      />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default MainInputText;