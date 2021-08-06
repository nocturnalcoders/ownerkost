import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ListKostScreen from '../screens/ListKostScreen';
import DetailFinancialKost from '../screens/ListKostScreen/DetailFinancialKostScreen';
import AddKostScreen from '../screens/ListKostScreen/AddKostScreen';

const Stack = createStackNavigator();

const ListKostStackNavigate = props => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="ListKost" component={ListKostScreen} />
    <Stack.Screen name="DetailFinancialKost" component={DetailFinancialKost} />
    <Stack.Screen name="AddKostScreen" component={AddKostScreen} />
  </Stack.Navigator>
);

export default ListKostStackNavigate;
