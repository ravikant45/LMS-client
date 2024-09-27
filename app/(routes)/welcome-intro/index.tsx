import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AppIntroSlider from "react-native-app-intro-slider"
import { router } from 'expo-router'
import { Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';
import { Nunito_400Regular } from '@expo-google-fonts/nunito'
import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import { onboardingSwiperDataType } from '@/types/global.d'
import { onboardingSwiperData } from '@/constants/constants'
type Props = {}

const index = (props: Props) => {
    let [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const renderItem = ({ item }: { item: onboardingSwiperDataType }) => {
        return (
            <LinearGradient
                colors={["#d7ebfc", "#fafcfc"]}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <Image
                    source={item.image}
                    style={styles.renderImg}
                />
                <View style={styles.textContainer}>
                    <Text className='capitalize' style={[{ fontFamily: 'Raleway_700Bold', fontSize: 24, alignSelf: 'center', textAlign: 'center' }]}>{item.title}</Text>
                    <View className='mt-2'>
                        <Text style={styles.dscTxt}>{item.description}</Text>
                        <Text style={styles.dscTxt}>{item.sortDescrition}</Text>
                    </View>
                </View>
            </LinearGradient>
        )

    }

    return <AppIntroSlider
        renderItem={renderItem}
        data={onboardingSwiperData}
        onDone={() => {
            router.push('/(routes)/sign-in')
        }}
        activeDotStyle={styles.activeDotStyle}
        dotStyle={styles.dotStyle}
        renderNextButton={() => (
            <View style={styles.nextBtn}>
                <Text style={styles.btnTxt}>Next</Text>
            </View>
        )}
        showSkipButton={false}
        bottomButton={true}
        renderDoneButton={() => (
            <View style={styles.nextBtn}>
                <Text style={styles.btnTxt}>Done</Text>
            </View>
        )}
    />
}

export default index;

const styles = StyleSheet.create({
    renderImg: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        objectFit: 'contain'
    },
    textContainer: {
        marginTop: 40,
        paddingHorizontal: 10
    },
    dscTxt: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 18,
        textAlign: 'center'
    },
    nextBtn: {
        backgroundColor: "#2467EC",
        width: responsiveWidth(88),
        height: responsiveHeight(5.5),
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    dotStyle: {
        backgroundColor: "#C6C7CC",
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDotStyle: {
        backgroundColor: "#2467Ec",
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        borderRadius: 5,
        marginHorizontal: 5,
    },
    btnTxt: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Nunito_400Regular',
    }
})