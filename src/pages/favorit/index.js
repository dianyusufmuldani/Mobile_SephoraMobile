import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Favorit = () => {
  return (
    <View style={styles.Container}>
      <Text>PAGES FAVORIT</Text>
    </View>
  );
};
export default Favorit;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});
