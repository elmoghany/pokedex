import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNameURL } from "../hooks";
import { useID } from "../hooks";
import { useTypes } from "../hooks";
import { usePicture } from "../hooks";
import { useBGColor } from "../hooks";
import Box from "./Box";



const BoxGrid = () => {

    ///////////////////////////////////
    /// GET NAMES & URL OF POKEMONS ///
    ///////////////////////////////////

    const nameURL = useNameURL();   
    // useEffect(() => {
    //     if (nameURL.length > 0) {
    //         nameURL.map(item => console.log("URL: ", item.url));
    //     } else {
    //         console.log("nameURL is empty");
    //     }
    // }, [nameURL]);
    
    ///////////////////////////////////
    ///     GET IDs of POKEMONS     ///
    ///////////////////////////////////

    const ID = useID({nameURL});
    // useEffect(() => {
    //     if (ID.length > 0) {
    //         ID.map(item => console.log("ID: ", item));
    //     } else {
    //         console.log("ID is empty");
    //     }
    // }, [ID]);


    ///////////////////////////////////
    /// GET TYPES  OF  POKEMONS     ///
    ///////////////////////////////////

    const types = useTypes({nameURL});
    // useEffect(() => {
    //     if (types.length > 0) {
    //         types.map(item => console.log("------types------: ", item));
    //     } else {
    //         console.log("types is empty");
    //     }
    // }, [types]);


    ///////////////////////////////////
    ///        GET Pictures         ///
    ///////////////////////////////////

    const picture = usePicture({nameURL});
    // useEffect(() => {
    //     if (picture.length > 0) {
    //         picture.map(item => console.log("------Picture------: ", item));
    //     } else {
    //         console.log("Picture is empty");
    //     }
    // }, [picture]);

    ///////////////////////////////////
    ///        GET bg color         ///
    ///////////////////////////////////

    const bgColor = useBGColor({nameURL});
    // useEffect(() => {
    //     if (picture.length > 0) {
    //         picture.map(item => console.log("------Picture------: ", item));
    //     } else {
    //         console.log("Picture is empty");
    //     }
    // }, [picture]);


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
