import {setMpin} from './mpinSlice';

export const MpinChecking =
  (
    feature,
    isiMpin,
    navigation,
    stateDataMpin,
    setIsRunningCountdown,
    setIsVisibleInvalid,
    setIsVisible,
  ) =>
  async dispatch => {
    if (feature == 'Register') {
      setIsRunningCountdown(false);
      console.log('mChecking mpin register');
      console.log('isi State Sukses mChecking', stateDataMpin.mpinSukses);
      console.log('isi MPIN mChecking', isiMpin);
      if (
        isiMpin[(0, 1, 2, 3, 4, 5)] ==
        stateDataMpin.mpinSukses[(0, 1, 2, 3, 4, 5)]
      ) {
        setIsVisible(true);

        console.log('Sukses Sama');
      } else {
        console.log('Kok gagal yaaa');
        setIsVisibleInvalid(true);
      }
    } else if (feature == 'Home') {
      console.log('mChecking mpin login');
      if (
        isiMpin[(0, 1, 2, 3, 4, 5)] ==
        stateDataMpin.mpinSukses[(0, 1, 2, 3, 4, 5)]
      ) {
        navigation.navigate('SplitBill');
        console.log('Sukses Sama');
      } else {
        console.log('Kok gagal yaaa');
        setIsVisibleInvalid(true);
      }
    }
  };
