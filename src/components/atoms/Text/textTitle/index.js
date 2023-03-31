//Import Library
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colours} from '../../../../helpers/colours';

const TextTitle = ({value}) => {
  return (
    <View>
      <Text style={styles.Container}>{value}</Text>
    </View>
  );
};
export default TextTitle;

const styles = StyleSheet.create({
  Container: {
    fontSize: 18,
    color: Colours.Title,
    fontWeight: 'bold',
  },
});
