import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Linking, TextInput, Keyboard } from "react-native";
// import { Container, Header, Content, List, ListItem } from 'native-base';
import CustomButton from '../components/CustomButton';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  // Render
  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.textLogoContainer}>
            </View>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../images/home-image.png')}
                    style={styles.landingImage}
                />
            </View>
            <Text style={styles.titleText}>Sing, Compose & Collaborate. Anywhere, Anytime</Text>
            <Text style={styles.descriptionText}>Log in or Register to save & sync your compositions across all devices.</Text>
            <CustomButton
                title="Sign In"
                onPress={() => {
                    // this.props.navigation.navigate("Signup");
                }}
                style={styles.button}
            />
            <CustomButton
                title="Register"
                onPress={() => {
                    // this.props.navigation.navigate("Signup");
                }}
                style={styles.button}
            />

        </View>
    );
}
}

// Styling 
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40
},
title: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
textLogoContainer: {
    alignItems: 'center',
},
textLogo: {
    fontSize: 22,
    fontWeight: '800',
},
titleText: {
    fontSize: 28,
    fontWeight: 'bold',  
},
descriptionText: {
    fontSize: 16,
    color: '#a8a8a8',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 5,
},
button: {
    backgroundColor: '#FD9774',
    marginBottom: 15,
},

logoContainer: {
    alignItems: 'center',
    marginTop: 20,
},
logo: {
    width: 35,
    height: 35,
    marginTop: 40,
    resizeMode: 'contain',
    alignItems: 'center',
    display: 'flex',
},
landingImage: {
    width: 340,
    height: 200,
    resizeMode: 'contain',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    marginRight: 20,
    alignItems: 'center',
},

})