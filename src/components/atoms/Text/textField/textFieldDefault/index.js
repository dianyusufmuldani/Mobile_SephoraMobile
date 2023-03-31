//Import Library
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const TextField = ({
  placeholder,
  autoCapitalize,
  maxLength,
  onChangeText,
  value,
  keyboardType,
}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        style={styles.Container}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  Container: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#F3F7FD',
    width: 320,
  },
});
