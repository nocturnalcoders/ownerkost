// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// import HomeScreen from './DashboardScreen';
// import DetailsScreen from './DetailsScreen';
// import ProfileScreen from './ProfileScreen';
// import ExploreScreen from './ExploreScreen';

// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();

// const Tab = createMaterialBottomTabNavigator();

// const MainTabScreen = () => (
//   <Tab.Navigator initialRouteName="Home" activeColor="#ffffff">
//     <Tab.Screen
//       name="Home"
//       component={HomeStackScreen}
//       options={{
//         tabBarLabel: 'Dahboard',
//         tabBarColor: '#000000',
//         tabBarIcon: ({color}) => (
//           <Icon name="ios-pie-chart" color={color} size={22} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Notifications"
//       component={DetailsStackScreen}
//       options={{
//         tabBarLabel: 'List Kost',
//         tabBarColor: '#000000',
//         tabBarIcon: ({color}) => (
//           <Icon name="ios-home" color={color} size={26} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Explore"
//       component={ExploreScreen}
//       options={{
//         tabBarLabel: 'Explore',
//         tabBarColor: '#000000',
//         tabBarIcon: ({color}) => (
//           <Icon name="ios-aperture" color={color} size={26} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Profile"
//       component={ProfileScreen}
//       options={{
//         tabBarLabel: 'Profile',
//         tabBarColor: '#000000',
//         tabBarIcon: ({color}) => (
//           <Icon name="ios-person" color={color} size={26} />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

// export default MainTabScreen;

// const HomeStackScreen = ({navigation}) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#B4F8C8',
//       },
//       headerTintColor: '#ffffff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <HomeStack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         title: 'Overview',
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#B4F8C8"
//             onPress={() => navigation.openDrawer()}></Icon.Button>
//         ),
//       }}
//     />
//   </HomeStack.Navigator>
// );

// const DetailsStackScreen = ({navigation}) => (
//   <DetailsStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#FFAEBC',
//       },
//       headerTintColor: '#ffffff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <DetailsStack.Screen
//       name="Home"
//       component={DetailsScreen}
//       options={{
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#FFAEBC"
//             onPress={() => navigation.openDrawer()}></Icon.Button>
//         ),
//       }}
//     />
//   </DetailsStack.Navigator>
// );
