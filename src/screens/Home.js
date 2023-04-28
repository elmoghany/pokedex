import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BoxGrid from '../components/BoxGrid';

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
            <BoxGrid />
        </>
)
}


const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 35,
        fontWeight: 'bold',
        margin: 18,  
    },
})

export default HomeScreen;