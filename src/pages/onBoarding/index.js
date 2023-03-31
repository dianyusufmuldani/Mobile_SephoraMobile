//Import Library
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Header from '../../components/organism/header';
// import { useDispatch } from 'react-redux';
// import { setLoading } from '../../services/redux/reducer/globalSlice';
// import LinearGradient from 'react-native-linear-gradient';

//Import Component
import TextOnBoardSubTitle from '../../components/atoms/Text/textOnBoarding/textOnBoardSubTitle';
import TextOnBoardNormal from '../../components/atoms/Text/textOnBoarding/textOnBoardNormal';
import ButtonMoleculs from '../../components/moleculs/button/buttonLogin';
import ButtonClick from '../../components/atoms/Button';
import ScrollUp from '../../components/organism/scrollUp';

//Import Assets
import Ellipse from '../../../assets/image/ellipse.png';

import IconMessage from '../../../assets/icon/icon_message.svg';
import ImagePhoneIconAll from '../../../assets/image/phone_icon_all.png';
import ImageDompet from '../../../assets/image/dompet.png';
import ImageDoublePhone from '../../../assets/image/double_phone.png';

// import onBoard1Phone from '../../../assets/image/onBoard_1_phone.png'
// import IconArrow from '../../../assets/icon/arrow.svg'
// import PhoneStandUpPosition from '../../../assets/image/phone_standup_position.png'

const OnBoarding = ({navigation}) => {
  // const dispatch=useDispatch();
  const [subTitle, setSubTitle] = useState(null);
  const [deskripsi1, setDeskripsi1] = useState(null);
  const [desrkipsi2, setDeskripsi2] = useState(null);
  const [imgActive, setImgActive] = useState(0);
  const [dotSlide, setDotSlide] = useState(0);
  const images = [];
  const onChange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  useEffect(() => {
    if (imgActive == 0) {
      setSubTitle('Kemudahan dalam Genggaman');
      setDeskripsi1('Hanya dengan 3 langkah registrasi, nikmati segala');
      setDeskripsi2('kemudahan dalam bertransaksi');
      setDotSlide('0');
    } else if (imgActive == 1) {
      setSubTitle('Transaksi Internasional');
      setDeskripsi1('Nikmati kemudahan bertransaksi di seluruh dunia');
      setDeskripsi2('dengan kartu VISA dan Mastercard');
    } else if (imgActive == 2) {
      setSubTitle('Keamanan Dalam Bertransaksi');
      setDeskripsi1('Keamanan dalam bertransaksi Anda merupakan');
      setDeskripsi2('prioritas bagi kami');
    }
  });
  const handleNavigasiBuatAkun = () => {
    navigation.navigate('Register');
    // dispatch(setLoading(true))
  };
  return (
    <View style={styles.Container}>
      <Header />
      <View style={styles.ContainerBody}>
        <ScrollView
          onScroll={({nativeEvent}) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal>
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              source={{uri: e}}
              style={{width: 400, height: 200}}
            />
          ))}

          <View style={styles.EllipseContainer}>
            <Image source={Ellipse} />
            <Image
              source={ImagePhoneIconAll}
              style={styles.StyleImagePhoneIconAll}
            />
          </View>

          <View style={styles.EllipseContainer}>
            <Image source={Ellipse} />
            <Image source={ImageDompet} style={styles.StyleImageDompet} />
          </View>

          <View style={styles.EllipseContainer}>
            <Image source={Ellipse} />
            <Image
              source={ImageDoublePhone}
              style={styles.StyleImageDoublePhone}
            />
          </View>
        </ScrollView>

        <View style={{flexDirection: 'row', marginBottom: 30}}>
          <View
            style={[
              imgActive == 0 ? styles.DotSlideActive : styles.DotSlideInActive,
            ]}
          />
          <View
            style={[
              imgActive == 1 ? styles.DotSlideActive : styles.DotSlideInActive,
            ]}
          />
          <View
            style={[
              imgActive == 2 ? styles.DotSlideActive : styles.DotSlideInActive,
            ]}
          />
        </View>
        <View style={styles.TextStyle}>
          <TextOnBoardSubTitle value={subTitle} />
          <TextOnBoardNormal value={deskripsi1} />
          <TextOnBoardNormal value={desrkipsi2} />
        </View>

        <ButtonMoleculs
          title={'Buat Akun Sekarang'}
          onPress={handleNavigasiBuatAkun}
        />
        <View style={styles.ButuhBantuanStyle}>
          <View style={styles.IconButuhBantuanStyle}>
            <IconMessage width={15} height={14.98} />
            <Text style={styles.DotIconMessage}>...</Text>
          </View>
          <ButtonClick
            title={'Butuh Bantuan ?'}
            onPress={() =>
              Alert.alert('Perhatian', 'Pusat bantuan ada di nomor 085********')
            }
          />
        </View>
        <ScrollUp />
      </View>
    </View>
  );
};
export default OnBoarding;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F3F7FD',
    flex: 1,
  },
  ContainerBody: {
    alignItems: 'center',
  },
  EllipseContainer: {
    marginTop: 18,
    width: 390,
    height: 240,
    justifyContent: 'flex-end',
    marginBottom: 30,
    alignItems: 'center',
  },
  PhoneStyle: {
    position: 'absolute',
    bottom: 40.5,
    left: 100,
  },
  TextStyle: {
    paddingBottom: 71,
    alignItems: 'center',
  },
  ButuhBantuanStyle: {
    flexDirection: 'row',
    marginTop: 22.5,
  },
  IconButuhBantuanStyle: {
    marginRight: 6.5,
    position: 'absolute',
    top: 2,
    left: -17,
  },
  DotIconMessage: {
    fontSize: 9,
    color: '#230B34',
    position: 'absolute',
    left: 3.9,
    top: -2.5,
  },
  ArrowStyles: {
    width: 36.84,
    height: 36.84,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 100,
    left: 200,
  },
  DompetStyle: {
    borderRadius: 20,
    position: 'absolute',
    width: 139.74,
    height: 97.49,
    top: 70,
    left: 130,
  },
  BorderLineDashed: {
    borderWidth: 2,
    borderStyle: 'dashed',
    width: 146.74,
    height: 81.24,
    borderColor: '#FFFFFF',
    position: 'absolute',
    top: 8,
    left: 10,
    opacity: 0.4,
    borderBottomLeftRadius: 12,
    borderTopStartRadius: 12,
  },
  PhoneStandUpPositionStyles: {
    position: 'absolute',
    top: 50,
    right: 95,
  },
  DotSlideInActive: {
    backgroundColor: '#BCC8E7',
    width: 8,
    height: 8,
    borderRadius: 20,
    marginHorizontal: 2,
  },
  DotSlideActive: {
    backgroundColor: '#5E9EFF',
    width: 30,
    height: 8,
    borderRadius: 20,
    marginHorizontal: 2,
  },
  StyleImagePhoneIconAll: {
    width: 230,
    height: 200,
    position: 'absolute',
  },
  StyleImageDompet: {
    width: 250,
    height: 220,
    position: 'absolute',
    top: 12,
  },
  StyleImageDoublePhone: {
    width: 210,
    height: 200,
    position: 'absolute',
    top: 20,
  },
});
