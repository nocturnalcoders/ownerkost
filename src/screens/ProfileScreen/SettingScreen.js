import {Textarea} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri:
                  'https://media-exp1.licdn.com/dms/image/C5603AQFfFXgSR9NbYg/profile-displayphoto-shrink_400_400/0/1619925388694?e=1626912000&v=beta&t=8XBGkWuWE53XnHnMZmmy5txefKzddoj3edBI1iuHAtI',
              }}
            />
            <Text style={styles.name}>Christina Lie</Text>
          </View>
        </View>


        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>name :</Text>
              <Text> Christina Lie</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Address : </Text>
              <Text>Jalan. Poris Indah</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Email :</Text>
              <Text>Christinalie99@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Phone number : </Text>
              <Text>089665991130</Text>
            </TouchableOpacity>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
              electram expetendis, omittam deseruisse consequuntur ius an,
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#66a5ad',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  profileDetail: {
    alignSelf: 'center',
    marginTop: 200,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
  detailContent: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#00CED1',
  },
  count: {
    fontSize: 18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  description: {
    fontSize: 20,
    color: '#407677',
    marginTop: 10,
    textAlign: 'center',
  },
});
