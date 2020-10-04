import React from 'react';
import { StyleSheet, View,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';
import {CustomText} from "../components";

export const Button = ({title,onPress,style,...rest}) => {
    const Touchable = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
    return(
        <View style={[style,styles.container]}>
            <Touchable onPress={onPress} {...rest} >
                <View style={styles.btn}>
                    <CustomText weight="bold" style={styles.title}>
                        {title}
                    </CustomText>
                </View>
            </Touchable>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        overflow:"hidden",
        borderRadius:50,
        marginHorizontal: 10,

    },
    btn:{
        width:100,
        padding:10,
        alignItems: "center",
        backgroundColor: "#eee"
    },
    title:{
        textTransform: "capitalize",
        color:"black",
        textAlign: "center",
        fontSize: 12,
        lineHeight:17
    },

});