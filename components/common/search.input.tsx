import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito';
type Props = {}

const SearchInput = (props: Props) => {
    const [fontsLoaded, fontError] = useFonts({
        Nunito_700Bold,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.filteringContainer}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder='Search'
                    style={[styles.input, { fontFamily: 'Nunito_700Bold' }]}
                />
                <TouchableOpacity
                    style={styles.searchIconContainer}
                >
                    <AntDesign name='search1' size={20} color={"#fff"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    filteringContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 16,
    },
    searchContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: "black",
        paddingVertical: 10,
        width: 271,
        height: 48,
    },
    searchIconContainer: {
        width: 36,
        height: 36,
        backgroundColor: '#2467EC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
})