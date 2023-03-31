//Import Library
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonMoleculs = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Container}>
        <Text style={styles.FontText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ButtonMoleculs;

const styles = StyleSheet.create({
  Container: {
    borderRadius: 10,
    backgroundColor: '#2F82FF',
    alignItems: 'center',
    height: 40,
    width: 305,
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FontText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
});
