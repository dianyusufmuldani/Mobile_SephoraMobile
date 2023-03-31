//Import Library
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

//Import Component
import Login from '../pages/login';
import RegiterAccount from '../pages/registerAccount';
import Home from '../pages/home';
import SplitBill from '../pages/splitbill';
import OnBoarding from '../pages/onBoarding';
import OTP from '../pages/otp';
import Loading from '../components/atoms/loading';
import Favorit from '../pages/favorit';
import Mutasi from '../pages/mutasi';
import Profil from '../pages/profil';

//Import Assets
import IconHomeTabNav from '../../assets/icon/icon_footer_home.png';
import IconMutasiTabNav from '../../assets/icon/icon_footer_mutasi.svg';
import IconFavoritTabNav from '../../assets/icon/icon_footer_favorit.svg';
import IconProfilTabNav from '../../assets/icon/icon_footer_profil.svg';
import IconPlusBiruTabNav from '../../assets/icon/circle_plus_blue.svg';
import FooterHomeActive from '../../assets/icon/footer_home_active.png';
import FooterProfilInActive from '../../assets/icon/footer_profil_inactive.png';
import FooterProfilActive from '../../assets/icon/footer_profil_active.png';
import FooterMutasiInActive from '../../assets/icon/footer_mutasi_inactive.png';
import FooterFavoritInActive from '../../assets/icon/footer_favorit_inactive.png';
import MPIN from '../pages/mpin';
import Transfer from '../pages/transfer';
import BackgroundFooter from '../../assets/image/bgFooter.png'

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  const stateLoading = useSelector(state => state.global);
  return (
    <NavigationContainer>
      <Loading visible={stateLoading.isLoading} />
      <Stack.Navigator screenOptions={styles.ContainerStackNavigator}>
      <Stack.Screen
          name="SplitBill"
          component={SplitBill}
          options={styles.ContainerStackScreenBuatAkun}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={styles.ContainerStackScreenLogin}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={styles.ContainerStackScreenLogin}
        />
        <Stack.Screen
          name="Register"
          component={RegiterAccount}
          options={styles.ContainerStackScreenBuatAkun}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={styles.ContainerStackScreenBuatAkun}
        />
        <Stack.Screen
          name="MPIN"
          component={MPIN}
          options={styles.ContainerStackScreenBuatAkun}
        />
        <Stack.Screen
          name="Home"
          component={TabNav}
          options={styles.ContainerStackScreenBuatAkun}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={styles.ContainerStackScreenBuatAkun}
        />
        {/* <Stack.Screen
          name="SplitBill"
          component={SplitBill}
          options={styles.ContainerStackScreenBuatAkun}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

export const TabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
          width:'100%',
          elevation:0,
          backgroundColor:'transparent',
          position:'absolute',
          bottom:0,
          left:0,
          right:0,
          borderTopWidth:0,
        },
        // tabBarIcon: () => (
        //   <Image source={BackgroundFooter} style={{width:200, height:50}} />
        // ),
        headerShown: false,
        tabBarLabelStyle: {fontSize: 12, paddingBottom: 5},
        
      }}>
        
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? FooterHomeActive : IconHomeTabNav} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Mutasi"
        component={Mutasi}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={FooterMutasiInActive}
              style={{tintColor: focused ? '#2F82FF' : '#BCC8E7'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transaksi"
        component={Home}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
              
              onPress={() => alert('Belum bisa digunakan')}>
                <View style={styles.StyleIconPlusBlue}>
              <IconPlusBiruTabNav />
              </View>
            </TouchableOpacity>
          ),
          
        
        }}
      />
      <Tab.Screen
        name="Favorit"
        component={Favorit}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={FooterFavoritInActive}
              style={{tintColor: focused ? '#2F82FF' : '#BCC8E7'}}
            />
          ),
       
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? FooterProfilActive : FooterProfilInActive}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  ContainerStackNavigator: {
    headerStyle: {
      backgroundColor: '#F3F7FD',
      headerTitleAlign: 'center',
    },
  },
  ContainerStackScreenBuatAkun: {
    headerTitleAlign: 'center',
    headerBackVisible: false,
    headerShadowVisible: false,
    headerShown: false,
  },
  ContainerStackScreenLogin: {
    headerTitleAlign: 'center',
    headerShown: false,
  },
  StyleIconPlusBlue: {
    marginBottom: 30,
    borderRadius: 100,
    
   backgroundColor:'#2F82FF',
   width:60,
   height:60,
   justifyContent:'center',
   alignItems:'center',
  },
});
