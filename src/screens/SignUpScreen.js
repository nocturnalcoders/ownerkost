import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Title} from 'native-base';
import {
  TextInput,
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { useState } from 'react';

const SignUpScreen = props => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [occupation, setOccupation] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
 

  const submit = () => {
     const data = {
      name,
      password,
      occupation,
      role,
      email,
    };
    alert('data before send', data);

    axios.post('http://192.168.100.3:8080/api/v1/users', data).then(res => {
      alert('res: ', res);
      setName("");
      setPassword("");
      setOccupation("");
      setRole("");
      setEmail("");
    });
  };

 

  return (
    <ScrollView>
      <View style={{justifyContent: 'center'}}>
        <Image style={styles.imgResize} />
      </View>
      <View style={{justifyContent: 'center'}}>
        <TextInput
          style={styles.textInput}
          placeholder="Nama minimal 3 huruf"
          onChange={value => setName(value)}        
          />
        
        <TextInput
          style={styles.textInput}
          placeholder="Password terdiri dari angka dan huruf minimal 8 char"
          onChange={value => setPassword(value)}        
        />

        <TextInput
          style={styles.textInput}
          placeholder="Nama minimal 3 huruf"
          onChange={value => setOccupation(value)}        
        />

        <TextInput
          style={styles.textInput}
          placeholder="Nama minimal 3 huruf"
          onChange={value => setRole(value)}        
        />

        <TextInput
          style={styles.textInput}
          placeholder="Email harus valid"
          onChange={value => setEmail(value)}        
        />


      </View>
      <View style={{justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => submit}>
          <Text style={styles.text}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

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
    paddingLeft: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
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
  text: {
    bottom: 10,
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
});


