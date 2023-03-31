//Import Library
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import Toggle from 'react-native-toggle-element';

const Switching = () => {
  const [ToggleValue, setToggleValue] = useState(false);

  if (ToggleValue === true) {
    Alert.alert('Peringatan', 'Berhasil');
  } else {
  }
  return (
    <View>
      <Toggle
        value={ToggleValue}
        onPress={toggle => setToggleValue(toggle)}
        leftTitle={ToggleValue === false ? 'ID' : ''}
        rightTitle={ToggleValue === true ? 'ID' : ''}
        trackBar={{
          width: 45,
          height: 16,
          top: 20,
          radius: 24,
          activeBackgroundColor: '#DAE9FF',
          inActiveBackgroundColor: '#DAE9FF',
          borderWidth: 1,
          borderActiveColor: '#98C1FF',
          borderInActiveColor: '#98C1FF',
        }}
        thumbButton={{
          width: 30,
          height: 30,
          radius: 20,
          activeBackgroundColor: 'white',
          inActiveBackgroundColor: '#2F82FF',
          activeColor: 'blue',
          inActiveColor: 'white',
        }}
      />
    </View>
  );
};

export default Switching;
