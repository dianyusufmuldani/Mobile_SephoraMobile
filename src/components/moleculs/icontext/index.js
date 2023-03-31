import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import IconUser from '../../../../assets/icon/user_crown.svg';
const IconText = ({value, iconsvg}) => {
  return (
    <TouchableOpacity style={styles.Container}>
      <View style={styles.Image}>{iconsvg}</View>
      <Text style={styles.TextStyle}>{value}</Text>
    </TouchableOpacity>
  );
};
export default IconText;
const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    height: 76,
    width: 80,
  },
  Image: {
    width: 48,
    height: 48,
    backgroundColor: '#F3F7FD',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 10,
    fontWeight: '500',
  },
});
