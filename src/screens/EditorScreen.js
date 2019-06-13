import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Linking, TextInput, Keyboard, Input } from "react-native";



export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  static navigationOptions = {
    header: null
}


  render() {

    //  Load from template if new template or
    // If Reloading pre-existing, load everything -> no bugs -> saving data within firebase
    // Load on another device -> mldy premium
    
    return (
      <View>
          {/*  Editable Title */}
        <Text style={styles.title}>New Composition</Text>
            {/*  Create Workspace to write and record lyrics */}

        
        
        </View>
      
    );
  }
}

// Styling 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginLeft: 20,
    marginRight: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 20,
    marginTop: 40
  },
  button: {
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14a5ff',
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
},
})