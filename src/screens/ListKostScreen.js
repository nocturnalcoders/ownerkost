import React from 'react';
import {Button, Right, Text, Left, Header, Item} from 'native-base';
import {View, StyleSheet} from 'react-native';
import CardComponent from '../component/ListKost/CardComponent';
// import { Icon } from 'react-native-vector-icons/Icon';

const ListKostScreen = props => {
  return (
    <View style={styles.container}>
      <Header style={styles.header} androidStatusBarColor="#66a5ad">
        <Item>
          <Text style={{fontSize: 20, color: '#ffffff'}} numberOfLines={1}>
            List Kost
          </Text>
        </Item>
      </Header>
      <CardComponent name={'Kost Mawar'} available={'4 Kamar'} />
      <View style={{flexDirection:'row', margin:10, justifyContent:'space-between'}}>
      <Button warning style={{backgroundColor:'#66a5ad'}} onPress={() => props.navigation.navigate('DetailKamarKost')}>
        <Text>Lihat Detail Kamar</Text>
      </Button>
      <Button warning style={{backgroundColor:'#66a5ad'}} onPress={() => props.navigation.navigate('DetailFinancialKost')}>
        <Text>Lihat Financial</Text>
      </Button>
      </View>
    </View>
  );
};
export default ListKostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#66a5ad',
  },
});
