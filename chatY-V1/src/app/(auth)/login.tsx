import { StyleSheet, View, Text, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ButtonComp from '@/src/components/atoms/ButtonComp'
import { router } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal'

const Login = () => {
  const [visible, setVisible] = useState(false)
  const [countryName, setCountryName] = useState('India')
  const [countryCode, setCountryCode] = useState('+91')
  const [selectedCountryCode, setSelectedCountryCode] = useState<CountryCode>('IN')

  const onNext = () => {
    router.push('/(auth)/verify_otp')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}></Text>
          <Text style={styles.description}>
            ChatY will need to verify your phone number.
            <Text style={styles.link_desrciption}> What's my number?</Text>
          </Text>
        </View>
        <View style={styles.input_main_conatiner}>
          <TouchableOpacity style={styles.dropdown_container} onPress={() => setVisible(true)}>
            <View />
            <Text style={styles.dropdown_title}>{countryName}</Text>
            <AntDesign name="caretdown" size={moderateScale(14)} color='black' />
          </TouchableOpacity>
          <View style={styles.horizontal_line} />
          <View style={styles.input_container}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>{countryCode}</Text>
              <View style={styles.horizontal_line} />
            </View>
            <View style={{ gap: verticalScale(10), flex: 1 }}>
              <TextInput style={styles.input} placeholder='Enter Your Phone Number' keyboardType='phone-pad' />
              <View style={styles.horizontal_line} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp title='Next' style={{ paddingHorizontal: scale(29) }} onPress={onNext} />
      </View>

      {Platform.OS !== 'web' && (
        <CountryPicker
          countryCode={selectedCountryCode}
          withFilter
          withFlag
          withCountryNameButton
          withCallingCode
          withModal
          onSelect={(e: any) => {
            setCountryCode(`+${e.callingCode[0]}`)
            setCountryName(e.name)
            setSelectedCountryCode(e.cca2)
          }}
          onClose={() => setVisible(false)}
          visible={visible}
        />
      )}
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Login


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    paddingVertical:verticalScale(50),
    alignItems:'center',
    paddingHorizontal:scale(40),
  },
  heading_container:{
    gap: verticalScale(20),
  },
  input_main_conatiner:{

  },
  header:{
    gap:verticalScale(50),
  },
  footer:{
    
  },
  heading:{
    fontSize: moderateScale(20),
    color:'black',
    fontWeight: 'bold',
    textAlign:'center',
  },
  description:{
    textAlign:'center',
    fontSize:moderateScale(13),
    color:'black',
    fontWeight:'400',
  },
  link_desrciption:{
    color:'#002AC0'
  },
  horizontal_line:{
    width:'100%',
    height:verticalScale(1),
    backgroundColor:'#7457F0'
  },
  dropdown_container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  dropdown_title:{
    fontSize:moderateScale(16),
    fontWeight:'500',
    color:'black',
  },
  input_container:{
    paddingVertical: verticalScale(12),
    flexDirection:'row',
    alignItems:'center',
    gap: scale(20),
  },
  country_code:{
    gap: verticalScale(10),
  },
  country_code_text:{
    fontSize:moderateScale(16),
    fontWeight:'500',
    color:'black',
  },
  input:{
    fontSize:moderateScale(16),
    fontWeight:'500',
    color:'black',
  }
})