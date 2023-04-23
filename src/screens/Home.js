import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <>
            {/* safe area */}
            <View style={{  paddingTop: insets.top, 
                            paddingBottom: insets.bottom, 
                            paddingLeft: insets.left, 
                            paddingRight: insets.right
                        }}>
                <Text style={styles.titleStyle}>Pokedex</Text>
            </View>

            {/* grid of pokemons */}
            <View title='grid' style={styles.gridStyle}>
                <View title='box' style={styles.boxStyle}>
                    <Text>   inside box</Text>
                </View>
                <View title='box' style={styles.boxStyle}>
                    <Text>   inside box</Text>
                </View>
                {/* to be converted into a component for reuse */}
            </View>
        </>
)
}


const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 35,
        fontWeight: 'bold',
        margin: 18,  
    },
    gridStyle:{
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 18,

    },
    boxStyle:{
        backgroundColor: 'purple',
        width: 160,
        height: 150,
        borderRadius: 20,
    },
})

export default HomeScreen;