//Import Library
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import axios from 'axios';
//Import Component
import TextTitle from '../../../src/components/atoms/Text/textTitle';
import Switching from '../../../src/components/moleculs/Switch';
import ButtonClick from '../../../src/components/atoms/Button';
import TextFooter from '../../../src/components/atoms/Text/textFooter';
import TextApp from '../../../src/components/atoms/Text/textApp';
import TextSubTitle from '../../../src/components/atoms/Text/textSubTitle';
import TextField from '../../../src/components/atoms/Text/textField/textFieldDefault';
import TextFieldPassword from '../../../src/components/atoms/Text/textField/textFieldPassword';
import ButtonMoleculs from '../../../src/components/moleculs/button/buttonLogin';
import SmileIcon from '../../../src/components/moleculs/smileicon';
import {getLogin} from '../../services/redux/reducer/loginSlice';
import Loading from '../../components/atoms/loading';

//Import Assets
import Bi from '../../../assets/image/Bi.svg';
import Ojk from '../../../assets/image/Ojk.svg';
import Lps from '../../../assets/image/Lps.svg';
import Header from '../../components/organism/header';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const stateLogin = useSelector(state => state.login);

  const onPressMasuk = () => {
    if (username === '') {
      alert('Mohon isi username terlebih dahulu');
    } else if (password === '') {
      alert('Mohon isi password terlebih dahulu');
    } else {
      const request = {
        username: username,
        password: password,
      };
      dispatch(getLogin(request));
      setLoading(true);
    }
  };

  useEffect(() => {
    if (stateLogin.data != null || stateLogin.data != undefined) {
      console.log('data login:');
      if (stateLogin.data.status === 200) {
        // if (username === 'admin' && password === 'admin') {
        setLoading(false);
        navigation.navigate('Home');
        setUsername(null);
        setPassword(null);
        // }
      } else if (stateLogin.data.status === 400) {
        // else {
        setLoading(false);
        Alert.alert('Login Gagal', 'Username atau Password Salah');
        setUsername(null);
        setPassword(null);
      }
    }
  }, [stateLogin]);

  return (
    <View style={styles.Container}>
      <Loading visible={loading} />
      <Header />
      <View style={styles.ContainerCardLogin}>
        <View style={styles.Line} />
        <TextSubTitle value={'Login'} />
        <TextApp teks="Silahkan masukkan username dan password terdaftar Anda untuk melakukan login" />
        <View style={styles.ContainerFormLogin}>
          <TextField
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
            autoCapitalize={'none'}
          />
          <TextFieldPassword
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />

          <View style={styles.ContainerMasuk}>
            <ButtonMoleculs title={'MASUK'} onPress={onPressMasuk} />
          </View>
          <SmileIcon />
        </View>
        <View style={styles.ContainerButtonForgotPassword}>
          <ButtonClick title={'Lupa Username /'} />
          <ButtonClick title={'password ?'} />
        </View>
        <View style={styles.ImageBank}>
          <Ojk />
          <Lps />
          <Bi />
        </View>
        <TextFooter
          value={
            'PT Bank Sephora Indonesia ("Bank Sephora") telah berlisensi oleh Bank Indonesia dan diawasi'
          }
        />
        <TextFooter
          value={
            'oleh Otoritas Jasa Keuangan (OJK) serta(LPS) merupakan peserta dari Lembaga Penjaminan'
          }
        />
        <TextFooter value={'Simpanan (LPS)'} />
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#E1E8F6',
    flex: 1,
  },

  ContainerCardLogin: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingLeft: 20,
    paddingTop: 20,
    height: '100%',
  },
  Line: {
    backgroundColor: '#eaf0ff',
    width: 60,
    height: 6,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 30,
  },
  ContainerButtonForgotPassword: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 40,
  },
  ImageBank: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 80,
  },

  ContainerFormLogin: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderColor: '#ebf0fd',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 12,
    marginRight: 15,
    alignItems: 'center',
  },
  ContainerMasuk: {
    marginBottom: 60,
    marginTop: 40,
  },
  ModalView: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
