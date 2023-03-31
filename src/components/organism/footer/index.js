//Import Library
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

//Import Library
import ButtonMoleculs from '../../moleculs/button/buttonLogin';

const FooterApp = ({navigation, onPress}) => {
  return (
    <View style={styles.ContainerFooter}>
      <View style={styles.ButtonNext}>
        <ButtonMoleculs title={'Selanjutnya'} onPress={onPress} />
      </View>
      <View style={styles.StyleHideMenu} />
    </View>
  );
};
export default FooterApp;

const styles = StyleSheet.create({
  ContainerFooter: {
    backgroundColor: '#FFFFFF',
    marginTop: 44,
    paddingTop: 22,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  StyleHideMenu: {
    backgroundColor: '#eaf0ff',
    width: 145,
    height: 6,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
});
