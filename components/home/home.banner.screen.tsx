import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from "react-native-swiper";
import { commonStyles } from '@/styles/common/common.styles';
import { bannerData } from '@/constants/constants';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
type Props = {}

const BannerSlider = (props: Props) => {
    return (
        <View style={styles.container}>
            <Swiper
                dotStyle={commonStyles.dotStyle}
                activeDotStyle={commonStyles.activeDotStyle}
                autoplay={true}
                autoplayTimeout={5}
            >
                {
                    bannerData.map((item, index) => (
                        <View key={index} style={styles.slides}>
                            <Image
                                style={styles.slideImg}
                                source={item.bannerImageUrl}
                            />
                        </View>
                    ))
                }
            </Swiper>
        </View>
    )
}

export default BannerSlider

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        height: hp('35%'),
        marginHorizontal: 16
    },
    slides: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        marginVertical: 20
    },
    slideImg: {
        width: 400,
        height: 250,
        resizeMode: 'contain',
    }
})