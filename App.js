import React from 'react';
import { Container, Header, Content, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// Screen Imports
import HomeScreen from './src/screens/HomeScreen';
import AllCompositionsScreen from './src/screens/AllCompositionsScreen';
import EditorScreen from './src/screens/EditorScreen';
// import BandScreen from './src/screens/BandScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NewTemplateScreen from './src/screens/NewTemplateScreen';
import OptionsScreen from './src/screens/OptionsScreen';

const CompositionStackNavigator = createStackNavigator({
  AllCompositions: { 
    screen: AllCompositionsScreen,
  },
  Editor: { 
    screen: EditorScreen
  }
})

const TabNavigator = createBottomTabNavigator({
  Home: { 
    screen: HomeScreen,
  }, 
  AllCompositions: { 
    screen: AllCompositionsScreen
  },
  NewTemplate: { 
    screen: NewTemplateScreen
  },
  Options: { 
    screen: OptionsScreen
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
          iconName = `md-bonfire`;
        } else if (routeName === 'AllCompositions') {
          iconName = `md-menu`;
        } else if (routeName === 'NewTemplate') {
          iconName = `md-add`;
        } else if (routeName === 'Options') {
          iconName = `md-options`;
        } else if (routeName === 'Profile') {
          iconName = `md-person`;
        }
      
        return <IconComponent name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FD9774',
      inactiveTintColor: '#a8a8a8',
      showLabel: false,
    },
  }
);


const App = createAppContainer(TabNavigator, CompositionStackNavigator);
export default App;