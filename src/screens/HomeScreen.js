import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Linking, TextInput, Keyboard } from "react-native";
import CustomButton from '../components/CustomButton';
import firebase from 'firebase';

export default class HomeScreen extends React.Component {
   
    _isMounted = false;
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        }
    }
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this._isMounted = true;
        firebase.auth().onAuthStateChanged(authenticate => {
            if(authenticate) {
                this.setState({
                    name: authenticate.displayName,                })
            } else {
                this.props.navigation.replace('Login')
            }
        })
    }
    // componentWillUnmount() {
    //     this._isMounted = false;
    //   }

    logoutUser = () => {
        firebase.auth().signOut()
        .then( () => console.log("signout"))
        .catch( error => alert(error.message))
    }


    // Render
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome, {this.state.name} 💪</Text>
                {/* <Text style={styles.descriptionText}>Email: {this.state.email}</Text> */}
                {/* <Text style={styles.descriptionText}>Daily Quote</Text>
                <Text style={styles.quoteText}>“Without music, life would be a mistake” ― Friedrich Nietzsche.</Text> */}
                <CustomButton
                    title={"Log Out"}
                    style={styles.button}
                    onPress={() => {
                        this.logoutUser();
                    }}
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
    },
    textLogoContainer: {
        alignItems: 'center',
    },
    textLogo: {
        fontSize: 22,
        fontWeight: '800',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 40,
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