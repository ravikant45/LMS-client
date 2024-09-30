import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import useUser from '@/hooks/auth/useUser';
import { Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';
import { Nunito_400Regular, Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { Feather } from '@expo/vector-icons';
type Props = {}

const Header = (props: Props) => {
    const { user } = useUser();
    const [cartItems, setCartItems] = useState([]);

    const [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_600SemiBold,
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <Image
                    style={styles.image}
                    source={
                        user?.avatar ? user.avatar : require('@/assets/images/icons/User.png')
                    }
                />
                <View>
                    <Text style={[styles.title, { fontFamily: 'Raleway_700Bold' }]}>Hello,</Text>
                    <Text style={[styles.nameTxt, { fontFamily: 'Raleway_700Bold' }]}>{user?.name}</Text>
                </View>
            </View >
            <TouchableOpacity
                style={styles.bellButton}
            // onPress={() => router.push("/(routes)/cart")}
            >
                <View>
                    <Feather name="shopping-bag" size={26} color={"black"} />
                    <View style={styles.bellContainer}>
                        <Text style={{ color: "#fff", fontSize: 12 }}>
                            {cartItems?.length}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View >
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
    },
    firstContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    image: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 14,
        color: '#e0e0e0',
    },
    nameTxt: {
        fontSize: 16,
        color: '#000000',
    },
    bellButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
        borderRadius: 8
    },
    bellContainer: {
        position: 'absolute',
        right: -5,
        top: -5,
        backgroundColor: '#2467EC',
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
})