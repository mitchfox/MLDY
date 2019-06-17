import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Linking, TextInput, Keyboard, Input } from "react-native";
import CustomButton from '../components/CustomButton';

// Editor
// Create, Save, Delete Compositions

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComposition: true,
      title: "Untitled"
    }
  }

  static navigationOptions = {
    header: null
  }


  render() {
    if (this.state.newComposition === false) {
      //  Load from template if new template or
      // If Reloading pre-existing, load everything -> no bugs -> saving data within firebase
      // Load on another device -> mldy premium

      return (
        <View style={styles.container}>
          {/*  Editable Title */}
          <TextInput style={styles.title}>Load Title</TextInput>
          {/*  Create Workspace to write and record lyrics */}
          <Text style={styles.descriptionText}>Welcome to the Editor</Text>
          <TextInput style={styles.textArea}>This is where your lyrics go...</TextInput>

          <CustomButton
            title={"Cancel"}
            style={styles.button}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />

          <CustomButton
            title={"Save"}
            style={styles.button}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />

        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          {/*  Editable Title */}
          <TextInput style={styles.title}>{this.state.title}</TextInput>
          {/*  Create Workspace to write and record lyrics */}
          <Text style={styles.descriptionText}>Welcome to the Editor</Text>
          <TextInput style={styles.textArea}>This is where your lyrics go...</TextInput>

          <CustomButton
            title={"Cancel"}
            style={styles.button}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />

          <CustomButton
            title={"Save"}
            style={styles.button}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />

        </View>

      );
          }
    }
  }

    // Styling 
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        textTransform: 'capitalize',

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
        marginBottom: 20,
      },
      textArea: {
        marginBottom: 50
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