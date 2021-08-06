import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
      <Button
        title="go to Details screen...again"
        OnPress={() => navigation.push('Details')}
      />
      <Button title="go to Home" OnPress={() => navigation.navigate('Home')} />
      <Button title="go back" OnPress={() => navigation.goBack()} />
      <Button
        title="go to the first screen"
        OnPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22AD34',
  },
});
