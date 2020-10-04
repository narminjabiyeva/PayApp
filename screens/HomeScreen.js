import React from 'react';
import { StyleSheet, ScrollView, View ,TouchableOpacity} from 'react-native';

import {ChartView, CustomText, SearchBar, Transaction,} from "../components";
import {data} from "../data"

 export const HomeScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <CustomText style={styles.header} weight={"bold"}>Transactions</CustomText>
            <SearchBar/>
            <CustomText style={styles.title} weight={"bold"}>Performance</CustomText>

            <View style={styles.chartContainer}>
                <ChartView
                    name={"curret week"}
                    color={"green"}
                    percent={64}
                />
                <ChartView
                    name={"last week"}
                    color={"red"}
                    percent={40}
                />
                <ChartView
                    name={"last month"}
                    color={"blue"}
                    percent={90}
                />
            </View>

            <CustomText style={styles.title} weight={"bold"}>Transactions</CustomText>
            {
                data.map( item =>
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => navigation.navigate("SingleTransaction",{id:item.id})}
                    >
                        <Transaction

                            item={item}
                        />
                    </TouchableOpacity>

                )
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 25,
        paddingVertical: 20,
        paddingHorizontal: 15
    },
    header: {
        fontSize: 20
    },
    title: {
        paddingBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#eee",

    },
    chartContainer: {
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
