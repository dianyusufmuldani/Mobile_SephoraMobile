//Import Library
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colours} from '../../../../helpers/colours';
import {Format} from '../../../../helpers/formats';

const TextDefaultBill = ({value}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.fontPage}>{value}</Text>
    </View>
  );
};

export default TextDefaultBill;
const styles = StyleSheet.create({
  Container: {
    paddingBottom: 1,
  },
  fontPage: {
    fontSize: Format.primaryBill,
    color: Colours.primaryBill,
  },
});
