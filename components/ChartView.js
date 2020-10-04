import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'


import {CustomText} from "./CustomText";

export const ChartView = ( {color, percent,name}) => {
    return (
        <View style={styles.container}>
            <CustomText style={styles.name}>{name}</CustomText>
                <ProgressCircle
                    percent={percent}
                    radius={50}
                    borderWidth={7}
                    color={color}
                    shadowColor="#eee"
                    bgColor="#fff"
                >
                    <CustomText
                        weight={"medium"}
                        style={{ fontSize: 18,color: color }}>
                        {percent}%
                    </CustomText>
                </ProgressCircle>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center"
    },
    name: {
        marginBottom: 15,
        color: "#939393"
    }
});
