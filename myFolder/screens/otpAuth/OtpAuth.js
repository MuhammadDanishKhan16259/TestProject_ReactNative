import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import {Button} from '../../components/button/Button';
// import OTP from 'react-native-otp-form';
// import OtpInputs from 'react-native-otp-inputs';
const OtpAuth = ({navigation}) => {
  const Data = [
    {
      id: 1,
    },
    {id: 2},
    {id: 3},
    {id: 4},
  ];
  return (
    <View>
      <Text style={styles.hello}>OTP</Text>
      <View style={styles.textView}>
        <Text style={styles.heading}>Enter Your Phone</Text>
        <Text style={styles.txt}>
          You will Recieve a 4 digit code for phone number Verification
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={{
            backgroundColor: 'white',
            width: 50,
            // flexDirection: 'row',
            // color: 'white',
            padding: 2,
            margin: 10,
            borderRadius: 7,
            height: 45,
            fontSize: 22,
          }}
        />
        <TextInput
          style={{
            backgroundColor: 'white',
            width: 50,
            // flexDirection: 'row',
            // color: 'white',
            padding: 2,
            margin: 10,
            borderRadius: 7,
            height: 45,
            fontSize: 22,
          }}
        />
        <TextInput
          style={{
            backgroundColor: 'white',
            width: 50,
            // flexDirection: 'row',
            // color: 'white',
            padding: 2,
            margin: 10,
            borderRadius: 7,
            height: 45,
            fontSize: 22,
          }}
        />
        <TextInput
          style={{
            backgroundColor: 'white',
            width: 50,
            // flexDirection: 'row',
            // color: 'white',
            padding: 2,
            margin: 10,
            borderRadius: 7,
            height: 45,
            fontSize: 22,
          }}
        />
      </View>

      <View style={styles.middleview}>
        <Button
          press={() => navigation.navigate('Login')}
          width={'55%'}
          height={55}
          title={'Login'}
          size={22}
          color={'white'}
          back={'red'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  hello: {
    fontSize: 30,
    fontFamily: 'Roboto-Italic',
  },
  middleview: {
    marginTop: 90,
    textAlign: 'center',
  },
  heading: {
    // color: 'white',
    fontSize: 30,
    fontWeight: '500',
  },
  textView: {
    marginTop: 10,
  },
  txt: {
    // color: 'white',
    fontSize: 17,
  },
  middleView: {
    backgroundColor: 'white',
    height: '25%',
    width: '100%',
    borderRadius: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  middleView1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
  },
  flag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagtext: {
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: '500%',
  },
  border: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 12,
  },
  middleView2: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    width: '90%',
    fontSize: 17,
    paddingLeft: 10,
  },
  middleView2txt: {
    fontSize: 17,
    paddingLeft: 5,
  },
  rightborder: {
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 10,
    height: 20,
  },
});
export default OtpAuth;
