import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Entypo,
} from 'react-native';
// import Entypo from '@expo/vector-icons/Entypo';

const Input = ({
  placeholder,
  type,
  secureTextEntry,
  image,
  pass,
  margin,
  width,
}) => {
  const [eye, setEye] = useState('false');
  return (
    <View style={[styles.inputview, {marginTop: margin}]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={image} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={type}
          // secureTextEntry={secureTextEntry}
          secureTextEntry={!eye}
        />
      </View>

      {/* <TouchableOpacity onPress={() => setEye(!eye)}>
        {pass ? (
          <View style={{right: 4}}>
            {eye == false ? (
              <Entypo name="eye-with-line" size={22} color={'#707070'} />
            ) : (
              <Entypo name="eye" size={22} color={'#707070'} />
            )}
          </View>
        ) : null}
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  inputview: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    height: 52,
    borderRadius: 20,
    elevation: 10,
    padding: 10,
    marginTop: 25,
    position: 'relative',
    justifyContent: 'space-between',
  },
  icon: {
    // width: 17,
    // height: 13,
    marginLeft: 20,
  },
  input: {
    width: '70%',
    fontSize: 12,
    color: '#707070',
    paddingLeft: 15,
  },
});

export {Input};
