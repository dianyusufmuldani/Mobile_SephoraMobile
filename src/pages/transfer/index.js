import React from "react";
import { View, StyleSheet, Text } from "react-native";
import BackMenu from "../../components/moleculs/backMenu";
import IconText from "../../components/moleculs/icontext";
import IconUser from '../../../assets/icon/user_crown.svg'
import IconAntarSephora from '../../../assets/icon/icon_antarsephora.svg'
import IconAntarBank from '../../../assets/icon/icon_antarbank.svg'
import IconValutaAsing from '../../../assets/icon/icon_valutaasing.svg'
import IconVirtualAcc from '../../../assets/icon/icon_virtualacc.svg'


const Transfer=({navigation})=>{
    const BackNav = () => {
        navigation.goBack();
      };
    return(
        <View style={styles.Container}>
            <BackMenu onPress={BackNav} hideShowStar={'true'} />
      <View style={styles.HeaderStyle}>
        <Text style={styles.FontStyleHeader}>Transfer</Text>
      </View>
      <View style={styles.ContainerBody}>
      <View style={styles.ContainerTypeTransfer}>
        <Text style={styles.TextTypeTransfer}>Pilih Tipe Transfer</Text>
        <View style={styles.StyleIconTipeTransfer}>
        <IconText value={'Rekening Sendiri'} iconsvg={<IconUser width={25} height={25}/>}/>
        <IconText value={'Antar Sephora'} iconsvg={<IconAntarSephora width={25} height={25}/>}/>
        <IconText value={'Antar Bank'} iconsvg={<IconAntarBank width={25} height={25}/>}/>
        </View>
        <View style={styles.StyleIconTipeTransferPage2}>
        <IconText value={'Rekening Sendiri'} iconsvg={<IconValutaAsing width={25} height={25}/>}/>
        <IconText value={'Antar Sephora'} iconsvg={<IconVirtualAcc width={25} height={25}/>}/>
        
        </View>
      </View>
      </View>
        </View>
    )
}
export default Transfer;
const styles=StyleSheet.create({
    Container: {
        backgroundColor: '#F3F7FD',
        flex: 1,
      },
      ContainerBody:{
        alignItems:'center',
        flex:1,
      },
      HeaderStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 45,
      },
      FontStyleHeader: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      ContainerTypeTransfer:{
        width:'90%',
        height:230,
        backgroundColor:'#FFFFFF',
        borderRadius:15,
        elevation:3,
        marginTop:34
      },
      TextTypeTransfer:{
        paddingHorizontal:20,
        paddingVertical:20
      },
      StyleIconTipeTransfer:{
        flexDirection:'row',
        marginHorizontal:23,
        justifyContent:'space-evenly'
      },
      StyleIconTipeTransferPage2:{
        flexDirection:'row',
        marginHorizontal:23,
        justifyContent:'space-evenly',
        width:'60%'
      }
})