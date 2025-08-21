import { View, Text, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import OTPTextInput from 'react-native-otp-textinput';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ButtonComp from '@/src/components/atoms/ButtonComp';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/src/redux/productSlice'; 

const VerifyOtp = () => {
  const [otp, setOTP] = useState('');
  const dispatch = useDispatch();

  const onPress = () => {
    if (otp.length === 6) {
      const fake_token = 'otpToken-' + otp;
      dispatch(addProduct(fake_token));
      router.replace('/(main)');
    } else {
      Alert.alert('Login failed!', 'Please enter the 6-digit OTP.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <AntDesign name='arrowleft' style={styles.backbtn} onPress={() => router.back()} />
          <Text style={styles.header_title}>Enter OTP Code</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.body_number_verification_text}>Code has been sent to +91 92******45</Text>
          <Text style={styles.otp_send_text}>
            Resend Code in <Text style={styles.counter_text}>56</Text> s
          </Text>
          <OTPTextInput
            handleTextChange={(txt: string) => setOTP(txt)}
            inputCount={6}
            tintColor="#7457F0"
            offTintColor="#ccc"
            containerStyle={styles.otp_container}
            textInputStyle={styles.inputStyle}
          />
        </View>

        <View style={styles.footer}>
          <ButtonComp title='Verify OTP' onPress={onPress} style={styles.verifyBtn} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(20),
    paddingTop: verticalScale(30),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
  backbtn: {
    fontSize: moderateScale(24),
    color: 'black',
    fontWeight: 'bold',
  },
  header_title: {
    fontSize: moderateScale(20),
    color: 'black',
    fontWeight: 'bold',
  },
  body: {
    alignItems: 'center',
    gap: verticalScale(25),
  },
  body_number_verification_text: {
    fontSize: moderateScale(16),
  },
  otp_send_text: {
    fontSize: moderateScale(16),
    fontWeight: '400',
  },
  counter_text: {
    color: '#7457F0',
  },
  otp_container: {
    gap: scale(5),
  },
  inputStyle: {
    borderColor: 'black',
    borderRadius: moderateScale(15),
  },
  footer: {},
  verifyBtn: {
    borderRadius: moderateScale(30),
  },
});
