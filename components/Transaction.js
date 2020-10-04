import React from 'react';
import { StyleSheet, Text, Image ,View} from 'react-native';

import {CustomText} from "./CustomText";

export const Transaction = ({item}) => {
    return (
        <View style={styles.container} >
            <View style={styles.user}>
                <Image style={styles.img} source={item.img}/>
                <CustomText
                    weight={"medium"}
                    style={styles.name}>
                    {item.name} {item.surname}
                </CustomText>
            </View>

            <CustomText
                weight={"medium"}
                style={styles.money}>
                ${item.money}
            </CustomText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "space-between",
        marginRight: 30,
        alignItems: "center"

    },
    user:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    name: {
        marginLeft: 25
    },
    money: {
        color: "#a4a4a4"
    }
});
