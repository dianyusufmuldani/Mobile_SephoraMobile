//Import Library
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';

//Import Component
import FooterApp from '../../../src/components/organism/footer';
import TextSubTitle from '../../../src/components/atoms/Text/textSubTitle';
import TextApp from '../../../src/components/atoms/Text/textApp';
import TextField from '../../../src/components/atoms/Text/textField/textFieldDefault';
import TextFieldDate from '../../../src/components/atoms/Text/textField/textFieldDate';
import BackMenu from '../../components/moleculs/backMenu';
import {setRegister} from '../../services/redux/reducer/registerSlice';
import Loading from '../../../src/components/atoms/loading';

//Import Assets
import PersonalIcon from '../../../assets/icon/personal.png';
import Line from '../../../assets/icon/line.png';

const RegisterAccount = ({navigation}) => {
  const [nik, setNik] = useState(null);
  const [noTelepon, setNoTelepon] = useState(null);
  const [namaLengkap, setNamaLengkap] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [email, setEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const BackNav = () => {
    navigation.goBack();
  };
  const handleButtonSelanjutnya = () => {
    // if ((nik != null, noTelepon != null, namaLengkap != null)) {
    dispatch(
      setRegister({
        nik: nik,
        noTelepon: noTelepon,
        namaLengkap: namaLengkap,
        birthday: birthday,
        email: email,
      }),
    );
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('MPIN', {
        fromScreen: 'Register',
      });
      setNik(null);
    }, 1000);
  };
  //    else {
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //       alert('Mohon isi form terlebih dahulu');
  //     }, 1000);
  //   }
  // };

  useEffect(() => {
    console.log('isi Birthday', birthday);
    setIsLoading(false);
  }, []);
  // const {username} = useSelector(state => state.loginReducer);
  return (
    <ScrollView style={styles.Container}>
      <BackMenu onPress={BackNav} />
      <Loading visible={isLoading} />
      <View style={styles.HeaderStyle}>
        <Text style={styles.FontStyleHeader}>BUAT AKUN</Text>
      </View>
      <View style={styles.ContainerCard}>
        <View style={styles.ContainerMoleculsCardText}>
          <Image source={PersonalIcon} />
          <View style={styles.ContainerCardText}>
            <TextSubTitle value={'Informasi Data Diri'} />
            <TextApp
              teks={
                'Masukkan informasi data diri Anda untuk proses pembuatan akun.'
              }
            />
          </View>
        </View>
        <Image source={Line} />
        <TextField
          placeholder={'NIK'}
          keyboardType={'numeric'}
          maxLength={16}
          value={nik}
          onChangeText={value => setNik(value)}
        />
        <TextField
          placeholder={'No. Telepon'}
          keyboardType={'numeric'}
          maxLength={16}
          value={noTelepon}
          onChangeText={value => setNoTelepon(value)}
        />
        <TextField
          placeholder={'Nama Lengkap'}
          value={namaLengkap}
          onChangeText={value => setNamaLengkap(value)}
        />
        <View>
          <TextFieldDate
            placeholder={'Tanggal Lahir'}
            value={birthday}
            onChangeText={value => setBirthday(value)}
            birthdayValue
          />
        </View>
        <TextField
          placeholder={'Email'}
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </View>
      <FooterApp navigation={navigation} onPress={handleButtonSelanjutnya} />
    </ScrollView>
  );
};
export default RegisterAccount;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F3F7FD',
    flex: 1,
  },
  HeaderStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 45,
  },
  FontStyleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ContainerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: '90%',
    alignSelf: 'center',
    height: 530,
    marginTop: 40,
    elevation: 3,
    shadowOpacity: 10,
  },
  ContainerCardText: {
    paddingLeft: 18,
    paddingRight: 20,
  },
  ContainerMoleculsCardText: {
    width: 295,
    height: 58,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
});
