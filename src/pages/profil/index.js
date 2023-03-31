import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Profil = () => {
  return (
    <View style={styles.Container}>
      <Text>PAGES PROFIL</Text>
    </View>
  );
};
export default Profil;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});
