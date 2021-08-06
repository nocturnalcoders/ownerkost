import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailChatScreen from '../screens/ChatScreen/DetailChatScreen';
import ChatScreen from '../screens/ChatScreen'

const Stack = createStackNavigator();

const ChatStackNavigate =  props => (
    <Stack.Navigator>
        <Stack.Screen name="Chat" component={ChatScreen}/>
        <Stack.Screen name="DetailChat" component={DetailChatScreen}/>
    </Stack.Navigator>
);

export default ChatStackNavigate;