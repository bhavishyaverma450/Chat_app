import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Chats from '@/src/components/molecules/chat'
import Calls from '@/src/components/molecules/calls'
import Status from '@/src/components/molecules/status'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import { StatusBar } from 'react-native';



const index = () => {

  const [currentPage , setCurrentPage] = useState('Chats')
  const ActivePage =  ()=>{
    switch(currentPage){
      case 'Chat':
        return < Chats />;
      case 'Status':
        return <Status />;
      case 'Calls':
        return <Calls />
      default:
        return <Chats />
    }
  }

  const header = ()=>{
    return (
    <View style={styles.header_style}>
      <Text style={styles.app_text}>ChatY</Text>
      <View style={styles.icon_container}>
        <AntDesign name='search1' style={styles.header_icon}/>
        <Entypo name='dots-three-vertical' style={styles.header_icon}/>
      </View>
    </View>)
  }
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar backgroundColor="#7457F0"  />
      {header()}
      <View style={styles.topBarContainer}>
        {['Chat','Status','Calls'].map((item,index)=>{
            return<TouchableOpacity 
              key={index} 
              onPress={() =>setCurrentPage(item)}
              style={[styles.topBarBtn, item == currentPage && {borderColor:'white'},]}>
              <Text style={styles.topBarText}>{item}</Text>
            </TouchableOpacity>
          })
        }
      </View>
      {ActivePage()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  topBarContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: scale(12),
    backgroundColor:'#7457F0',
    gap: scale(10),
  },
  header_style:{
    backgroundColor:'#7457F0',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal: scale(15),
    paddingBottom: verticalScale(17),
    paddingTop: verticalScale(10),
  },
  header_icon:{
    fontSize:moderateScale(18),
    color:'white',
  },
  icon_container:{
    flexDirection:'row',
    gap: scale(10),
  },
  topBarBtn:{
    flex:1,
    alignItems:'center',
    borderBottomWidth: 3,
    borderColor:'#7457F0',
    paddingBottom: verticalScale(10),
  },
  topBarText:{
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color:'white',
  },
  app_text:{
    fontSize:moderateScale(20),
    fontWeight: 'bold',
    color: 'white',
  },
})

export default index