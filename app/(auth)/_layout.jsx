import { Slot, Stack, useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { AuthContext } from "../../context/AuthContext";

const _layout = () => {
    const router = useRouter();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            router.replace("(tabs)");
        }
    }, [user, router]);

    return (
        <View style={{ flex: 1 }}>
            {/* <Text style={{ textAlign: "center", marginVertical: 10 }}>Test Above</Text> */}
            <Stack
                screenOptions={{
                    headerShown: false, // Disable headers for these screens
                    headerStyle: { backgroundColor: "#f8f9fa" },
                    headerTintColor: "#333",
                }}
            >
                <Slot />
            </Stack>
            {/* <Text style={{ textAlign: "center", marginVertical: 10 }}>Test Below</Text> */}
        </View>
    );
};

export default _layout;
