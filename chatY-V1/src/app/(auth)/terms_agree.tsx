import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import imagePath from '@/src/constants/imagePath'
import { router } from 'expo-router'
import ButtonComp from '@/src/components/atoms/ButtonComp'

const TermsAgree = () => {

const onAgree = ()=>{
  router.replace('/login')
}

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome_text}>Welcome to ChatY</Text>
        </View>
        <View style={styles.body_img}>
          <Image source={imagePath.terms_img1} style={styles.terms_img}/>
        </View>
        <View style={styles.body_other}>
          <Text style={styles.sub_text}>Read our <Text style={styles.link_text}> Privacy Policy</Text>. Tap "Agree and continue" to accept the <Text style={styles.link_text}> Terms of Service</Text>.</Text>
          <View style={{ width:moderateScale(300) }}>
            <ButtonComp title='Agree and continue' onPress={onAgree}/>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.from_text}>From</Text>
          <Text style={styles.developer_text}>Bhavishya</Text>
        </View>
    </SafeAreaView>
  )
}

export default TermsAgree

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(44),
    paddingHorizontal:scale(30),
    backgroundColor: 'white',
  },
  header: {

  },
  welcome_text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: verticalScale(10),
  },
  body_img: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  terms_img: {
    height: moderateScale(290),
    width: moderateScale(290),
    borderRadius: moderateScale(10),
  },
  body_other: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  sub_text: {
    textAlign: 'center',
    fontSize: moderateScale(14),
    marginBottom: verticalScale(10),
  },
  press: {
    backgroundColor: '#7457F0',
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(8),
    marginTop: verticalScale(10),
  },
  press_text: {
    color: 'white',
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
  },
  from_text: {
    fontSize: moderateScale(12),
    color: '#867373',
  },
  developer_text: {
    fontSize: moderateScale(15),
    color: '#000000',
  },
  link_text:{
    color:'#0C42CC',
  }
});
