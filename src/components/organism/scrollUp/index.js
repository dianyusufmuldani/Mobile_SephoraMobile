import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DoubleArrowUp from '../../../../assets/icon/double_arrowup.svg';
const ScrollUp = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.LineScroll} />
      <View style={styles.DoubleArrowUpStyle}>
        <DoubleArrowUp />
      </View>
      <Text style={styles.TextStyle}>Geser Untuk Login</Text>
    </View>
  );
};
export default ScrollUp;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 730,
    borderRadius: 20,
    elevation: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  LineScroll: {
    backgroundColor: '#E9F0FF',
    width: 60,
    height: 6,
    borderRadius: 20,
    marginTop: 15,
  },
  DoubleArrowUpStyle: {
    marginTop: 16,
    marginBottom: 7,
  },
  TextStyle: {
    fontSize: 12,
    color: '#97A5C9',
  },
});
