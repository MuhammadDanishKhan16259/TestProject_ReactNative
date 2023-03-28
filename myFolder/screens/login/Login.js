// import React from 'react';
// import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
// import {Button} from '../../components/button/Button';
// // import {Input} from '../../components/input/Input';
// const Login = ({navigation}) => {
//   return (
//     <View>
//       <Text>Logins</Text>
//       <Text style={styles.hello}>For Loginsss</Text>
//       <View style={styles.middleview}>
//         <Button
//           press={() => navigation.navigate('Signup')}
//           width={'55%'}
//           height={55}
//           title={'Signup'}
//           size={22}
//           color={'white'}
//           back={'black'}
//         />
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   hello: {
//     fontSize: 30,
//     fontFamily: 'Roboto-Italic',
//   },
//   hello2: {
//     fontSize: 40,
//     fontFamily: 'WaterBrush-Regular',
//   },
//   hello3: {
//     fontSize: 40,
//     fontFamily: 'Roboto-BoldItalic',
//   },
//   middleview: {
//     marginTop: 50,
//     textAlign: 'center',
//   },
// });

// export default Login;

//Steal start
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '../../components/button/Button';
import {Input} from '../../components/input/Input';
// import {CheckBox} from 'react-native-elements';
// import CheckBox from '@react-native-community/checkbox';
const Login = ({navigation}) => {
  // const [isChecked, setChecked] = useState(false);
  const emailimage = require('../../../../Stealfriday/assets/images/emailicon.png');
  const lockimage = require('../../../../Stealfriday/assets/images/lockicon.png');
  return (
    <View style={{flex: 1, backgroundColor: 'F8F8F8'}}>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <View style={styles.topView}>
          <Image
            source={require('../../../assets/images/logo2.png')}
            style={styles.logoimage}
          />
          {/* Assets Backgroundimage image1 */}
          {/* <Image source={Images.background.back1} style={styles.logoimage} /> */}
          <Text style={styles.logotext}>Login</Text>
        </View>
        <View style={styles.middleView}>
          <Input
            image={emailimage}
            placeholder={'Email Address'}
            type={'email - address'}
            margin={25}
          />
          <Input
            image={lockimage}
            placeholder={'password'}
            secureTextEntry={true}
            pass={'true'}
            margin={25}
          />

          <View style={styles.check}>
            <View style={{flexDirection: 'row'}}>
              {/* <CheckBox
                style={{marginRight: 10, padding: -10}}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
              /> */}
              <Text style={{fontSize: 14}}>Remember me</Text>
            </View>
            <Text style={{fontSize: 12}}>Forget password?</Text>
          </View>
        </View>
        <View style={styles.bottomview}>
          <Button
            press={() => navigation.navigate('Signup')}
            width={'55%'}
            height={55}
            title={'Login'}
            size={22}
            color={'white'}
            back={'#a41716'}
          />
          {/* <Lottie
        style={{
          width: 50,
          height: 50,
        }}
        autoPlay
        source={require("../../../assets/lottie/lf30_editor_mlmghdi1.json")}
      /> */}
          <Text style={styles.or}>OR</Text>
          {/* Svgicon1 */}
          {/* <Svgicon1 /> */}

          <View style={styles.signup}>
            <Text style={{fontSize: 12}}>Don't have an account? </Text>
            <Text
              onPress={() => navigation.navigate('Signup')}
              style={{color: '#CD1C1B', fontWeight: '600'}}>
              Sign Up
            </Text>
          </View>

          <View style={styles.contact}>
            <Text style={{fontSize: 13}}>Having Trouble Logging In? </Text>
            <Text style={{color: '#CD1C1B', fontWeight: '600', fontSize: 13}}>
              Contact Us
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  topView: {
    alignItems: 'center',
    marginTop: 101,
    marginBottom: 30,
  },
  logoimage: {
    width: 200,
    height: 51,
  },
  logotext: {
    fontSize: 34,
    fontWeight: '900',
    marginTop: 40,
  },
  check: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  bottomview: {
    marginTop: 20,
  },
  or: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600%',
    opacity: 0.3,
    // marginTop: 20,
    marginVertical: 10,
  },
  signup: {
    flexDirection: 'row',
    alignSelf: 'center',
    // marginVertical: 10,
  },
  contact: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default Login;
