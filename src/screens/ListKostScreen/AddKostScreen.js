import Axios from 'axios';
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
  import Icon from 'react-native-vector-icons/Ionicons';
  
  const AddKostScreen = props => {
    


    return (
      <Container>
        <Header style={styles.header} androidStatusBarColor="#66a5ad">
          <Item>
            <Text
              style={{fontSize: 20, color: '#ffffff'}}
              numberOfLines={1}>
              Tambah Data KamarAAAA
            </Text>
          </Item>
          <Right>
            <Button
              onPress={() => alert('coming soon')}
              style={{
                borderRadius: 10,
                height: 40,
                marginRight: 5,
                backgroundColor: '#66a5ad',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'white',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                }}
                numberOfLines={1}
                uppercase={false}>
                Tanya CS
              </Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          {/*Form Barang Dan Jasa*/}
          <View style={{marginLeft: 0}}>
            <Form>
              <View style={{marginLeft: 15}}>
                <Label style={styles.label}>Nama Kamar</Label>
              </View>
              <Item style={{borderBottomColor: '#66a5ad'}}>
                <TextInput
                  style={{marginLeft: -5}}
                  placeholderTextColor="#bcbcbc"
                  placeholder="Masukan Nama Kamar"
                />
              </Item>
              {/* <View style={{marginLeft: 15}}>
                <Label style={styles.label}>Jumlah Kamar Kost</Label>
              </View>
              <Item style={{borderBottomColor: '#66a5ad'}}>
                <Input
                  style={{marginLeft: -5}}
                  placeholderTextColor="#bcbcbc"
                  placeholder="Masukan Jumlah Kamar, misalnya: 80000"
                  keyboardType={'numeric'}
                  onChangeText={e => {
                    this.setState({
                      price: e,
                    });
                  }}
                />
              </Item> */}
              <View style={{marginLeft: 10}}>
                <Label style={styles.label}>Deskripsi Kamar</Label>
              </View>
              <Textarea
                rowSpan={3.5}
                placeholderTextColor="#bcbcbc"
                placeholder="Masukan Deskripsi Kamar, misalnya: Kamar hanya 1 gender, tidak boleh pasutri "
                style={styles.textarea}
                // value={}
                // onChangeText={() => set}
              />
            </Form>
            
            {/*Form detail penjual*/}
            <Form style={styles.form}>
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
                  Jumlah KamarAA
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
                <Label
                  style={{
                    // fontFamily: 'Lato-Semibold',
                    fontSize: 19,
                    marginTop: 25,
                  }}>
                  Gender Kost
                </Label>
                {/* <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{width: undefined}}
                  placeholder="Select your SIM"
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={}
                  onValueChange={}>
                  <Picker.Item label="Campur" value="Campur" />
                  <Picker.Item label="Putra" value="Putra" />
                  <Picker.Item label="Putri" value="Putri" />
                </Picker> */}
                {/* FASILITAS KOST */}
                <Label
                  style={{
                    // fontFamily: 'Lato-Semibold',
                    fontSize: 19,
                    marginTop: 20,
                  }}>
                  Fasilitas Kost
                </Label>
                <View style={{marginLeft: -15}}>
                  <ListItem
                    style={{borderBottomColor: '#66a5ad'}}
                    // onPress={() => this.setState({itemOne: !this.state.itemOne})}
                  >
                    <CheckBox
                      color={'#66a5ad'}
                      style={{borderRadius: 5}}
                      // checked={this.state.itemOne}
                      onPress={() => {
                        this.setState({
                          // itemOne: !this.state.itemOne,
                          // facility: this.state.facility + '-kasur',
                        });
                      }}
                    />
                    <Body>
                      <Text>Kasur</Text>
                    </Body>
                  </ListItem>
                  <ListItem
                    style={{borderBottomColor: '#66a5ad'}}
                    // onPress={() => this.setState({itemTwo: !this.state.itemTwo})}
                  >
                    <CheckBox
                      color={'#66a5ad'}
                      style={{borderRadius: 5}}
                      // checked={this.state.itemTwo}
                      // onPress={() => {
                      //   this.setState({
                      //     itemTwo: !this.state.itemTwo,
                      //     facility: this.state.facility + '-wifi',
                      //   });
                      // }}
                    />
                    <Body>
                      <Text>Wifi - Internet</Text>
                    </Body>
                  </ListItem>
                  <ListItem
                    style={{borderBottomColor: '#66a5ad'}}
                    // onPress={() =>
                    //   this.setState({itemThree: !this.state.itemThree})
                    // }
                  >
                    <CheckBox
                      color={'#66a5ad'}
                      style={{borderRadius: 5}}
                      // checked={this.state.itemThree}
                      // onPress={() =>
                      //   this.setState({itemThree: !this.state.itemThree})
                      // }
                    />
                    <Body>
                      <Text>Akses kunci 24 Jam</Text>
                    </Body>
                  </ListItem>
                  <ListItem
                    style={{borderBottomColor: '#66a5ad'}}
                    // onPress={() =>
                    //   this.setState({itemFour: !this.state.itemFour})
                    // }
                  >
                    <CheckBox
                      color={'#66a5ad'}
                      style={{borderRadius: 5}}
                      // checked={this.state.itemFour}
                      // onPress={() =>
                      //   this.setState({itemFour: !this.state.itemFour})
                      // }
                    />
                    <Body>
                      <Text>Kamar mandi dalam</Text>
                    </Body>
                  </ListItem>
                  <ListItem
                    style={{borderBottomColor: '#66a5ad'}}
                    // onPress={() =>
                    //   this.setState({itemFour: !this.state.itemFour})
                    // }
                  >
                    <CheckBox
                      color={'#66a5ad'}
                      style={{borderRadius: 5}}
                      // checked={this.state.itemFour}
                      // onPress={() =>
                      //   this.setState({itemFour: !this.state.itemFour})
                      // }
                    />
                    <Body>
                      <Text>Kamar mandi luar</Text>
                    </Body>
                  </ListItem>
                </View>
                {/* NOMOR TELEPON */}
                <Label
                  style={{
                    // fontFamily: 'Lato-Semibold',
                    fontSize: 19,
                    marginTop: 25,
                  }}>
                  Harga Kamar
                </Label>
                <Item style={{marginLeft: -5, borderBottomColor: '#66a5ad'}}>
                  <Input
                    placeholderTextColor="#bcbcbc"
                    placeholder="Rp."
                    keyboardType={'numeric'}
                    // onChangeText={e => {
                    //   this.setState({
                    //     contact: e,
                    //   });
                    // }}
                  />
                </Item>
              </View>
            </Form>
            {/* KAKI */}
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Button
                // onPress={() => this.uploadimg()}
                style={{
                  marginTop: 50,
                  marginBottom: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 300,
                  backgroundColor: '#66a5ad',
                  borderRadius: 10,
                }}>
                <Text style={{color:'white'}}>Submit</Text>
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
  
  export default AddKostScreen;
  