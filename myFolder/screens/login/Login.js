import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Button} from '../../components/button/Button';
// import {Input} from '../../components/input/Input';
const Login = ({navigation}) => {
  return (
    <View>
      <Text>Logins</Text>
      <Text style={styles.hello}>For Loginss</Text>
      <View style={styles.middleview}>
        <Button
          press={() => navigation.navigate('Signup')}
          width={'55%'}
          height={55}
          title={'Signup'}
          size={22}
          color={'white'}
          back={'black'}
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

export default Login;
