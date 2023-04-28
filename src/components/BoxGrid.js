import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../api/axios";
import Box from "./Box";

const BoxGrid = () => {
    const [name, setName] = useState([]);

    const getNameResult = async () => {
        try{
            const resp = await axios.get('/pokemon')
            if (!resp.data) {
                throw new Error('Something went wrong');
            }
            else {
                setName(resp.data.results)
            }
        } catch (err) {
            console.log('Error: ', err.message);
        }
    }

    useEffect (() => {
        getNameResult();
    }, [])

    useEffect(() => {
        console.log("getNameResult: ", name);
    }, [name])


    return (
        <>
            <ScrollView>
                <View title='grid' style={styles.gridStyle}>
                    {
                        name.map( (item) => {
                            console.log(item)
                            return(
                                <Box key={item.name} name={item.name}/>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 35,
        fontWeight: 'bold',
        margin: 18,  
    },
    gridStyle: {
        alignContent: "center",
        flexWrap: 'wrap',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#D5D5D5',
        margin: 18,
        borderRadius: 20,
    },
})

export default BoxGrid;
