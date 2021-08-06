import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './src/screens/MainTabScreen';

import {DrawerContent} from './src/screens/DrawerContent';
import SupportScreen from './src/screens/FindScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import BookmarkScreen from './src/screens/BookmarkScreen';

import {ActivityIndicator, View} from 'react-native';

import {AuthContext} from './src/component/context';
import AsyncStorage from '@react-native-community/async-storage';
import AuthStackScreen from './src/navigations/AuthStackScreens';
import BottomNavigate from './src/navigations/BottomNavigate';

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  //Teknik speeding up execution
  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;
        
          try {
            await AsyncStorage.setItem('userToken', userToken);
          } catch (error) {
            console.log(error);
          }
        // console.log('user token ', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (error) {
          console.log(error);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        // setUserToken('tolie ganteng');
        // setIsLoading(false);
      },
    }),
    [],
  );

  //use effect akan run ketika screen kita akan rendering
  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (error) {
        console.log(error);
      }
      dispatch({type: 'REGISTER', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    // <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <AuthStackScreen/>
        {/* {loginState.userToken != null ? (
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          </Drawer.Navigator>
        ) : (
          <AuthStackScreen />
        )} */}
      </NavigationContainer>
    // </AuthContext.Provider>
  );
};

export default App;
