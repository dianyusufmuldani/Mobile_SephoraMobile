//Import Library
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colours} from '../../../../helpers/colours';
import {Format} from '../../../../helpers/formats';

const TextSubTitle = ({value}) => {
  return (
    <View>
      <Text style={styles.fontSubTitle}>{value}</Text>
    </View>
  );
};
export default TextSubTitle;

const styles = StyleSheet.create({
  fontSubTitle: {
    fontSize: Format.subTitle,
    fontWeight: 'bold',
    lineHeight: 26,
    fontWeight: 'bold',
    color: Colours.sutTitle,
  },
});
