import { StyleSheet } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";

export const commonStyles = StyleSheet.create({
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
})