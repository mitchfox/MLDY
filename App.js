import React from 'react';
import { Container, Header, Content, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';

// Screen Imports
import HomeScreen from './src/screens/HomeScreen';
import AllCompositionsScreen from './src/screens/AllCompositionsScreen';
import EditorScreen from './src/screens/EditorScreen';
// TODO add band functionality
// import BandScreen from './src/screens/BandScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NewTemplateScreen from './src/screens/NewTemplateScreen';
// import OptionsScreen from './src/screens/OptionsScreen';
// Auth Screen Imports
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import LoadingScreen from './src/screens/auth/LoadingScreen';


// Firebase configuration
var config = {
  apiKey: "AIzaSyAgmX7xAG7YAD0pffbjPxdXrzCW95vQrds",
  authDomain: "mldy-8d5d4.firebaseapp.com",
  databaseURL: "https://mldy-8d5d4.firebaseio.com",
  projectId: "mldy-8d5d4",
  storageBucket: "",
  messagingSenderId: "264551765363",
  appId: "1:264551765363:web:791ede78d04e7c29"
};

firebase.initializeApp(config);

const AuthStackNavigator = createStackNavigator({
  Loading: {
    screen: LoadingScreen,
  },
  Login: {
    screen: LoginScreen
  }, 
  Register: {
    screen: RegisterScreen,
  },
  Home: {
    screen: HomeScreen,
  },  
},
{
  defaultNavigationOptions: {
  },
  // Launch Loading Screen
  initialRouteName: "Loading"

});

const CompositionStackNavigator = createStackNavigator({
  AllCompositions: {
    screen: AllCompositionsScreen,
  },
  Editor: {
    screen: EditorScreen
  },
});

const TabNavigator = createBottomTabNavigator({
  
  Home: {
    screen: AuthStackNavigator,
  },
  AllCompositions: {
    screen: CompositionStackNavigator
  },
  NewTemplate: {
    screen: NewTemplateScreen
  },
  Profile: {
    screen: ProfileScreen
  },
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `md-flag`;
        }
        else if (routeName === 'AllCompositions') {
          iconName = `md-menu`;
        } 
        else if (routeName === 'NewTemplate') {
          iconName = `md-add`;
        }
        // else if (routeName === 'Options') {
        //   iconName = `md-options`;
        // } 
        else if (routeName === 'Profile') {
          iconName = `md-person`;
        }

        return <IconComponent name={iconName} size={30} color={tintColor} />;
      },
    }
    ),
    tabBarOptions: {
      activeTintColor: '#FD9774',
      inactiveTintColor: '#a8a8a8',
      showLabel: false,
      
    },
  }
);


const App = createAppContainer(TabNavigator, CompositionStackNavigator, AuthStackNavigator);
export default App;