//Import Library
import React from 'react';
import {View, Image} from 'react-native';

const imageAssets = ({source}) => {
  return (
    <View>
      <Image source={source} />
    </View>
  );
};
export default imageAssets;
