import imagePath from '@/src/constants/imagePath'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MessageCard from './messageCard'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { moderateScale } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/Ionicons'
import Feather from '@expo/vector-icons/Feather'

const calls = () => {

  const data =[{
    image:imagePath.logo,
    name:'Iccha Verma',
    message:'today, 2:00 pm',
    rightIcon:<Ionicons name='call' style={styles.call_icon}/>,
    messageLeftIcon:<Feather name='arrow-up-right' style={styles.messge_right_icon}/>,
  },
  {
    image:imagePath.logo,
    name:'Rajat Verma',
    message:'26 July, 11:06 pm',
    rightIcon:<FontAwesome name='video-camera' style={styles.call_icon}/>,
    messageLeftIcon:<Feather name='arrow-down-left' style={[styles.messge_right_icon,{color:'red'}]}/>,
  },
  {
    image:imagePath.logo,
    name:'Nyasa Vishwas',
    message:'11 July, 11:39 am',
    rightIcon:<Ionicons name='call' style={styles.call_icon}/>,
    messageLeftIcon:<Feather name='arrow-up-right' style={styles.messge_right_icon}/>,
  },]

  return (
    <View style={{flex:1}}>
      <FlatList data={data} renderItem={({item}) => {
        return (
          <MessageCard 
            name={item?.name} 
            message={item?.message} 
            image={item?.image}
            rightIcon={item?.rightIcon}
            messageLeftIcon={item?.messageLeftIcon}
          />
        );
      }}
    />
    </View>
  )
}

export default calls

const styles = StyleSheet.create({
    call_icon:{
        color:'#7457F0',
        fontSize:moderateScale(20),
    },
    messge_right_icon:{
        fontSize:moderateScale(15),
        color:'#7457F0'
    }
})