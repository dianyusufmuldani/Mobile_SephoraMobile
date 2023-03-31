import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextTitle from '../../atoms/Text/textTitle';
import Switching from '../../moleculs/Switch';
const Header = () => {
  return (
    <View style={styles.Container}>
      <TextTitle value={'BANK SEPHORA'} />
      <Switching />
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 40,
  },
});
