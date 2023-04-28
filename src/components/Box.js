import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Box = ({name}) => {
    return (
        <View title='box' style={styles.boxStyle}>
            <Text style={styles.textStyle}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 18, 
        color: 'white', 
        textAlign: 'center',
    },
    boxStyle:{
        backgroundColor: 'purple',
        width: 160,
        height: 150,
        borderRadius: 20,
        margin: 10,
    },
})

export default Box;