import {Body, Button, Card, CardItem, Image, Thumbnail} from 'native-base';
import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export const ProfileScreen = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar backgroundColor="#66a5ad"></StatusBar>
      <View
        style={{
          height: 180,
          borderBottomRightRadius: 80,
          borderBottomLeftRadius: 80,
          zIndex: 0,
          backgroundColor: '#66a5ad',
          alignItems: 'center',
        }}>
        {/*Header & thumbnail*/}
        <View
          style={{
            height: '50%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {/*Thumbnail & name*/}

          <View>
            <View
              style={{
                flexDirection: 'row',
                color: 'white',
                justifyContent: 'center',
              }}>
              <Thumbnail
                style={{width: 60, height: 60, marginTop: 10, marginLeft: 10}}
                // source={require('../assets/user.jpg')}
              />
              <Text
                style={{
                  marginTop: 25,
                  color: '#FFFFFF',
                  marginLeft: 10,
                  fontSize: 17,
                }}>
                Christina Lie
              </Text>
            </View>
          </View>
        </View>
        <Card style={{width: '95%', height: '80%', borderRadius: 10}}>
          <CardItem header>
            <Text
              style={{
                fontSize: 15,
                color: '#727272',
              }}>
              Kost Saya
            </Text>
          </CardItem>
          <CardItem style={{height: '100%'}}>
            <Body
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                marginRight: -20,
              }}>
              <Button transparent style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{textAlign: 'center'}}>Kontrak</Text>
              </Button>
              <Button transparent style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{textAlign: 'center'}}>Tagihan</Text>
              </Button>
              <Button transparent style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{textAlign: 'center'}}>Komplain</Text>
              </Button>
              <Button transparent style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{textAlign: 'center'}}>Kios</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </View>
      <View
        style={{
          marginTop: '12%',
          backgroundColor: '#ffffff',
          flex: 1,
          alignItems: 'center',
        }}>
        <Card style={{marginTop: 10, elevation: 0, width: '95%'}}>
          <CardItem header button onPress={() => this.getToken()}>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 15,
              }}>
              History Booking
            </Text>
          </CardItem>
        </Card>
        <Card style={{marginTop: 10, elevation: 0, width: '95%'}}>
          <CardItem header button onPress={() => alert('wow')}>
            <Text
              style={{
                marginLeft: 10,
                fontFamily: 'Lato-Regular',
                fontSize: 15,
              }}>
              Barang Dan Jasa
            </Text>
          </CardItem>
        </Card>
        <Card style={{marginTop: 10, elevation: 0, width: '95%'}}>
          <CardItem header button onPress={() => alert('wow')}>
            <Text
              style={{
                marginLeft: 10,
                fontFamily: 'Lato-Regular',
                fontSize: 15,
              }}>
              Verifikasi Akun
            </Text>
          </CardItem>
        </Card>
        <Card style={{marginTop: 20, elevation: 0, width: '95%'}}>
          <CardItem header button onPress={() => props.navigation.navigate('Setting')}>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 15,
              }}>
              Pengaturan
            </Text>
          </CardItem>

          <CardItem header button onPress={() => alert('wow')}>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 15,
              }}>
              Hubungi CS
            </Text>
          </CardItem>
          <CardItem header button>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 15,
              }}>
              Syarat dan Ketentuan
            </Text>
          </CardItem>
          <CardItem header button onPress={() => this.removeItemValue('token')}>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 15,
              }}>
              Keluar
            </Text>
          </CardItem>
        </Card>
      </View>
    </View>
    // <ScrollView>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       paddingLeft: 20,
    //       paddingTop: 20,
    //       justifyContent: 'space-between',
    //       paddingRight: 20,
    //       paddingLeft: 20,
    //     }}>
    //     <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
    //       <Ionicons name="ios-person" size={40} />
    //       <View style={{flexDirection: 'column', paddingLeft: 10}}>
    //         {/* <Text style={styles.Text}>{this.state.user}</Text> */}
    //         <Text style={styles.Text}>0000001</Text>
    //       </View>
    //     </View>
    //   </View>
    //   <TouchableOpacity
    //     onPress={() => this.props.navigation.navigate('DetailAccountScreen')}
    //     style={styles.card}
    //     >
    //     <View style={{flexDirection: 'row'}}>
    //       <Ionicons name="ios-home" size={40} color="#00a663" />
    //       <Text style={styles.Text}>Account Saya</Text>
    //     </View>
    //   </TouchableOpacity>
    //   <TouchableOpacity
    //     onPress={() => this.props.navigation.navigate('Booklist')}
    //     style={styles.card}>
    //     <Ionicons name="ios-paper" size={30} color="#00a663" />
    //     <Text style={styles.Text}>Daftar Pemesanan</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity
    //     style={styles.card}
    //     onPress={() => this.props.navigation.navigate('ListAd')}>
    //     <Ionicons name="ios-images" size={30} color="#00a663" />
    //     <Text style={styles.Text}>Data dan Pasang Iklan</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={styles.card}>
    //     <Ionicons name="ios-create" size={30} color="#00a663" />
    //     <Text style={styles.Text}>Verifikasi Akun </Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={styles.card}>
    //     <Ionicons name="ios-settings" size={30} color="#00a663" />
    //     <Text style={styles.Text}>Pengaturan</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={() => this._logoutAsync()} style={styles.card}>
    //     <Ionicons name="ios-call" size={30} color="#00a663" />
    //     <Text style={styles.text}>Logout</Text>
    //   </TouchableOpacity>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 15,
    paddingLeft: 10,
    alignContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    height: 70,
    borderRadius: 4,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});

export default ProfileScreen;
