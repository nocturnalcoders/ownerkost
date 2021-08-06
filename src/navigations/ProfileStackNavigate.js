import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SettingScreen from '../screens/ProfileScreen/SettingScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const ProfileStackNavigate =  props => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Setting" component={SettingScreen}/>
    </Stack.Navigator>
);

export default ProfileStackNavigate;