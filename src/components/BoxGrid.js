import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNameURL } from "../hooks";
import { useID } from "../hooks";
import Box from "./Box";



const BoxGrid = () => {

    ///////////////////////////////////
    /// GET NAMES & URL OF POKEMONS ///
    ///////////////////////////////////

    const nameURL = useNameURL();   
    useEffect(() => {
        if (nameURL.length > 0) {
            nameURL.map(item => console.log("URL: ", item.url));
        } else {
            console.log("nameURL is empty");
        }
    }, [nameURL]);
    
    ///////////////////////////////////
    ///     GET IDs of POKEMONS     ///
    ///////////////////////////////////

    const ID = useID({nameURL});
    useEffect(() => {
        if (ID.length > 0) {
            ID.map(item => console.log("ID: ", item));
        } else {
            console.log("ID is empty");
        }
    }, []);


    ///////////////////////////////////
    /// GET TYPES  OF  POKEMONS     ///
    ///////////////////////////////////


    ///////////////////////////////////
    ///   data     is     fecteched ///
    ///////////////////////////////////


    // useEffect(() => {
    // if (nameURL.length > 0 && ID.length > 0 && !dataFetched) {
    //     createPokemonObjects();
    //     setDataFetched(true); // Update the dataFetched state variable
    // }
    // }, [nameURL, ID, dataFetched]);

    return (
        <>
            <ScrollView>
                <View title='grid' style={styles.gridStyle}>
                    {/* {
                        pokemon.map( (item) => {
                            console.log(item)
                            return(
                                <Box key={item.name} name={item.name} url={item.url}/>
                            )
                        })
                    } */}
                    <Box>test</Box>
                    <Box>test</Box>
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
