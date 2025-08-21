import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ButtonComp = ({ title ,onPress, style, ...props}:any) => {
  return (
    <TouchableOpacity 
      style={[styles.btncontainer,style]} 
      activeOpacity={0.8} 
      onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp


const styles = StyleSheet.create({
    btncontainer:{
        backgroundColor:'#7457F0',
        width:'100%',
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(10),
        borderRadius: moderateScale(4),
        alignItems: 'center',
    },
    btn_text:{
        fontSize:moderateScale(14),
        color:'white',
    }
})