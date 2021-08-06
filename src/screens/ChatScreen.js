import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import ListChat from '../component/Chat/ListChat';

const ChatScreen = props => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('DetailChat')}>
      <Text>
        <ListChat />
      </Text>
    </TouchableOpacity>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22AD34',
  },
});
