import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Image, Linking, TextInput, Keyboard } from "react-native";

import CustomButton from '../components/CustomButton';


export default class NewTemplateScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static navigationOptions = {
        header: null
    }


    // Render
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>New Composition</Text>
                <Text style={styles.descriptionText}>Select A Template to Get Started</Text>
                {/* Card */}
                <ScrollView
                    style={styles.horizontalCards}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>

                    {/* Card */}
                    <View style={styles.cardContainer}>
                        <Image
                            source={require('../images/templateslides/songwriting-template.png')}
                            style={styles.cardImage}></Image>
                        <Text style={styles.cardTitle}>For the Songwriters</Text>
                        <Text style={styles.cardDescription}>A quick guide and simple layout to make song writing efficient</Text>
                    </View>
                    {/* Card */}
                    <View style={styles.cardContainer}>
                        <Image
                            source={require('../images/templateslides/voice-template.png')}
                            style={styles.cardImage}></Image>
                        <Text style={styles.cardTitle}>For the Singers</Text>
                        <Text style={styles.cardDescription}>Recording lyrics easy comes easy with our Speech to Text Template</Text>
                    </View>
                    {/* Card */}
                    <View style={styles.cardContainer}>
                        <Image
                            source={require('../images/templateslides/poet-template.png')}
                            style={styles.cardImage}></Image>
                        <Text style={styles.cardTitle}>For the Poets</Text>
                        <Text style={styles.cardDescription}>A Small template to help write your next poetic masterpiece</Text>
                    </View>
                    {/* Card */}
                    <View style={styles.cardContainer}>
                        <Image
                            source={require('../images/templateslides/blank-template.png')}
                            style={styles.cardImage}></Image>
                        <Text style={styles.cardTitle}>Blank</Text>
                        <Text style={styles.cardDescription}>A Blank template that comes with endless possibilities.</Text>
                    </View>
            
                </ScrollView>
                <CustomButton
                title="Or Start with a Blank Composition"
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
        marginTop: 40
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginLeft: 20,
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    descriptionText: {
        fontSize: 16,
        color: '#a8a8a8',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 5,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#FD9774',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },

    // Card
    horizontalCards: {
        flex: 1,
    },
    cardContainer: {
        marginBottom: 40,
        borderRadius: 5,
        marginRight: 20,
        paddingRight: 50,
        width: 335,
        height: 380,
        marginLeft: 20
    },
    cardImage: {
        height: 330,
        width: 335,
        justifyContent: 'center',
        borderRadius: 5
    },
    cardTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginTop: 10
    },
    cardDescription: {
        fontSize: 16,
        color: '#a8a8a8',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 5,

    },
})