import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Linking, TextInput, Keyboard } from "react-native";


export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  // Render
  render() {
    return (
      <View>
        <Text style={styles.title}>Options</Text>
        <View style={styles.container}>
        
        
        </View>
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
    // alignItems: "center",
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