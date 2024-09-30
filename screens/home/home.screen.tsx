import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '@/components/header/header';
import SearchInput from '@/components/common/search.input';
import BannerSlider from '@/components/home/home.banner.screen';
import AllCourses from '@/components/course/all.courses';
type Props = {}

const HomeScreen = (props: Props) => {
    return <LinearGradient
        colors={["#d7ebfc", "#fafcfc"]}
        style={{ flex: 1, paddingTop: 25 }}
    >
        <Header />
        <SearchInput />
        <ScrollView showsVerticalScrollIndicator={false}>
            <BannerSlider />
            <AllCourses />
        </ScrollView>
    </LinearGradient>
}

export default HomeScreen;

const styles = StyleSheet.create({})