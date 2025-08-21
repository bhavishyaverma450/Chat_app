import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import imagePath from '@/src/constants/imagePath'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const MessageCard = ({ name, message, time, messageCount, image, LogoComponent,rightIcon, messageLeftIcon }: any) => {
  const showRightContainer = time || messageCount > 0;

  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.leftContainer}>
        <View>
          <Image source={image} style={styles.image} />
          {LogoComponent && <LogoComponent />}
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.flexRow}>
            {messageLeftIcon}
            <Text style={styles.message}>{message}</Text>
          </View>
        </View>
      </View>

      {showRightContainer || (
        <View style={styles.rightContainer}>
            {time && <Text style={styles.time}>{time}</Text>}
            {messageCount > 0 && (
            <View style={styles.messageCountContainer}>
                <Text style={styles.messageCount}>{messageCount}</Text>
            </View>
    )}
    {rightIcon && rightIcon}
  </View>
)}
    </TouchableOpacity>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(6),
  },
  image: {
    width: moderateScale(53),
    height: moderateScale(53),
    borderRadius: moderateScale(53),
  },
  name: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: 'black',
  },
  message: {
    fontSize: moderateScale(13),
    color: '#889095',
    fontWeight: '500',
  },
  time: {
    color: '#889095',
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  },
  messageCountContainer: {
    height: moderateScale(22),
    width: moderateScale(22),
    backgroundColor: '#7457F0',
    borderRadius: moderateScale(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageCount: {
    color: 'white',
    fontSize: moderateScale(12),
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
  rightContainer: {
    alignItems: 'flex-end',
    gap: verticalScale(7),
  },
  flexRow:{
    flexDirection:'row',
    alignItems:'center',
    gap: scale(7),
  }
});
