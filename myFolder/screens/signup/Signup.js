import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Button} from '../../components/button/Button';
const Signup = ({navigation}) => {
  return (
    <View>
      <Text>SignUp</Text>
      <Text style={styles.hello}>SignUP</Text>
      {/* <Text style={styles.hello2}>Tab Navigation</Text>
      <Text style={styles.hello3}>Hello worlds Roboto-BoldItalic</Text> */}
      <View style={styles.middleview}>
        <Button
          press={() => navigation.navigate('OtpAuth')}
          width={'55%'}
          height={55}
          title={'OtpAuth'}
          size={22}
          color={'white'}
          back={'blue'}
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
  hello2: {
    fontSize: 40,
    fontFamily: 'WaterBrush-Regular',
  },
  hello3: {
    fontSize: 40,
    fontFamily: 'Roboto-BoldItalic',
  },
  middleview: {
    marginTop: 50,
    textAlign: 'center',
  },
});

export default Signup;
