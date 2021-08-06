import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import DashboardScreen from '../screens/DashboardScreen';
import CreateKostScreen from '../screens/DashboardScreen/CreateKostScreen';

const Stack = createStackNavigator();

const DashboardStackNavigate =  props => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>
        <Stack.Screen name="CreateKost" component={CreateKostScreen}/>
    </Stack.Navigator>
);

export default DashboardStackNavigate;