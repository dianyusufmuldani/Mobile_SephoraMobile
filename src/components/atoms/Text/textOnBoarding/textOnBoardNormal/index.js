import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
const TextOnBoardNormal = ({value}) => {
  return <Text style={styles.Container}>{value}</Text>;
};
export default TextOnBoardNormal;
const styles = StyleSheet.create({
  Container: {
    fontSize: 14,
    color: '#727FA3',
    fontWeight: '400',
  },
});
