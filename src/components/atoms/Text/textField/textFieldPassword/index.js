//Import Library
import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

//Import Assets
import IconShowPassword from '../../../../../../assets/icon/showPassword.png';

const TextFieldPassword = ({placeholder, onChangeText, value}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const onShowPassword = () => {
    if (secureTextEntry === true) {
      setSecureTextEntry(false);
    } else {
      setSecureTextEntry(true);
    }
  };
  return (
    <View style={styles.ContainerPassword}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.Container}
      />
      <TouchableOpacity
        onPress={onShowPassword}
        style={styles.StyleIconShowPassword}>
        <Image source={IconShowPassword} />
      </TouchableOpacity>
    </View>
  );
};

export default TextFieldPassword;

const styles = StyleSheet.create({
  Container: {
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#F3F7FD',
    paddingLeft: 10,
    width: 320,
  },
  ContainerPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    right: -5,
  },
  StyleIconShowPassword: {
    left: -30,
    bottom: -10,
  },
});
