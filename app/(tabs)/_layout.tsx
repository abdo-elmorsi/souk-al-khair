import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AntDesign } from "@expo/vector-icons";
import BlurTabBarBackground from "@/components/ui/TabBarBackground.ios";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const activeColor = Colors[colorScheme ?? "light"].tint;
    const inactiveColor = Colors[colorScheme ?? "light"].tabIconDefault;
    const backgroundColor = Colors[colorScheme ?? "light"].background;

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: inactiveColor,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarButton: HapticTab,
                tabBarBackground: () => <BlurTabBarBackground />,
                tabBarStyle: [
                    styles.tabBar,
                    Platform.select({
                        ios: styles.iosTabBar,
                    }),
                ],
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <IconSymbol size={28} name="house.fill" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={26} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ color }) => (
                        <IconSymbol
                            size={28}
                            name="paperplane.fill"
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="setting" size={26} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        elevation: 0,
        backgroundColor: "transparent", // Blends with the blur background
        paddingVertical: 10, // Adds vertical spacing for better padding
    },
    iosTabBar: {
        position: "absolute",
        bottom: 20,
        marginHorizontal: 16,
        borderRadius: 16,
        height: 70,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
});
