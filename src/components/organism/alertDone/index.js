//Import Library
import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, Image, TouchableOpacity } from "react-native";

//Import Assets
import ImageDone from '../../../../assets/image/image_alert_done.png'

const AlertDone =({visible,onPress, value})=>{
    return(
        <Modal visible={visible}  transparent={true} animationType={'fade'}>
         <View style={styles.Container}>
        
          <View style={styles.ContainerAlert}>
            <Text style={styles.Title}>Berhasil</Text>
            <View style={styles.ImageStyle}>
            <Image source={ImageDone} />
            </View>
            <View style={styles.TextStyle}>
            <Text style={styles.TextDeskripsi}>{value}</Text>
            </View>
<View style={styles.Button}>
    <TouchableOpacity onPress={onPress} style={styles.Tutup}><Text style={styles.TextTutup}>Tutup</Text></TouchableOpacity>
</View>

          </View>
          
          </View>
      </Modal>

    
    )
}
export default AlertDone;
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
        width:'70%',
        alignItems:'center',
        paddingTop:20
      },
    
      Tutup:{
        borderWidth:1,
        backgroundColor:'#2F82FF',
        width:145,
        height:40,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
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
      TextTutup:{

        color:'#DAE9FF',
        fontSize:14,
        fontWeight:'500'
      },
      
 
})