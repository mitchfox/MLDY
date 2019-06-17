import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Linking, TextInput, Keyboard } from "react-native";
import firebase from 'firebase';
import Loader from '../../components/Loader';

export default class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged( (authenticate) => {
            if (authenticate) {
                this.props.navigation.replace("Home");
            } else {
                this.props.navigation.replace("Login");
            }
        })
    }


    // Render login or register depending on login or register (e.g Creating you a MLDY Account || Welcome back )
    render() {
        return (
            <View style={styles.container}>
                
                <Loader />


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