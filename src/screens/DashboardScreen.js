import React from 'react';
import {Button, Right, Text, Left, Header, Item} from 'native-base';
import {View, StyleSheet} from 'react-native';
import CardComponent from '../component/Dashboard/CardComponent';
// import { Icon } from 'react-native-vector-icons/Icon';

const DashboardScreen = props => {
  return (
    <View style={styles.container}>
      <Header style={styles.header} androidStatusBarColor="#66a5ad">
        <Item>
          <Text style={{fontSize: 20, color: '#ffffff'}} numberOfLines={1}>
            Dashboard Kost
          </Text>
        </Item>
      </Header>
      <View style={{flexDirection: 'row', width:10}} numColumns={3}>
        <CardComponent name={'Total Kamar Kost '} available={'34 Kamar'} />
        <CardComponent name={'Total Kamar Terisi'} available={'20 Kamar'} />
        <CardComponent name={'Total Kamar Kosong'} available={'14 Kamar'} />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <View style={{position:'absolute', left:0,right:0,bottom:0}}>
        <Button
          onPress={() => props.navigation.navigate('CreateKost')}
          style={{
            marginTop: 50,
            marginBottom: 50,
            marginLeft: 50,
            marginRight: 50,
            justifyContent: 'center',
            alignItems: 'center',
            width: 300,
            backgroundColor: '#66a5ad',
            borderRadius: 10,
          }}>
          <Text>Buat Kost !</Text>
        </Button>
        </View>
      </View>
    </View>
  );
};
export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#66a5ad',
  },
});
