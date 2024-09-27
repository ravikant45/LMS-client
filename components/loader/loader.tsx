import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

export default function Loader() {
    return (
        <LinearGradient
            colors={["#d7ebfc", "#fafcfc"]}
            style={styles.container}
        >
            <LottieView
                source={require("@/assets/images/animation/OnlineDataManager.json")}
                autoPlay
                loop
                style={styles.animation}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    animation: {
        width: 250,
        height: 250,
    },
});
