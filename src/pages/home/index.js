//Import Library
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler
} from 'react-native';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {getLogin} from '../../services/redux/reducer/homeSlice';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Import Assets
import Profil from '../../../assets/image/profil-1.png';
import ImageAssets from '../../../src/components/atoms/image';
import Notif from '../../../assets/icon/notif.svg';
import RekeningCard from '../../../assets/image/rekeningCard.png';
import IconMoney from '../../../assets/icon/money_swipe.svg';
import IconWallet from '../../../assets/icon/wallet+.svg';
import IconCart from '../../../assets/icon/cart.svg';
import IconMenu from '../../../assets/icon/menu.svg';
import TextApp from '../../components/atoms/Text/textApp';
import TextSubTitle from '../../components/atoms/Text/textSubTitle';
import ButtonClick from '../../components/atoms/Button';
import IconCirclePlus from '../../../assets/icon/circle_plus.svg';
import IconCircleMandiri from '../../../assets/icon/circle_mandiri.svg';
import IconCircleBri from '../../../assets/icon/circle_bri.svg';
import IconCircleJenius from '../../../assets/icon/circle_jenius.svg';
import IconTopUp from '../../../assets/icon/icon_topup.svg';
import IconTransferMasuk from '../../../assets/icon/icon_transfermasuk.svg';
import IconPembelian from '../../../assets/icon/icon_pembelian.svg';
import TextFooter from '../../components/atoms/Text/textFooter';
import BackgroundFooterHome from '../../../assets/icon/background_footer_home.svg';
import IconFooterHome from '../../../assets/icon/icon_footer_home.svg';
import IconFooterMutas from '../../../assets/icon/icon_footer_mutasi.svg';
import IconFooterFavorit from '../../../assets/icon/icon_footer_favorit.svg';
import IconFooterProfil from '../../../assets/icon/icon_footer_profil.svg';
import CirclePlusBlue from '../../../assets/icon/circle_plus_blue.svg';
import Login from '../login';
import OnBoarding from '../onBoarding';
import BackgroundFooter from '../../../assets/image/bgFooter.png'

const Home = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [productName, setProductName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [balance, setBalance] = useState(null);

  const dispatch = useDispatch();
  const {stateLogin, stateHome} = useSelector(
    ({login, home}) => ({
      stateLogin: login,
      stateHome: home,
    }),
    shallowEqual,
  );

  useEffect(() => {
    console.log('stateHome', stateHome);
    const request = {};
    dispatch(getLogin(request));
    setUsername(stateLogin.data.nameAlias);
    setEmail(stateLogin.data.email);
  }, []);
  if (stateHome.data != null || stateHome.data != undefined) {
    useEffect(() => {
      console.log('isi state home Setelah ke triger : ', stateHome);
      setProductName(stateHome.data.productName);
      setAccountNumber(
        stateHome.data.accountNumber,
        // .split('')
        // .reverse()
        // .join('')
        // .match(/.{0,4}/g)
        // .join(' ')
        // .split('')
        // .reverse()
        // .join(''),
      );
      setBalance(stateHome.data.balance);
    }, [stateHome]);
  }
  const handleOrderMakanan = () => {
    navigation.navigate('OTP', {
      fromScreen: 'Home',
    });
  };
  

  return (
    <>
    <ScrollView style={styles.Container} >
      <View style={styles.ContainerHeader}>
        <View style={styles.ContainerProfilName}>
          <View style={styles.ContainerProfil}>
            <ImageAssets source={Profil} />
          </View>
          <View>
            <Text style={styles.NameStyle}>Hi, {username}</Text>
            <Text style={styles.EmailStyle}>Email: {email}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View>
            <Notif />
            <View style={styles.NotifNew} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.StyleImageRekening}>
      <Image source={RekeningCard} style={styles.RekeningCardStyle} />
      </View>
      <View style={styles.ContainerRekening}>
        <View style={styles.TabunganHarian}>
          <Text style={styles.FontRekening}>{productName}</Text>
          <Text style={styles.FontRekening}>{accountNumber}</Text>
        </View>
        <Text style={styles.FontRekening}>Saldo Rekening Utama</Text>
        <Text style={styles.SaldoRekeningStyle}>Rp. {balance}</Text>
        <View style={styles.ListMenu}>
          <TouchableOpacity style={styles.ContainerMenu}>
            <IconMoney
              width={25}
              height={25}
              onPress={() => navigation.navigate('Transfer')}
            />
            <Text style={styles.FontIcon}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ContainerMenu}>
            <IconWallet width={25} height={25} />
            <Text style={styles.FontIcon}>E-Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ContainerMenu} onPress={handleOrderMakanan}>
            <IconCart width={25} height={25} />
            <Text style={styles.FontIcon}>Pembelian</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ContainerMenu}>
            <IconMenu width={25} height={25} />
            <Text style={styles.FontIcon}>Lainnya</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.MenuDaftarFavorit}>
        <TextSubTitle value={'Daftar Favorit'} />
        <ButtonClick title={'Lihat Semua'} />
      </View>

      <ScrollView
        nestedScrollEnabled={true}
        horizontal
        style={styles.ContainerListRekening}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.ContainerTargetRekening}>
          <View style={styles.CircleRekeningPlus}>
            <IconCirclePlus width={20} height={20} />
          </View>

          <TextApp teks={'Tambah'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContainerTargetRekening}>
          <View style={styles.CircleRekening}>
            <IconCircleMandiri width={40} height={40} />
          </View>
          <TextApp teks={'Ahmad Wa...'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContainerTargetRekening}>
          <View style={styles.CircleRekening}>
            <IconCircleBri width={40} height={40} />
          </View>
          <TextApp teks={'Wahyu Ha...'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContainerTargetRekening}>
          <View>
            <View style={styles.CircleRekening}>
              <IconCircleJenius width={40} height={40} />
            </View>
          </View>
          <TextApp teks={'Gus Azmy...'} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.ContainerTargetRekening}>
        <View style={styles.CircleRekening}>
          <IconCircleJenius width={40} height={40} />
          </View>
          <TextApp teks={'Percobaan...'} />
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.MenuDaftarFavorit}>
        <TextSubTitle value={'Riwayat Terakhir'} />
        <ButtonClick title={'Lihat Semua'} />
      </View>
      <ScrollView nestedScrollEnabled={true} style={styles.CardRiwayatTerakhir}>
        <View style={styles.CardTransaksi}>
          <IconTopUp width={32} height={32} />
          <View>
            <TextApp teks={'Top Up E-Wallet'} />
            <TextFooter value={'Gopay - 08123123'} />
          </View>
          <Text style={styles.FontMinusTransaksi}>Rp.14.000.000</Text>
        </View>
        <View style={styles.CardTransaksi}>
          <IconTransferMasuk width={32} height={32} />
          <View>
            <TextApp teks={'Transfer Masuk'} />
            <TextFooter value={'BRI - 3453 3434 3435'} />
          </View>
          <Text style={styles.FontPlusTransaksi}>Rp.130.000.000</Text>
        </View>
        <View style={styles.CardTransaksi}>
          <IconPembelian width={32} height={32} />
          <View>
            <TextApp teks={'Pembelian'} />
            <TextFooter value={'Telkomsel - 08123123123'} />
          </View>
          <Text style={styles.FontMinusTransaksi}>Rp.14.000.000</Text>
        </View>
      </ScrollView>
    
      {/* <TouchableOpacity onPress={handleOrderMakanan}>
        <View style={styles.OrderMakanan}>
          <Text style={{color: 'white'}}>Order Makanan Sekarang!</Text>
        </View>
      </TouchableOpacity> */}
    </ScrollView>
    <View style={styles.StyleBgFooter}>
        <Image source={BackgroundFooter} />
        </View>
        </>
        
  );
};
export default Home;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F3F7FD',
  },
  ContainerHeader: {
    flexDirection: 'row',
    marginVertical: 15,
    height: 50,
    width: '95%',
    justifyContent: 'space-between',
  },
  NameStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2B2F3C',
  },
  EmailStyle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2F82FF',
  },
  ContainerProfil: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 12,
    elevation: 5,
  },
  NotifNew: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#DC241F',
    position: 'absolute',
    right: 2,
  },
  ContainerProfilName: {
    flexDirection: 'row',
  },
  RekeningCardStyle: {
    width: '90%',
    borderRadius: 15,
    // position: 'absolute',
    top: 80,
    marginHorizontal: 13,
   
  },
  StyleImageRekening:{
    position:'absolute',
    width:'100%',
    borderRadius:15,
    height:200
  },
  FontRekening: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  ContainerRekening: {
    marginTop: 10,
    marginLeft: 80,
    marginBottom: 100,
  },
  TabunganHarian: {
    marginBottom: 30,
  },
  SaldoRekeningStyle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  OrderMakanan: {
    marginTop: 10,
    marginLeft: 20,
    backgroundColor: '#2F82FF',
    borderWidth: 1,
    width: 200,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListMenu: {
    backgroundColor: '#FFFFFF',
    width: 310,
    height: 78,
    borderRadius: 15,
    position: 'absolute',
    left: -45,
    bottom: -90,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    elevation: 5,
  },
  ContainerMenu: {
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FontIcon: {
    fontSize: 11,
    fontWeight: '400',
  },
  MenuDaftarFavorit: {
    marginTop: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  ContainerListRekening: {
    flexDirection: 'row',
    marginTop: 0,
  },
  CardRiwayatTerakhir: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    width: 335,
    height: 180,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 5,
    marginBottom:10
  },
  CardTransaksi: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  FontMinusTransaksi: {
    fontSize: 14,
    fontWeight: '500',
    color: '#E32D2D',
  },
  FontPlusTransaksi: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6DD13E',
  },
  FooterHome: {
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
    width: '100%',
  },
  CircleBlueStyle: {
    position: 'absolute',
    top: -25,

    left: 165,
  },
  ContainerTargetRekening: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  CircleRekening: {
    backgroundColor: '#FFFFFF',
    width: 60,
    height: 60,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    elevation:5
  },
  CircleRekeningPlus: {
    backgroundColor: '#FFFFFF',
    width: 60,
    height: 60,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#2F82FF',
    borderStyle: 'dashed',
    marginBottom: 8,
  },
  StyleBgFooter:{
    borderWidth:0,
    backgroundColor:'transparent',
    position:'absolute',
    bottom:0,
    alignSelf:'center',
    height:80,
    elevation:0,
    
  }
});
