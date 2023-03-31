//Import Library
import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';

//Import Component
import RootNavigation from './src/Navigation/rootNavigation';

import {store} from './src/services/redux/store/';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        {/* <DaftarAkun/>
      <Login/> */}
        <RootNavigation />
        {/* <ReduxTraining/> */}
      </View>
    </Provider>
  );
};
export default App;
