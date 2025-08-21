import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '@/src/constants/imagePath'
import {scale , verticalScale, moderateScale } from 'react-native-size-matters'
import { router } from 'expo-router'


const index = () => {
  const [isLoading , setIsLoading ] = useState(false);

  let navigate_to_welcome = () => {
    router.replace('/(auth)/terms_agree')
  };
  let loading_timeout = () => {
    setIsLoading(true);
    setTimeout(navigate_to_welcome, 3000);
  };
  useEffect(()=> {
    const timeout = setTimeout(loading_timeout,2000);

    return () => {
      clearTimeout(timeout);
    }
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image source={imagePath.logo} style={styles.logo_style} resizeMode='contain'/>
        <Text style={styles.title}>ChatY</Text>
      </View>
      <View style={styles.footer}>
        {
          isLoading ? (
            <>
              <ActivityIndicator size={moderateScale(48)} color={"#7457F0"}/>
              <Text style={styles.loading_text}>Loading...</Text>
            </>
          ) : (
            <>
              <Text style={styles.from_text}>From</Text>
              <Text style={styles.developer_text}>Bhavishya</Text>
            </>
        )}
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:verticalScale(50),
    backgroundColor:'white',
  },
  header:{},
  body:{
    alignItems:'center',
  },
  footer:{
    alignItems:'center',
    height:verticalScale(80),
    justifyContent:'flex-end'
  },
  logo_style:{
    height:moderateScale(70),
    width:moderateScale(70),
    borderRadius:moderateScale(10),
  },
  from_text:{
    fontSize:moderateScale(12),
    color:'#867373'
  },
  developer_text:{
    fontSize:15,
    color:'#000000'
  },
  title:{
    fontSize:moderateScale(35),
    color:'#000000',
    fontWeight:'bold'
  },
  loading_text:{
    fontSize: moderateScale(20),
    color:"#7457F0",
    fontWeight: 'bold',
    marginTop:verticalScale(10),
  },
})