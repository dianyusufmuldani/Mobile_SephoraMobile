import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import BackMenuIcon from '../../../../assets/icon/backMenu.png';
import IconStar from '../../../../assets/icon/icon_star_transfer.svg';
const BackMenu = ({onPress, hideShowStar}) => {
  useEffect(() => {
    console.log('hideShowStart', hideShowStar);
  }, [hideShowStar]);
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.ContainerBack} onPress={onPress}>
        <Image source={BackMenuIcon} />
      </TouchableOpacity>
      {hideShowStar == 'true' ? (
        <TouchableOpacity style={styles.ContainerBack}>
          <IconStar />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default BackMenu;
const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 45,
  },
  ContainerBack: {
    backgroundColor: '#FFFFFF',
    width: 24,
    height: 24,
    // marginLeft: 24,
    // marginTop: 45,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
