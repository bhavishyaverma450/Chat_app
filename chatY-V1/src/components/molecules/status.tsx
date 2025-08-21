import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageCard from './messageCard'
import imagePath from '@/src/constants/imagePath'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/Ionicons'


const status = () => {

  const data =[{
    image:imagePath.logo,
    name:'Iccha Verma',
    message:'10 minutes ago',
  },
  {
    image:imagePath.logo,
    name:'Rajat Verma',
    message:'Today, 7:29 am',
  },
  {
    image:imagePath.logo,
    name:'Nyasa Vishwas',
    message:'Yesterday, 11:11 pm',
  },]

  return (
    <View style={{flex:1,gap:moderateScale(10)}}>
      <MessageCard 
          name={'My Contact'} 
          message={'Tap to add status update'} 
          image={imagePath.terms_img1} 
        LogoComponent={() =>(
          <View style={styles.logo_component_container}>
            <Ionicons name='add-outline' size={moderateScale(20)} color='black'/>
          </View>
        )}
      />
      <Text style={styles.body_text}>Recent updates</Text>
      <FlatList data={data} renderItem={({item}) => {
        return (
          <MessageCard 
            name={item?.name} 
            message={item?.message} 
            image={item?.image}
          />
        );
      }}
      />
      {/* <Text style={styles.body_text}>Viewed Updates</Text> */}
    </View>
  )
}

export default status

const styles = StyleSheet.create({
  logo_component_container:{
    height:moderateScale(25),
    width:moderateScale(25),
    borderRadius:moderateScale(50),
    backgroundColor:'#7457F0',
    position:'absolute',
    bottom:verticalScale(-3),
    right:scale(-3),
    borderWidth:2,
    borderColor:'black',
    
  },
  body_text:{
    color:'#889095',
    fontWeight:'500',
    paddingStart:moderateScale(15),

  },
})