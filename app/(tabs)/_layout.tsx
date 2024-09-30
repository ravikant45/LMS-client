import React from 'react'
import { Tabs } from 'expo-router'
import { Image } from 'react-native'

type Props = {}

const TabLayout = (props: Props) => {
    return (
        <Tabs
            screenOptions={({ route }) => {
                return {
                    tabBarIcon: ({ color }) => {
                        let iconeName;
                        if (route.name === "index") {
                            iconeName = require("@/assets/images/icons/HouseSimple.png");
                        } else if (route.name === "search/index") {
                            iconeName = require("@/assets/images/icons/search.png");
                        } else if (route.name === "courses/index") {
                            iconeName = require("@/assets/images/icons/BookBookmark.png");
                        } else if (route.name === "profile/index") {
                            iconeName = require("@/assets/images/icons/User.png");
                        }

                        return (
                            <Image
                                style={{ width: 25, height: 25, tintColor: color }}
                                source={iconeName}
                            />
                        );
                    },
                    headerShown: false,
                    tabBarShowLabel: false,
                }
            }}
        >
            <Tabs.Screen name="index" />
            <Tabs.Screen name='search/index' />
            <Tabs.Screen name="courses/index" />
            <Tabs.Screen name='profile/index' />
        </Tabs>
    )
}

export default TabLayout;