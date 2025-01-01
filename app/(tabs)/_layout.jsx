import { SIZES, COLORS } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
export default function Layout() {

    return (
        <Tabs
            initialRouteName="index"
            screenOptions={{
                tabBarActiveTintColor: COLORS?.light?.tint,
                tabBarInactiveTintColor: COLORS?.light?.tabIconDefault,
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: COLORS?.light?.background,
                    borderTopColor: COLORS?.light?.border,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Feather
                            name="home"
                            size={SIZES.xLarge}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ color }) => (
                        <Feather
                            name="search"
                            size={SIZES.xLarge}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <Feather
                            name="user"
                            size={SIZES.xLarge}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
