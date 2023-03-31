//Import Library
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colours} from '../../../../helpers/colours';
import {Format} from '../../../../helpers/formats';

const TextApp = ({teks}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.fontPage}>{teks}</Text>
    </View>
  );
};

export default TextApp;
const styles = StyleSheet.create({
  fontPage: {
    fontSize: Format.primary,
    color: Colours.primary,
  },
});
