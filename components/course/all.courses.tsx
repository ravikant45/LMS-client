import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';
import { Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { router } from 'expo-router';
import useGetAllCourses from '@/services/course/useGetAllCourses';
import CourseCard from '../cards/course.card';

type Props = {}

const AllCourses = (props: Props) => {
    const [fontsLoaded] = useFonts({
        Raleway_700Bold,
        Nunito_600SemiBold,
    });

    const [courses, setCourses] = useState<CoursesType[]>([]);
    const flatlistRef = useRef(null);
    const { data: allCourses, isPending: isCourseDataLoading } = useGetAllCourses();

    useEffect(() => {
        if (!isCourseDataLoading && allCourses) {
            setCourses(allCourses);
        }
    }, [isCourseDataLoading, allCourses]);

    if (!fontsLoaded) {
        return null; // Return null while fonts are loading
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={{ fontFamily: 'Raleway_700Bold', fontSize: 20 }}>Popular Courses</Text>
                <TouchableOpacity
                    onPress={() => { router.push('/(tabs)/courses') }}
                >
                    <Text style={{ color: '#2467EC', fontFamily: "Nunito_600SemiBold", fontSize: 15 }}>See All</Text>
                </TouchableOpacity>
            </View>
            {
                isCourseDataLoading ? (
                    <Text>Loading...</Text>
                ) : courses.length === 0 ? (
                    <Text>Courses Data not found</Text>
                ) : (
                    <FlatList
                        ref={flatlistRef}
                        data={courses}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => <CourseCard item={item} />}
                    />
                )
            }
        </View>
    );
}

export default AllCourses;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        justifyContent: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
    }
});
