import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AddOrder from '../../../../../assets/icon/addOrder.svg';
import TextDefaultBill from '../../../atoms/Text/textDefaultBill';
const ButtonAddOrder = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.ContainerAddOrder} onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.TextButton}>
          <TextDefaultBill value={'Tambah Pesanan'} />
        </View>
        <AddOrder width={20} height={20} />
      </View>
    </TouchableOpacity>
  );
};
export default ButtonAddOrder;
const styles = StyleSheet.create({
  ContainerAddOrder: {
    flexDirection: 'row',
    backgroundColor: '#2F82FF',
    borderRadius: 10,
    width: 130,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  TextButton: {
    paddingRight: 5,
  },
});
