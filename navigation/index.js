import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {HomeScreen, SingleTransactionScreen} from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const RootNav = () => (
    <NavigationContainer>
        <Navigator headerMode={"none"}>
            <Screen name="Home" component={HomeScreen} />
            <Screen name="SingleTransaction" component={SingleTransactionScreen} />
        </Navigator>
    </NavigationContainer>
);
