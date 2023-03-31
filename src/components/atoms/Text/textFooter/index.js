//Import Library
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colours} from '../../../../helpers/colours';
import {Format} from '../../../../helpers/formats';

const TextFooter = ({value}) => {
  return (
    <View>
      <Text style={styles.Container}>{value}</Text>
    </View>
  );
};
export default TextFooter;
const styles = StyleSheet.create({
  Container: {
    fontSize: Format.footer,
    textAlign: 'center',
    color: Colours.textFooter,
    alignSelf: 'stretch',
    lineHeight: 10,
    fontWeight: '400',
  },
});
