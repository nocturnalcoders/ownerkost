import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const FindScreen= ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Explore Screen</Text>
      <Button
        title="go to detail screen"
        OnPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};
export default FindScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#22AD34'
    },
});


