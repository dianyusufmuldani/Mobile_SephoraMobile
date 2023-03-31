//Import Library
import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

//Import Component
import TextDefaultBill from '../../atoms/Text/textDefaultBill';
import TextBillTotalBayar from '../../atoms/Text/textBillTotalBayar';

const CardBill = ({
  pesanan,
  harga,
  sum,
  hargaBayar,
  totalHargaDiskon,
  onDeleteItem,
}) => {
  if (totalHargaDiskon == 0) {
    hargaBayar = harga;
  } else {
    hargaBayar = Math.ceil((harga / sum) * totalHargaDiskon);
  }

  console.log('harga diskonku', Number(totalHargaDiskon));

  return (
    <View style={styles.Container}>
      <View style={styles.PesanaStyles}>
        <TextDefaultBill value={'Nama Pesanan'} />
        <TextDefaultBill value={pesanan} />
      </View>
      <View style={styles.HargaStyles}>
        <TextDefaultBill value={'Harga'} />
        <TextDefaultBill value={harga} />

        <View style={styles.HargaBayar}>
          <TextBillTotalBayar value={'Harga Bayar'} />
          <TextBillTotalBayar value={hargaBayar} />
        </View>
      </View>
      <TouchableOpacity style={styles.DeleteOrder} onPress={onDeleteItem}>
        <TextDefaultBill value={'X'} />
      </TouchableOpacity>
    </View>
  );
};
export default CardBill;
const styles = StyleSheet.create({
  Container: {
    width: 300,
    height: 80,
    backgroundColor: '#2F82FF',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    marginBottom: 10,
  },
  PesanaStyles: {
    paddingRight: 10,
  },
  HargaStyles: {
    paddingLeft: 40,
  },
  HargaBayar: {
    paddingTop: 0,
  },
  DeleteOrder: {
    position: 'absolute',
    right: 15,
    top: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
