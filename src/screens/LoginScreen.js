import React, {Component, useState, useEffect} from 'react';
import {Container, Header, Left, Body, Right, Title} from 'native-base';
import {
  TextInput,
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import SignUpScreen from './SignUpScreen';

const LoginScreen = props => {
//   const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    _cekLogin();
  }, []);

  const _cekLogin = async () => {
    const value = await AsyncStorage.getItem('userToken');
    if (value) {
      // We have data!!
      props.navigation.navigate('DashboardScreen');
    } else {
      props.navigation.navigate('SignUpScreen');
    }
  };

  const _Login = async () => {
      axios
        .post('https://192.168.100.3:8080/api/v1/sessions', {
          email: email,
          password: password,
        })
        .then(res => {
          alert(res);
          if (typeof res.data.token !== undefined && res.data.error !== true) {
            AsyncStorage.setItem('userToken', res.data.token);
            alert(res.data.token);
            // props.navigation.navigate('HomeNavigator');
            alert('success')
          } else {
            alert('Login Gagal');
          }
        }).catch(error => console.log(error));
      };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={{justifyContent: 'center'}}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="Password"
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View style={{justifyContent: 'center'}}>
        <TouchableOpacity style={styles.button} onPress={_Login}>
          <Text style={styles.text}>Masuk</Text>
        </TouchableOpacity>
        {/* action={()=> this.props.navigation.navigate('Profile')} */}
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => props.navigation.navigate('SignUpScreen')}>
          <Text style={styles.text}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imgResize: {
    height: 175,
    width: 300,
    aspectRatio: 1.0,
    alignSelf: 'center',
    margin: 25,
  },
  textInput: {
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 20,
    width: 300,
    color: '#000000',
    paddingLeft: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  buttonLogin: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
    height: 20,
    padding: 20,
    paddingTop: 15,
    width: 300,
    borderRadius: 20,
    elevation: 7,
    marginTop: 10,
  },
  buttonRegister: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'gray',
    height: 20,
    padding: 20,
    paddingTop: 15,
    width: 300,
    borderRadius: 25,
    elevation: 7,
    marginTop: 10,
  },
  text: {
    bottom: 10,
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
    padding: 20,
    paddingTop: 15,
    width: 300,
    borderRadius: 25,
    elevation: 7,
    height: 20,
  },
});
