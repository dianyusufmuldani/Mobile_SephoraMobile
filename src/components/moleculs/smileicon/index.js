//Import Library
import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

//Import Assets
import IconSnap from '../../../../assets/icon/iconSnap.png';

const SmileIcon = () => {
  return (
    <TouchableOpacity style={styles.Container}>
      <View>
        <Image source={IconSnap} />
      </View>
    </TouchableOpacity>
  );
};
export default SmileIcon;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#2F82FF',
    borderRadius: 100,
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -30,
    right: 145,
  },
});
