import React from "react";
import { TouchableWithoutFeedback, StyleSheet, Text, View, TextInput } from "react-native";

export default SearchInput = (props) => {
    const {
        // title = 'Enter',
        // style = {},
        // textStyle = {},
        // onPress
    } = props;

    return (
            <TextInput
                style={styles.input}
                placeholderTextColor="#a8a8a8"
                placeholder={"Search Compositions"}
            />
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#f1f1f1',
        paddingHorizontal: 15,
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 10,
        borderRadius: 5
      },
});