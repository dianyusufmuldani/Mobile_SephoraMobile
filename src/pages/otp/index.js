//Import Library
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import CountDown from 'react-native-countdown-component';
import { OtpChecking } from '../../services/redux/reducer/otpChecking';
import { useNavigation } from '@react-navigation/native';


//Import Component
import BackMenu from '../../components/moleculs/backMenu';
import ButtonClick from '../../components/atoms/Button';
import NumberKeyboard from '../../components/moleculs/numberKeyboard';
import { setOtp } from '../../services/redux/reducer/otpSlice';

//Import Assets
import ImagePhoneOTP from '../../../assets/image/otp_phone.png';
import CancelKeyboardOtp from '../../../assets/icon/cancel_keyboard_otp.svg';
import BackgroundGradient from '../../../assets/image/background_gradient.png'
import ImageMobileOtp from '../../../assets/image/mobile_otp.svg'
import Loading from '../../components/atoms/loading';
import AlertGagal from '../../components/organism/alertGagal';
import AlertDone from '../../components/organism/alertDone';

const OTP = ({navigation, route}) => {
  const {fromScreen}= route.params
 
  const stateDataRegister = useSelector(state => state.register);
  const stateDataOtp=useSelector(state=>state.otp)
  const [isiOtp, setIsiOtp] = useState([]);
  const [isVisible, setIsVisible]=useState(false)
  const [isVisibleTimeOut, setIsVisibleTimeOut]=useState(false)
  const [isVisibleInvalid, setIsVisibleInvalid]=useState(false)
  const [isRunningCountdown, setIsRunningCountdown]=useState(true)
  const dispatch = useDispatch();
  
  const deletePin = item => {
    console.log('Delete Berhasil');
    setIsiOtp(isiOtp.slice(0, -1));
  };

  useEffect(() => {
    
    if(isiOtp!=null||isiOtp!=undefined)
    {
   
    console.log('isiOtp useEfek',fromScreen);
    console.log('isi State Data Otp Pages', stateDataOtp.isiOtp);
    dispatch(setOtp({isiOtp:isiOtp}));
    if(isiOtp.length==6){
      dispatch(setOtp({isiOtp:isiOtp}));
        dispatch(OtpChecking(fromScreen, isiOtp, navigation, stateDataOtp, setIsRunningCountdown, setIsVisibleInvalid, setIsVisible))   
        setIsiOtp([])  
    }
  }
  }, [isiOtp]);
  

  const HandleKirimUlang = () => {
    Alert.alert('Mohon tunggu', 'PIN sedang dikirimkan kembali ke nomor anda');
  };
  const HandleBackPages = () => {
    navigation.goBack();
  };
  const handleTutupDone=()=>{
    setIsVisible(false)
    navigation.navigate('Login');
  }
  const handleTutupGagal=()=>{
    setIsVisibleInvalid(false)
  }
  const handleTutupCoba=()=>{
    setIsVisibleInvalid(false)
  }
  const handleTutupTimeOut=()=>{
    setIsVisibleTimeOut(false)
  }
  const handleTutupCobaTimeOut=()=>{
    setIsVisibleTimeOut(false)
  }
  return (
    <ScrollView style={styles.Container}>
      <AlertDone visible={isVisible} onPress={handleTutupDone} value={'Selamat! OTP yang telah anda masukkan benar. Silahkan lanjutkan dengan login menggunakan username dan password '}/>
      <AlertGagal visible={isVisibleTimeOut} onPressTutup={handleTutupTimeOut} onPressCoba={handleTutupCobaTimeOut} value={'Waktu habis! Silahkan klik tombol Tutup dan Kirim Ulang untuk mengirim kode otp kembali'}/>
      <AlertGagal visible={isVisibleInvalid} onPressTutup={handleTutupGagal} onPressCoba={handleTutupCoba} value={'Kode OTP yang telah anda masukkan salah. Silahkan bisa mencoba kembali'}/>
    
      <Image source={BackgroundGradient} style={styles.GradienHeaderBlue}/>

      <BackMenu onPress={HandleBackPages} />
      <Text style={styles.TextHeader}>OTP</Text>
      <View style={styles.ContainerBody}>
        <ImageMobileOtp width={60} height={100}  style={styles.StyleImagePhoneOTP} />
        <CountDown
          size={20}
          showSeparator
          timeToShow={['M', 'S']}
          timeLabels={{m: null, s: null}}
          until={50000}
          running={isRunningCountdown}
          onPress={()=>
          alert('helo')
          }
          onFinish={() =>{
            setIsVisibleTimeOut(true)
            setIsiOtp([])
           
          }
             }
          digitStyle={styles.Timer}
        />
        <View style={styles.StyleViewFont}>
          <Text style={styles.FontOTP}>
            Masukkan 6 digit kode OTP yang telah dikirimkan
          </Text>
          <Text style={styles.FontOTP}>
            melalui nomor telepon {stateDataRegister.noTelepon}
          </Text>
        </View>
        <View style={styles.StyleSecurePIN}>
          
          <View style={(stateDataOtp.isiOtp[0]!=null)?styles.DotPinTrueRev:styles.DotPinFalse} />
          <View style={(stateDataOtp.isiOtp[1]!=null)?styles.DotPinTrueRev:styles.DotPinFalse} />
          <View style={(stateDataOtp.isiOtp[2]!=null)?styles.DotPinTrueRev:styles.DotPinFalse} />
          <View style={(stateDataOtp.isiOtp[3]!=null)?styles.DotPinTrueRev:styles.DotPinFalse} />
          <View style={(stateDataOtp.isiOtp[4]!=null)?styles.DotPinTrueRev:styles.DotPinFalse} />
          <View style={(stateDataOtp.isiOtp[5]!=null)?styles.DotPinTrueRev:styles.DotPinFalse} />
          
        </View>
        <ButtonClick title={'Kirim Ulang'} onPress={HandleKirimUlang} />
        <View style={styles.ViewNumberKeyboard}>
      
          <NumberKeyboard
            value={1}
            onPress={() => setIsiOtp([...isiOtp,1])}
          />
          <NumberKeyboard
            value={2}
            onPress={() =>  setIsiOtp([...isiOtp,2])}
          />
          <NumberKeyboard
            value={3}
            onPress={() => setIsiOtp([...isiOtp, 3])}
          />
        </View>
        <View style={styles.ViewNumberKeyboard}>
          <NumberKeyboard
            value={4}
            onPress={() => setIsiOtp([...isiOtp, 4])}
          />
          <NumberKeyboard
            value={5}
            onPress={() => setIsiOtp([...isiOtp, 5])}
          />
          <NumberKeyboard
            value={6}
            onPress={() => setIsiOtp([...isiOtp, 6])}
          />
        </View>
        <View style={styles.ViewNumberKeyboard}>
          <NumberKeyboard
            value={7}
            onPress={() => setIsiOtp([...isiOtp, 7])}
          />
          <NumberKeyboard
            value={8}
            onPress={() => setIsiOtp([...isiOtp, 8])}
          />
          <NumberKeyboard
            value={9}
            onPress={() => setIsiOtp([...isiOtp, 9])}
          />
        </View>
        <View style={styles.ViewNumberKeyboard}>
          <NumberKeyboard
            value={0}
            onPress={() => setIsiOtp([...isiOtp, 0])}
          />
          <TouchableOpacity onPress={deletePin}>
            <CancelKeyboardOtp style={styles.IconCancelKeyboardOtp} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default OTP;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  TextHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 45,
  },
  ContainerBody: {
    alignItems: 'center',
  },
  StyleImagePhoneOTP: {
    marginTop: 39.5,
  },
  FontOTP: {
    color: '#2B2F3C',
    fontSize: 14,
    fontWeight: '400',
  },
  StyleViewFont: {
    paddingTop: 10,
    alignItems: 'center',
  },
  StyleSecurePIN: {
    flexDirection: 'row',
    marginVertical: 33.14,
    alignItems:'center'
  },
  DotPinTrue: {
    backgroundColor: '#2F82FF',
    width: 15.71,
    height: 15.71,
    borderRadius: 8,
    position: 'absolute',
    left: 3,
    top: 3.2,
  },
  DotPinFalse: {
    backgroundColor: '#FFFFFF',
    width: 15.71,
    height: 15.71,
    borderRadius: 8,
    marginHorizontal: 13,
    borderColor: '#97A5C9',
    borderWidth: 1,
    
  },
  
  DotPinTrueRev: {
    backgroundColor: '#2F82FF',
    width: 15.71,
    height: 15.71,
    borderRadius: 8,
    marginHorizontal: 13,
    borderWidth: 1,
    
  },
  CoverDotPinTrue: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#DAE9FF',
    marginHorizontal: 13,
  },
  FontNumberKeyboard: {
    fontSize: 22,
    fontWeight: '500',
  },
  CoverNumberKeyboard: {
    backgroundColor: '#F3F7FD',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginHorizontal: 27,
    marginBottom: 25,
  },
  ViewNumberKeyboard: {
    flexDirection: 'row',
    marginTop:10
  },
  IconCancelKeyboardOtp: {
    position: 'absolute',
    right: -70,
    top: 20,
  },
  Timer: {
    marginHorizontal: -10,
  },
  GradienHeaderBlue: {
    width: 400,
    height: 350,
    position: 'absolute',
  },
  ModalTimeOut:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
