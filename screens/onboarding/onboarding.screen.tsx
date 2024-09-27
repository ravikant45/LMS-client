import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import Button from '@/components/button/button';
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import { router } from 'expo-router';
type Props = {}

const OnBoardingScreen = (props: Props) => {
    const [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return <LinearGradient
        colors={["#d7ebfc", "#fafcfc"]}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
        <View className='justify-center items-center gap-4'>
            <Image
                source={require("@/assets/images/logo.png")}
                className=''
            />
            <View className='mt-2'>
                <Text style={[styles.headertxt, { fontFamily: 'Raleway_700Bold' }]}>Start Learning with</Text>
                <Text style={[styles.headertxt, { fontFamily: 'Raleway_700Bold' }]}>Becodemy</Text>
            </View>
            <View className='mt-2'>
                <Text style={[styles.dscTxt, { fontFamily: 'Nunito_400Regular' }]}>Explore a variety of interactive lesson,</Text>
                <Text style={[styles.dscTxt, { fontFamily: 'Nunito_400Regular' }]}>video, quizze & assignment.</Text>
            </View>
            <View className='mt-4'>
                <Button title='Get Started' onPress={() => { router.push("/(routes)/welcome-intro") }} />
            </View>
        </View>
    </LinearGradient>
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
    headertxt: {
        fontSize: 34,
        color: '#000000',
        textAlign: 'center'
    },
    dscTxt: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center'
    }
})