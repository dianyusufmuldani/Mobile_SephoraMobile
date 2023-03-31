//Import Library
import React from "react";
import { View, StyleSheet, Modal, Text, Image, TouchableOpacity } from "react-native";

//Import Assets
import ImageGagal from '../../../../assets/image/image_alert_gagal.png'

const AlertGagal =({visible, onPressCoba, onPressTutup, value})=>{
    return(
        <Modal visible={visible}  transparent={true} animationType={'fade'}>
         <View style={styles.Container}>
        
          <View style={styles.ContainerAlert}>
            <Text style={styles.Title}>Gagal!</Text>
            <View style={styles.ImageStyle}>
            <Image source={ImageGagal} />
            </View>
            <View style={styles.TextStyle}>
            <Text style={styles.TextDeskripsi}>{value}</Text>
            </View>
<View style={styles.Button}>
    <TouchableOpacity onPress={onPressTutup} style={styles.Tutup}><Text style={styles.TextTutup}>Tutup</Text></TouchableOpacity>
    <TouchableOpacity onPress={onPressCoba} style={styles.CobaLagi}><Text style={styles.TextCoba}>Coba Lagi</Text></TouchableOpacity>
</View>

          </View>
          
          </View>
      </Modal>

    
    )
}
export default AlertGagal;
const styles=StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      ContainerAlert:{
        backgroundColor:'#FFFFFF',
        width:350,
        height:350,
        borderRadius:15,
        alignItems:'center'
      },
      Title:{
        fontSize:18,
        fontWeight:'600',
        textAlign:'center',
        paddingTop:18,
        color:'#2B2F3C'
      },
      ImageStyle:{
        height:81, 
        width:81,
        width:'100%',
        alignItems:'center',
        marginTop:28
      },
      TextStyle:{
        width:'90%',
        alignItems:'center',
        paddingTop:20
      },
      Tutup:{
        borderWidth:1,
        borderColor:'#2F82FF',
        width:145,
        height:40,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:5
      },
      CobaLagi:{
        borderWidth:1,
        backgroundColor:'#2F82FF',
        width:145,
        height:40,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:5
      },
      TextDeskripsi:{
        textAlign:'center',
        color:'#2B2F3C',
        fontSize:14,
        fontWeight:'400'
      },
      Button:{
        flexDirection:'row',
        marginTop:35
      },
      TextCoba:{

        color:'#DAE9FF',
        fontSize:14,
        fontWeight:'500'
      },
      TextTutup:{

        color:'#2F82FF',
        fontSize:14,
        fontWeight:'500'
      }
 
})