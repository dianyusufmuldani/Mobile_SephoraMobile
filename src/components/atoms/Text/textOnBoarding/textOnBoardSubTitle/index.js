import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
const TextOnBoardSubTitle = ({value}) => {
  return <Text style={styles.Container}>{value}</Text>;
};
export default TextOnBoardSubTitle;
const styles = StyleSheet.create({
  Container: {
    fontSize: 18,
    color: '#464455',
    fontWeight: '500',
  },
});
