import {
  Body,
  Button,
  CheckBox,
  Container,
  Content,
  Form,
  Header,
  Input,
  Item,
  Label,
  Left,
  ListItem,
  Picker,
  Right,
  Textarea,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Axios from 'axios';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { black } from 'chalk';

const CreateKostScreen = props => {
  const [name, setName] = useState('');
  const [short_description, setShortDesc] = useState('');
  const [description, setDesc] = useState('');
  const [current_space_count, setCurrentSpaceCount] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [price, setPrice] = useState('');
  const [perks, setPerks] = useState('');

  const submit = () => {
     const data = {
      name: name,
      short_description,
      description,
      current_space_count,
      latitude,
      longitude,
      price,
      perks,
    };
    console.log('data before send', data);

    Axios.post('http://192.168.100.3:8080/api/v1/kosts', data).then(res => {
      console.log('res: ', res);
      setName('');
      setShortDesc('');
      setDesc('');
      setCurrentSpaceCount('');
      setLatitude('');
      setLongitude('');
      setPrice('');
      setPerks('');
    });
  };

  return (
    <Container>
      <Header style={styles.header} androidStatusBarColor="#66a5ad">
        <Item>
          <Text style={{fontSize: 20, color: '#ffffff'}} numberOfLines={1}>
            Tambah Data Kamar
          </Text>
        </Item>
      </Header>
      <Content style={styles.content}>
        <View style={{marginLeft: 0}}>
          <Form>
            <View style={{marginLeft: 15}}>
              <Label style={styles.label}>Nama Kamar</Label>
            </View>
            <Item style={{borderBottomColor: '#66a5ad'}}>
              <TextInput
                style={{marginLeft: -5}}
                placeholderTextColor="#bcbcbc"
                textColor="black"
                placeholder="Masukan Nama Kost"
                value={name}
                onChange={value => setName(value)}
              />
            </Item>
            <View style={{marginLeft: 10}}>
              <Label style={styles.label}>Short Deskripsi Kost</Label>
            </View>
            <TextInput
              rowSpan={3.5}
              placeholderTextColor="#bcbcbc"
              placeholder="Masukan Deskripsi Pendek Kost"
              style={styles.textarea}
              value={short_description}
              onChange={value => setShortDesc(value)}
            />
            <View style={{marginLeft: 10}}>
              <Label style={styles.label}>Deskripsi Keseluruhan Kost</Label>
            </View>
            <TextInput
              rowSpan={3.5}
              placeholderTextColor="#bcbcbc"
              placeholder="Masukan Deskripsi Penuh Kost, misalnya  : pemilik kost galak ya bund"
              style={styles.textarea}
              value={description}
              onChange={value => setDesc(value)}
            />
            <Label
              style={{
                marginTop: 20,
                fontSize: 20,
                marginLeft: 10,
              }}>
              Lokasi Kost
            </Label>
            <Item style={{borderBottomColor: '#66a5ad'}}>
              <Icon name="ios-search" />
              <Input
                style={{fontSize: 16}}
                placeholderTextColor="#bcbcbc"
                placeholder="Search"
              />
            </Item>
          </Form>
          {/* Map view */}
          {/* <View style={styles.map}>
            <MapView
              style={{flex: 1, width: window.width}} //window pake Dimensions
              region={{
                latitude: this.setLatitude,
                longitude: this.setLongitude,
              }}>
              <MapView.Marker
                coordinate={{
                  latitude: this.setLatitude ? this.setLatitude : 0,
                  longitude: this.longitude ? this.setLongitude : 0,
                }}
                title="Lokasi"
                description="Hello"
              />
            </MapView>
            <View
              style={{
                backgroundColor: 'transparent',
                height: 55,
                flexDirection: 'row',
              }}>
              <View
                style={{flex: 1, backgroundColor: 'transparent', marginTop: 5}}>
                <Item style={styles.item} floatingLabel>
                  <Label style={styles.labelText}>Masukan Latitude...</Label>
                  <Input
                    value={latitude}
                    onChange={value => setLatitude(value)}
                  />
                </Item>
              </View>
              <View
                style={{flex: 1, backgroundColor: 'transparent', marginTop: 5}}>
                <Item style={styles.item} floatingLabel>
                  <Label style={styles.labelText}>Masukan Longitude... </Label>
                  <Input
                    value={longitude}
                    onChange={value => setLongitude(value)}
                  />
                </Item>
              </View>
            </View>
          </View> */}

          {/*Form detail penjual*/}
          <Form style={styles.form}>
            <View style={{marginLeft: 10}}>
              <Label style={styles.label}>
                Tuliskan alamat lengkap penjual
              </Label>
            </View>
            <Item style={{borderBottomColor: '#66a5ad'}}>
              <Input
                rowSpan={4}
                style={{marginLeft: -10}}
                placeholderTextColor="#bcbcbc"
                placeholder="Masukan alamat misalnya: jalan, kecamatan"
                onChangeText={e => {
                  this.setState({
                    location: e,
                  });
                }}
              />
            </Item>
            <View style={{marginLeft: 10}}>
              {/* MASUKAN FOTO */}
              <View>
                <Label style={styles.label}>Masukkan Foto</Label>
                {/* {this.state.avatarSource === null ? ( */}
                <TouchableOpacity
                  tittle={'Choose Photo'}
                  // onPress={this.handleChoosePhoto}
                  style={{width: 100, height: 100, flexDirection: 'row'}}>
                  <Image
                    // source={require('../src/icon/addimage.png')}
                    style={{
                      width: 138,
                      height: 110,
                      resizeMode: 'contain',
                      marginTop: 10,
                      marginBottom: 20,
                    }}
                  />
                </TouchableOpacity>
                {/* ) : ( */}
                <TouchableOpacity
                // onPress={this.handleChoosePhoto}
                >
                  <Image
                    style={{
                      width: 138,
                      height: 110,
                      resizeMode: 'contain',
                      marginTop: 10,
                      marginBottom: 20,
                      marginLeft: 20,
                    }}
                    // source={this.state.avatarSource}
                  />
                </TouchableOpacity>
                {/* )} */}
              </View>
              {/* JUMLAH KAMAR */}
              <Label
                style={{
                  // fontFamily: 'Lato-Semibold',
                  fontSize: 19,
                  marginTop: 40,
                }}>
                Masukan Detail Kost
              </Label>
              <Item style={{marginLeft: -5, borderBottomColor: '#66a5ad'}}>
                <Input
                  placeholderTextColor="#bcbcbc"
                  placeholder="Masukan jumlah kamar"
                  keyboardType={'numeric'}
                  onChangeText={e => {
                    this.setState({
                      availablerooms: e,
                    });
                  }}
                />
              </Item>
              {/* LUAS KAMAR */}
              <Label
                style={{
                  fontSize: 19,
                  marginTop: 25,
                }}>
                Luas Kamar
              </Label>
              <View
                style={{
                  backgroundColor: 'transparent',
                  height: 55,
                  flexDirection: 'row',
                  marginLeft: -15,
                }}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    marginTop: -15,
                  }}>
                  <Item style={styles.item} floatingLabel>
                    <Label numberOfLines={1} style={styles.labelText}>
                      Masukan Luas...
                    </Label>
                    <Input
                      keyboardType={'numeric'}
                      onChangeText={e => {
                        this.setState({
                          large: e,
                        });
                      }}
                    />
                  </Item>
                </View>
                <Text
                  style={{
                    marginTop: 30,
                    // fontFamily: 'Lato-Semibold',
                    marginHorizontal: 10,
                  }}>
                  X
                </Text>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    marginTop: -15,
                    marginLeft: -10,
                  }}>
                  <Item style={styles.item} floatingLabel>
                    <Label numberOfLines={1} style={styles.labelText}>
                      Masukan Lebar...
                    </Label>
                    <Input
                      keyboardType={'numeric'}
                      onChangeText={e => {
                        this.setState({
                          large: this.state.large + 'x' + e,
                        });
                      }}
                    />
                  </Item>
                </View>
              </View>
              {/* GENDER KOST */}

              {/* NAMA LENGKAP */}
              <Label
                style={{
                  // fontFamily: 'Lato-Semibold',
                  fontSize: 19,
                  marginTop: 25,
                }}>
                Nama Penanggung Jawab
              </Label>
              <Item style={{marginLeft: -5, borderBottomColor: '#66a5ad'}}>
                <Input
                  placeholderTextColor="#bcbcbc"
                  placeholder="Masukan nama lengkap atau sapaan anda"
                />
              </Item>
              <Label
                style={{
                  fontSize: 19,
                  marginTop: 25,
                }}>
                Nomor Telepon Penanggung Jawab
              </Label>
              <Item style={{marginLeft: -5, borderBottomColor: '#66a5ad'}}>
                <Input
                  placeholderTextColor="#bcbcbc"
                  placeholder="Masukan nomor telepon yg bisa dihubungi"
                  keyboardType={'numeric'}
                />
              </Item>
            </View>
          </Form>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Button
              style={{
                marginTop: 50,
                marginBottom: 50,
                justifyContent: 'center',
                alignItems: 'center',
                width: 300,
                backgroundColor: '#66a5ad',
                borderRadius: 10,
              }}
              onPress={submit}>
              <Text style={{color: 'white'}}>Submit</Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#66a5ad',
  },
  content: {
    marginHorizontal: 20,
  },
  form: {
    marginLeft: -10,
    width: '100%',
    justifyContent: 'center',
  },
  textarea: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#66a5ad',
    // fontFamily: 'Lato-Semibold',
    fontSize: 16,
    marginLeft: 0,
  },

  radiocontainer: {
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  RowContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  map: {
    height: 200,
    width: '100%',
    marginTop: 20,
    elevation: 1,
  },

  labelText: {
    color: '#a6a6a6',
    // fontFamily: 'Lato-Regular',
  },

  item: {
    borderBottomColor: '#66a5ad',
    borderBottomWidth: 1,
  },

  label: {
    marginTop: 20,
    // fontFamily: 'Lato-Semibold',
    fontSize: 19,
    marginLeft: 0,
  },
});

export default CreateKostScreen;
