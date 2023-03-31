import {setOtp} from './otpSlice';

export const OtpChecking =
  (
    feature,
    isiOtp,
    navigation,
    stateDataOtp,
    setIsRunningCountdown,
    setIsVisibleInvalid,
    setIsVisible,
  ) =>
  async dispatch => {
    if (feature == 'Register') {
      setIsRunningCountdown(false);
      console.log('mChecking otp register');
      console.log('isi State Sukses mChecking', stateDataOtp.otpSukses);
      console.log('isi OTP mChecking', isiOtp);
      if (
        isiOtp[(0, 1, 2, 3, 4, 5)] == stateDataOtp.otpSukses[(0, 1, 2, 3, 4, 5)]
      ) {
        setIsVisible(true);

        console.log('Sukses Sama');
      } else {
        console.log('Kok gagal yaaa');
        setIsVisibleInvalid(true);
      }
    } else if (feature == 'Home') {
      console.log('mChecking otp login');
      if (
        isiOtp[(0, 1, 2, 3, 4, 5)] == stateDataOtp.otpSukses[(0, 1, 2, 3, 4, 5)]
      ) {
        navigation.navigate('SplitBill');
        console.log('Sukses Sama');
      } else {
        console.log('Kok gagal yaaa');
        setIsVisibleInvalid(true);
      }
    }
  };
