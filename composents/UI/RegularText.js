import React from 'react';
import {StyleSheet, Text} from 'react-native';

const RegularText = (props) => {
  return (
      <Text
        style={styles.text}
      >{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 12,
  },
});

export default RegularText;