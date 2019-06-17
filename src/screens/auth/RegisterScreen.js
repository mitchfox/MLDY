import React from "react";
import {
    View, Text, StyleSheet, Image,
    TextInput, KeyboardAvoidingView, TouchableOpacity
} from "react-native";
import CustomButton from '../../components/CustomButton';
import { Container, Content, Form, Item, Input, Label, Icon } from 'native-base';
import firebase from 'firebase';

export default class RegisterScreen extends React.Component {
    
    _isMounted = false;
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        }
    }
    static navigationOptions = {
        header: null
    }

    registerUser = (name, email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(authenticate => {
            return authenticate.user
            .updateProfile({
                displayName: name
            })
            .then(() => {
                this.props.navigation.replace('Home');
            })
        })
        .catch( error => {
            alert(error.message);
        })
    }

    // Render
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.descriptionText}>Create your MLDY account</Text>
                {/* Login Form */}
                <Container>
                    <Content>
                        <Form style={styles.form}>
                            <Item floatingLabel>
                                <Label>First Name</Label>
                                <Input
                                    autoCorrect={false}
                                    onChangeText={(name) => this.setState({ name })}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    autoCorrect={false}
                                    autoCapitalize={"none"}
                                    keyboardType={"email-address"}
                                    onChangeText={(email) => this.setState({ email })}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    autoCapitalize={"none"}
                                    keyboardType={"email-address"}
                                    onChangeText={(password) => this.setState({ password })}
                                />
                            </Item>
                            <CustomButton
                                title={"Register"}
                                style={styles.button}
                                onPress={() => {
                                    this.registerUser(
                                        this.state.name,
                                        this.state.email,
                                        this.state.password,
                                    );
                                }}
                            />
                            <CustomButton
                                title={"Register with Facebook"}
                                style={styles.button}
                                onPress={() => {
                                    // If input okay -> Login User
                                    this.props.navigation.navigate('Register', {

                                    });
                                }}
                            />
                        </Form>
                    </Content>
                </Container>
                <Text style={styles.descriptionText}>OR</Text>
                {/* TODO */}
                <CustomButton
                    title={"Already have an Account? Login"}
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('Register', {

                        });
                    }}
                />
            </KeyboardAvoidingView>
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
        marginTop: 15
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