import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {data} from "../data"

import {Button, CustomText, Header} from "../components"


export const SingleTransactionScreen = ({route,navigation}) => {
    const { params: {id} } = route;

    const item = data.find((item) => item.id === id);

    return (
        <View style={styles.container}>
            <Header
                name={item.name}
                surname={item.surname}
            />
            <CustomText weight={"bold"} style={styles.money}>${item.money}</CustomText>
            <View style={styles.btnContainer}>
                <Button title={"Card"}/>
                <Button title={"Debt"}/>
            </View>

            <CustomText weight={"bold"} style={styles.text}>transaction detail</CustomText>
            <View style={styles.details}>
                <CustomText weight={"medium"} style={styles.text}>payment detail</CustomText>
                <CustomText>{item.paymentDetail}</CustomText>
            </View>

            <View style={styles.details}>
                <CustomText weight={"medium"} style={styles.text}>type</CustomText>
                <CustomText>{item.type}</CustomText>
            </View>

            <View style={styles.details}>
                <CustomText weight={"medium"} style={styles.text}>pay with</CustomText>
                <CustomText>{item.payWidth}</CustomText>
            </View>
            <Button title={ "export"}/>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 25,
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: "center",

    },
    money: {
       fontSize: 30,
        marginVertical: 35,
    },
    btnContainer: {
        flexDirection: "row"
    },
    text: {
        textTransform: "capitalize",
        marginVertical: 20,

    },
    details: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#eee",
        justifyContent: "space-between",
        marginBottom:10
    }
});
