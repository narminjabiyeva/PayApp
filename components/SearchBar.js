import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

export const SearchBar = () => {
    return (
        <TextInput
            style={styles.container}
            placeholder="Search"
            placeholderTextColor="gray"
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginVertical: 20,
        borderWidth: 8,
        borderColor: "#c9c9c9",
        padding: 3,
        textAlign: "center"
    },
});
