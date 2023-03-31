//Import Library
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';

//Import Component
import CardBill from '../../components/organism/cardBill';
import ButtonAddOrder from '../../components/moleculs/button/buttonAddOrder';
import TextField from '../../components/atoms/Text/textField/textFieldDefault';
import TextTitle from '../../components/atoms/Text/textTitle';
import Loading from '../../components/atoms/loading';
import SplashScreen from 'react-native-splash-screen';

const SplitBill = () => {
  const [pesanan, setPesanan] = useState(null);
  const [harga, setHarga] = useState(0);
  const [hargaBayar, setHargaBayar] = useState(0);
  const [totalHargaDiskon, setTotalHargaDiskon] = useState(0);
  const [isModalValue, setIsModalValue] = useState(false);
  const [dataBill, setDataBill] = useState([]);
  const [loading, setLoading] = useState(false);

  let listHarga = dataBill.map(item => parseInt(item.harga));
  const sum = listHarga.reduce((partialSum, a) => partialSum + a, 0);

  const HandleAddOrderModal = () => {
    setIsModalValue(true);
  };

  const HandleAddOrder = () => {
    if (pesanan === null || pesanan === undefined) {
      Alert.alert('Perhatian', 'Mohon isi nama pesanan terlebih dahulu');
    } else if (harga === null || harga === undefined) {
      Alert.alert('Perhatian', 'Mohon isi harga terlebih dahulu');
    } else {
      console.log('isi Databill', dataBill)
      setDataBill([
        ...dataBill,
        {
          pesanan: pesanan,
          harga: harga,
          hargaBayar: hargaBayar,
        },
      ]);
      setPesanan(null);
      setHarga(null);
      setIsModalValue(false);
    }
  };
  // const HandleCountPriceDiscount = () => {
  //   setTotalHargaDiskon(Number(totalHargaDiskon));
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 100);
  // };

  const deleteItem = item => {
    for (let i = 0; i < dataBill.length; i++) {
      if (dataBill[i] === item) {
        dataBill.splice(i, 1);
        setDataBill([...dataBill]);
      }
    }
  };
  const CancelOrder = () => {
    setIsModalValue(false);
    setPesanan(null);
    setHarga(null);
  };
  useEffect(()=>{
    console.log('isi Databill', dataBill)
  })

  // useEffect(() => {
  //   if (dataBill != undefined || dataBill != null) {
  //     console.log('setelah UseEfeck', dataBill);
  //     console.log('harga diskonku useEfek', Number(totalHargaDiskon));
  //   }
  // }, [dataBill]);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>SPLIT BILL</Text>
      <Loading visible={loading} />
      <View style={styles.ContainerButtonAddOrder}>
        <ButtonAddOrder onPress={HandleAddOrderModal} />
      </View>
      <ScrollView nestedScrollEnabled={true}>
        {dataBill.map((item, index) => {
          return (
            <CardBill
              key={index}
              pesanan={item.pesanan}
              totalHargaDiskon={totalHargaDiskon}
              sum={sum}
              harga={item.harga}
              hargaBayar={item.hargaBayar}
              onDeleteItem={() => deleteItem(item)}
            />
          );
        })}
      </ScrollView>
      <View style={styles.CardAddOrder} />

      <View style={styles.ContainerFooter}>
        <TextTitle value={`Total Harga ${sum}`} />
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <TextInput
            style={styles.InputTotalHargaDiskon}
            onChangeText={value => setTotalHargaDiskon(value)}
            placeholder="Masukkan total harga diskon"
            value={totalHargaDiskon}
            keyboardType={'numeric'}
          />
          {/* <Button
            title="Hitung"
            style={styles.ButtonHitung}
            onPress={HandleCountPriceDiscount}
          /> */}
        </View>
      </View>
      <Modal visible={isModalValue} transparent={true} animationType={'fade'}>
        <View style={styles.ModalStyle}>
          <View style={styles.ViewModal}>
            <TouchableOpacity style={styles.CancelOrder} onPress={CancelOrder}>
              <Text>X</Text>
            </TouchableOpacity>
            <TextField
              value={pesanan}
              placeholder={'Nama Pesanan'}
              onChangeText={value => setPesanan(value)}
            />
            <TextField
              value={harga}
              placeholder={'Harga normal'}
              keyboardType={'numeric'}
              onChangeText={value => setHarga(value)}
            />
            <View style={styles.StyleViewButtonAdd}>
              <ButtonAddOrder onPress={HandleAddOrder} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default SplitBill;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F3F7FD',
    alignItems: 'center',
  },
  ContainerButtonAddOrder: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  Title: {
    fontSize: 20,
    backgroundColor: '#2F82FF',
    width: '100%',
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  ContainerFooter: {
    backgroundColor: '#AED6F1',
    width: '100%',
    height: 80,
    marginTop: 20,
    alignItems: 'flex-end',
    paddingRight: 20,
    justifyContent: 'center',
  },
  InputTotalHargaDiskon: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginRight: 10,
    height: 40,
  },
  ButtonHitung: {
    borderRadius: 50,
    width: 250,
  },
  ModalStyle: {
    flex: 1,
    backgroundColor: '#F3F7FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewModal: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    width: '90%',
    height: 220,
    backgroundColor: '#2F82FF',
    borderColor: '#2A1DF2',
  },
  CancelOrder: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    right: -5,
    top: -10,
    width: 20,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2A1DF2',
  },
  StyleViewButtonAdd: {
    borderWidth: 1,
    marginTop: 10,
    height: 50,
    borderRadius: 20,
    borderColor: '#2A1DF2',
  },
});
