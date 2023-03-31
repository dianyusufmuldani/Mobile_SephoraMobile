//Import Library
import React from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
//Import Component
import {Colours} from '../../../helpers/colours';
import {Format} from '../../../helpers/formats';

const ButtonClick = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.Container}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonClick;
const styles = StyleSheet.create({
  Container: {
    color: Colours.button,
    fontWeight: 'bold',
    fontSize: Format.button,
    lineHeight: 18,
    fontFamily: 'Roboto',
  },
});
