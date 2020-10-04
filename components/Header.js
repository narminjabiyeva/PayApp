import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {CustomText} from "./CustomText";

export const Header = ({name,surname}) => {
    return (
        <View style={styles.container}>
            <CustomText weight={"bold"} style={styles.title} >{name} {surname}</CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: "center",
    },
    title: {
       fontSize: 18
    }
});
