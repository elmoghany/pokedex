import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { useEffect } from "react";

const Box = ({name, url, id}) => {

    return (
        <View title='box' style={styles.boxStyle}>
            <Text style={styles.nameStyle}>{name}</Text>
            <Text style={styles.idStyle}>{id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nameStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 18, 
        color: 'white', 
        textAlign: 'left',
    },
    idStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 18, 
        color: 'white',
        
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


    // const [color, setColor] = useState([]);
    // const [picture, setPicture] = useState([]);
    // const [serial, setSerial] = useState([]);
    // const [types, setTypes] = useState([]);
    // const [pokeURL, setPokeURL] = useState([]);

    // console.log(`${url}`)
    // const getColorResult = async () => {
    //     try{
    //         const resp = await axios({
    //             method:     'get',
    //             baseURL:    `${url}`, 
    //             url:        'species/url'
    //         })
    //         if (!resp.data) {
    //             throw new Error('Something went wrong');
    //         }
    //         else {
    //             setColor(resp.data.results)
    //         }
    //     } catch (err) {
    //         console.log('Error: ', err.message);
    //     }
    // }

    // useEffect (() => {
    //     getColorResult();
    // }, [])

    // useEffect(() => {
    //     console.log("getColorResult: ", color);
    // }, [name])
