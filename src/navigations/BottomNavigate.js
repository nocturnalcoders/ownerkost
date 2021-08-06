import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {StyleSheet} from 'react-native';
import DashboardStackNavigate from './DashboardStackNavigate';
import ProfileStackNavigate from './ProfileStackNavigate';
import ListKostStackNavigate from './ListKostStackNavigate';
import ChatStackNavigate from './ChatStackNavigate';

const Tab = createBottomTabNavigator();

const BottomNavigate = props => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'ios-pie-chart' : 'ios-pie-chart-outline';
          } else if (route.name === 'Chat') { 
            iconName = focused ? 'ios-chatbox' : 'ios-chatbox-outline';
          } else if (route.name === 'ListKost') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }
          // else if (route.name === 'Booking') {
          //   iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
          // } else if (route.name === 'Profile') {
          //   iconName = focused ? 'ios-person' : 'ios-person-outline';
          // }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Dashboard" component={DashboardStackNavigate} />
      <Tab.Screen name="Chat" component={ChatStackNavigate} />
      <Tab.Screen name="ListKost" component={ListKostStackNavigate} />
      <Tab.Screen name="Profile" component={ProfileStackNavigate} />
    </Tab.Navigator>
  );
};

export default BottomNavigate;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
  },
});
