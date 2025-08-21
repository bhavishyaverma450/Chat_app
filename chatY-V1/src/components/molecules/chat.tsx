import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageCard from './messageCard'
import imagePath from '@/src/constants/imagePath'

const chat = () => {

  const data =[{
    image:imagePath.logo,
    name:'Iccha Verma',
    message:'jao app',
    time:'5:27 am',
    messageCount:5
  },
  {
    image:imagePath.logo,
    name:'Rajat Verma',
    message:'kahreedh le',
    time:'5:27 am',
    messageCount:0
  },
  {
    image:imagePath.logo,
    name:'Nyasa Vishwas',
    message:'yes, i have done it',
    time:'5:27 am',
    messageCount:1
  },]

  return (
    <View style={{flex:1}}>
      <FlatList data={data} renderItem={({item}) => {
        return (
          <MessageCard 
            name={item?.name} 
            message={item?.message} 
            image={item?.image} 
            time={item?.time}
            messageCount={item?.messageCount}
          />
        );
      }}
    />
    </View>
  )
}

export default chat

const styles = StyleSheet.create({})