import {Button} from 'native-base';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export const ButtonComponent = props => {
    return (
        <Button warning style={styles.Button}>
          <Text style={styles.ButtonText}>Pasang Kost !</Text>
        </Button>
    );
  }


const styles = StyleSheet.create({
  itemBaris: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 5,
    flexWrap: 'wrap',
    margin: 15,
    justifyContent: 'center',
  },
  name: {
    color: '#474747',
    fontWeight: 'bold',
    paddingVertical: 10,
    fontSize: 15,
  },
  Button: {
    backgroundColor: '#00a663',
    fontSize: 10,
    borderRadius: 10,
    marginLeft: 150,
    marginTop: 150,
    justifyContent:'center',
    alignContent:'center',
    alignItems: 'center' 

  },
  ButtonText: {
    color: '#ffffff',
    margin: 5,
  },
});
